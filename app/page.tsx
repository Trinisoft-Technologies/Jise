"use client";

import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Clock3,
  MapPin,
  Menu,
  PackageCheck,
  ShoppingBag,
  Truck,
  X,
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Track every turn",
    text: "Know exactly where your order is, from pickup to your doorstep.",
  },
  {
    icon: Clock3,
    title: "Made for your pace",
    text: "Reliable delivery windows that fit around your day in Lagos.",
  },
  {
    icon: PackageCheck,
    title: "Handled with care",
    text: "Your food arrives fresh, secure, and ready for the good part.",
  },
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="Jise home">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f36b43] text-lg font-black text-white shadow-[0_7px_18px_rgba(243,107,67,0.28)]">
        J
      </span>
      <span className="font-heading text-[1.35rem] font-extrabold tracking-[-0.06em] text-[#20211f]">
        jise<span className="text-[#f36b43]">.</span>
      </span>
    </a>
  );
}

export default function Home() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSignedIn(true);
    setLoginOpen(false);
  }

  return (
    <div id="top" className="min-h-screen overflow-hidden bg-[#f8f6f0] text-[#20211f]">
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-semibold text-[#666963] md:flex">
          <a className="transition-colors hover:text-[#20211f]" href="#how-it-works">
            How it works
          </a>
          <a className="transition-colors hover:text-[#20211f]" href="#business">
            For businesses
          </a>
          <a className="transition-colors hover:text-[#20211f]" href="#footer">
            Help
          </a>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <button
            className="rounded-full px-4 py-2.5 text-sm font-bold text-[#20211f] transition-colors hover:bg-white"
            onClick={() => setLoginOpen(true)}
          >
            {signedIn ? "Welcome back" : "Sign in"}
          </button>
          <button
            className="flex items-center gap-2 rounded-full bg-[#20211f] px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
            onClick={() => setLoginOpen(true)}
          >
            Get started <ArrowRight size={16} />
          </button>
        </div>
        <button
          className="rounded-full p-2 md:hidden"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        {mobileMenuOpen && (
          <div className="absolute left-5 right-5 top-16 rounded-2xl border border-[#e6e3db] bg-white p-5 shadow-xl md:hidden">
            <nav className="flex flex-col gap-4 text-sm font-bold">
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>
                How it works
              </a>
              <a href="#business" onClick={() => setMobileMenuOpen(false)}>
                For businesses
              </a>
              <button
                className="w-full rounded-full bg-[#f36b43] py-3 text-white"
                onClick={() => {
                  setLoginOpen(true);
                  setMobileMenuOpen(false);
                }}
              >
                Sign in
              </button>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:pb-28 lg:pt-16">
          <div className="relative z-10 animate-rise">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#f6c3b2] bg-[#fff1eb] px-3.5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#c04e2f]">
              <span className="h-2 w-2 rounded-full bg-[#f36b43]" /> Lagos, Nigeria
            </div>
            <h1 className="max-w-xl font-heading text-[clamp(3.5rem,7vw,6.7rem)] font-extrabold leading-[0.9] tracking-[-0.075em] text-[#20211f]">
              Good food.
              <br />
              <span className="text-[#f36b43]">Right on time.</span>
            </h1>
            <p className="mt-7 max-w-md text-lg leading-8 text-[#666963]">
              From your favourite spot to your front door, Jise makes food delivery feel simple,
              quick, and human.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                className="flex items-center gap-3 rounded-full bg-[#f36b43] px-6 py-4 text-sm font-extrabold text-white shadow-[0_12px_25px_rgba(243,107,67,0.25)] transition-transform hover:-translate-y-1"
                onClick={() => setLoginOpen(true)}
              >
                Order something good <ArrowRight size={17} />
              </button>
              <a
                href="#how-it-works"
                className="flex items-center gap-2 px-2 py-3 text-sm font-bold text-[#20211f]"
              >
                See how it works <ChevronDown size={16} />
              </a>
            </div>
            <div className="mt-12 flex items-center gap-4 border-t border-[#dedbd2] pt-5 text-sm text-[#777a73]">
              <div className="flex -space-x-2">
                <span className="avatar bg-[#d8a37c]">A</span>
                <span className="avatar bg-[#8fae92]">K</span>
                <span className="avatar bg-[#d89c9c]">T</span>
              </div>
              <span>
                <strong className="text-[#20211f]">Loved by Lagos</strong>
                <br />
                Everyday people, everyday meals
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-155 animate-float">
            <div className="hero-photo relative min-h-117.5 overflow-hidden rounded-[2.5rem] shadow-[0_25px_70px_rgba(61,45,25,0.18)] sm:min-h-145">
              <div className="absolute inset-0 bg-linear-to-t from-[#1f2924]/75 via-transparent to-transparent" />
              <div className="absolute left-6 top-6 rounded-2xl bg-[#fffaf0]/95 px-4 py-3 shadow-lg backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#777a73]">
                  Live delivery
                </p>
                <p className="mt-1 text-sm font-extrabold">Arriving in 24 min</p>
              </div>
              <div className="absolute bottom-7 left-7 right-7 text-white">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f36b43]">
                    <Truck size={15} />
                  </span>{" "}
                  On the way to you
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/35">
                  <div className="h-full w-[68%] rounded-full bg-[#ffb08f]" />
                </div>
                <div className="mt-2 flex justify-between text-xs text-white/80">
                  <span>Picked up</span>
                  <span>Almost there</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-3 flex w-48 items-center gap-3 rounded-2xl bg-white p-4 shadow-[0_15px_35px_rgba(61,45,25,0.15)] sm:-right-8">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e9f2e7] text-[#56815a]">
                <ShoppingBag size={18} />
              </span>
              <div>
                <p className="text-xs text-[#777a73]">Now serving</p>
                <p className="font-bold">Your next craving</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="border-y border-[#e3e0d7] bg-[#fffdf8]">
          <div className="mx-auto grid max-w-7xl gap-0 px-6 md:grid-cols-3 lg:px-10">
            {features.map(({ icon: Icon, title, text }, index) => (
              <div
                key={title}
                className={`flex gap-4 py-8 md:px-8 ${index !== 0 ? "border-t border-[#e3e0d7] md:border-l md:border-t-0" : ""}`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff0e9] text-[#f36b43]">
                  <Icon size={20} />
                </span>
                <div>
                  <h2 className="font-bold">{title}</h2>
                  <p className="mt-1 text-sm leading-6 text-[#777a73]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="business" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="flex flex-col justify-between gap-6 rounded-[2rem] bg-[#20211f] px-7 py-10 text-white sm:px-12 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ffb08f]">
                For restaurants & riders
              </p>
              <h2 className="mt-3 max-w-xl font-heading text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
                Build your next chapter with Jise.
              </h2>
            </div>
            <button
              className="flex shrink-0 items-center gap-2 self-start rounded-full bg-[#ffb08f] px-5 py-3 text-sm font-bold text-[#20211f] transition-transform hover:-translate-y-1"
              onClick={() => setLoginOpen(true)}
            >
              Join the network <ArrowRight size={16} />
            </button>
          </div>
        </section>
      </main>
      <footer
        id="footer"
        className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-[#e3e0d7] px-6 py-7 text-sm text-[#777a73] sm:flex-row sm:items-center sm:justify-between lg:px-10"
      >
        <Logo />
        <span>Made for the way Lagos eats.</span>
        <span>© 2026 Jise</span>
      </footer>

      {loginOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#20211f]/45 px-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Sign in to Jise"
        >
          <div className="relative w-full max-w-md rounded-[2rem] bg-[#fffdf8] p-7 shadow-2xl sm:p-10">
            <button
              className="absolute right-5 top-5 rounded-full p-2 text-[#777a73] hover:bg-[#f1eee6]"
              aria-label="Close sign in"
              onClick={() => setLoginOpen(false)}
            >
              <X size={19} />
            </button>
            <div className="mb-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f36b43] text-xl font-black text-white">
                J
              </span>
              <h2 className="mt-6 font-heading text-3xl font-extrabold tracking-tighter">
                Welcome to Jise
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#777a73]">
                A little placeholder for the real account experience.
              </p>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <label className="block text-sm font-bold">
                Email address
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 h-12 w-full rounded-xl border border-[#ddd9cf] bg-white px-4 text-sm outline-none transition focus:border-[#f36b43] focus:ring-2 focus:ring-[#f36b43]/15"
                />
              </label>
              <label className="block text-sm font-bold">
                Password
                <input
                  required
                  type="password"
                  placeholder="••••••••"
                  className="mt-2 h-12 w-full rounded-xl border border-[#ddd9cf] bg-white px-4 text-sm outline-none transition focus:border-[#f36b43] focus:ring-2 focus:ring-[#f36b43]/15"
                />
              </label>
              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#20211f] text-sm font-bold text-white transition-colors hover:bg-[#f36b43]"
              >
                Continue <ArrowRight size={16} />
              </button>
            </form>
            <p className="mt-6 text-center text-xs text-[#999b94]">
              Demo only. No account will be created.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
