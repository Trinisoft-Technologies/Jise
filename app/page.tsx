"use client";

import { useState } from "react";
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  Clock3,
  Globe,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  Shield,
  Truck,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";

const features = [
  {
    icon: MapPin,
    title: "Real-time tracking",
    text: "Monitor every shipment from pickup to drop-off with live GPS updates and instant notifications.",
  },
  {
    icon: Clock3,
    title: "On-time delivery",
    text: "Dependable delivery windows across Nigeria. Your cargo arrives when promised, every time.",
  },
  {
    icon: Shield,
    title: "Secure handling",
    text: "Your goods are insured, handled with care, and tracked end-to-end for complete peace of mind.",
  },
];

const perks = [
  {
    icon: Globe,
    title: "Nationwide coverage",
    text: "All 36 states plus the FCT. No corner of Nigeria is out of reach.",
  },
  {
    icon: PackageCheck,
    title: "Any package, any size",
    text: "From small parcels to full truckloads. Documents, electronics, and more.",
  },
  {
    icon: Truck,
    title: "Flexible solutions",
    text: "Same-day, next-day, or scheduled routes. Choose what fits your operations.",
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
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [joined, setJoined] = useState(false);
  const [email, setEmail] = useState("");

  function handleWaitlistSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setJoined(true);
    setWaitlistOpen(false);
    setEmail("");
  }

  return (
    <div id="top" className="min-h-screen overflow-hidden bg-[#f8f6f0] text-[#20211f]">
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-semibold text-[#666963] md:flex">
          <a className="transition-colors hover:text-[#20211f]" href="#how-it-works">
            What we do
          </a>
          <a className="transition-colors hover:text-[#20211f]" href="#newsletter">
            Stay updated
          </a>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button
            className="h-auto rounded-full bg-[#20211f] px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#20211f]"
            onClick={() => setWaitlistOpen(true)}
          >
            Join the waitlist <ArrowRight size={16} />
          </Button>
        </div>
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full p-2 md:hidden"
                aria-label="Open menu"
              />
            }
          >
            <Menu size={22} />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm">
            <SheetHeader>
              <SheetTitle className="font-heading text-lg font-extrabold">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 px-4 text-sm font-bold">
              <a href="#how-it-works" className="py-2 transition-colors hover:text-[#f36b43]">
                What we do
              </a>
              <a href="#newsletter" className="py-2 transition-colors hover:text-[#f36b43]">
                Stay updated
              </a>
              <Separator className="my-2" />
              <Button
                className="h-auto w-full rounded-full bg-[#f36b43] py-3 text-white hover:bg-[#f36b43]"
                onClick={() => setWaitlistOpen(true)}
              >
                Join the waitlist
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </header>

      <main>
        {/* Hero */}
        <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:pb-28 lg:pt-16">
          <div className="relative z-10 animate-rise">
            <Badge
              variant="outline"
              className="mb-7 gap-2 rounded-full border-[#f6c3b2] bg-[#fff1eb] px-3.5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#c04e2f]"
            >
              <span className="h-2 w-2 rounded-full bg-[#f36b43]" /> Coming soon
            </Badge>
            <h1 className="max-w-xl font-heading text-[clamp(3.5rem,7vw,6.7rem)] font-extrabold leading-[0.9] tracking-[-0.075em] text-[#20211f]">
              Logistics
              <br />
              <span className="text-[#f36b43]">made simple.</span>
            </h1>
            <p className="mt-7 max-w-md text-lg leading-8 text-[#666963]">
              Jise is a new way to move goods across Nigeria. Trackable, reliable, and built for
              businesses that move fast. Launching soon.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button
                className="h-auto rounded-full bg-[#f36b43] px-6 py-4 text-sm font-extrabold text-white shadow-[0_12px_25px_rgba(243,107,67,0.25)] transition-transform hover:-translate-y-1 hover:bg-[#f36b43]"
                onClick={() => setWaitlistOpen(true)}
              >
                {joined ? (
                  <>
                    <CheckCircle2 size={17} className="mr-1.5" /> You are on the list
                  </>
                ) : (
                  <>
                    Join the waitlist <ArrowRight size={17} />
                  </>
                )}
              </Button>
              <a
                href="#how-it-works"
                className="flex items-center gap-2 px-2 py-3 text-sm font-bold text-[#20211f]"
              >
                See what we are building
              </a>
            </div>
            <div className="mt-12 flex items-center gap-4 pt-5 text-sm text-[#777a73]">
              <span className="flex items-center gap-1.5 text-xs font-bold text-[#999b94]">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e9f2e7] text-[#56815a]">
                  <CheckCircle2 size={12} />
                </span>
                Early access
              </span>
              <span className="text-[#d5d3cc]">|</span>
              <span className="text-xs text-[#999b94]">Be the first to know when we go live</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-155 animate-float">
            <div className="hero-photo relative min-h-117.5 overflow-hidden rounded-[2.5rem] shadow-[0_25px_70px_rgba(61,45,25,0.18)] sm:min-h-145">
              <div className="absolute inset-0 bg-linear-to-t from-[#1f2924]/75 via-transparent to-transparent" />
              <Card className="absolute left-6 top-6 border-0 bg-[#fffaf0]/95 px-4 py-3 shadow-lg backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#777a73]">
                  Launching in
                </p>
                <p className="mt-1 text-sm font-extrabold">Lagos, Nigeria</p>
              </Card>
              <div className="absolute bottom-7 left-7 right-7 text-white">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f36b43]">
                    <Truck size={15} />
                  </span>{" "}
                  Built for moving Nigeria
                </div>
                <div className="mt-2 flex justify-between text-xs text-white/80">
                  <span>Warehouse</span>
                  <span>Doorstep</span>
                </div>
              </div>
            </div>
            <Card className="absolute -bottom-5 -right-3 flex w-48 items-center gap-3 border-0 p-4 shadow-[0_15px_35px_rgba(61,45,25,0.15)] sm:-right-8">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e9f2e7] text-[#56815a]">
                <Bell size={18} />
              </span>
              <div>
                <p className="text-xs text-[#777a73]">Early access</p>
                <p className="font-bold">Join the waitlist</p>
              </div>
            </Card>
          </div>
        </section>

        <Separator className="border-[#e3e0d7]" />

        {/* What we do */}
        <section id="how-it-works" className="border-b border-[#e3e0d7] bg-[#fffdf8]">
          <div className="mx-auto grid max-w-7xl gap-0 px-6 md:grid-cols-3 lg:px-10">
            {features.map(({ icon: Icon, title, text }, index) => (
              <Card
                key={title}
                className={`flex gap-4 rounded-none border-0 py-8 md:px-8 ${
                  index !== 0 ? "border-t border-[#e3e0d7] md:border-l md:border-t-0" : ""
                }`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff0e9] text-[#f36b43]">
                  <Icon size={20} />
                </span>
                <div>
                  <h2 className="font-bold">{title}</h2>
                  <p className="mt-1 text-sm leading-6 text-[#777a73]">{text}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Perks */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-8 md:grid-cols-3">
            {perks.map(({ icon: Icon, title, text }) => (
              <Card key={title} className="flex flex-col gap-4 rounded-2xl border-[#e3e0d7] p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff0e9] text-[#f36b43]">
                  <Icon size={20} />
                </span>
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm leading-6 text-[#777a73]">{text}</p>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="border-[#e3e0d7]" />

        {/* Newsletter */}
        <section id="newsletter" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <Card className="flex flex-col justify-between gap-8 rounded-[2rem] border-0 bg-[#20211f] px-7 py-12 text-white sm:px-14">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ffb08f]">
                Stay in the loop
              </p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
                Be first to know when Jise launches.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/60">
                Drop your email and we will ping you the moment we go live. No spam, just launch
                updates.
              </p>
            </div>
            {joined ? (
              <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-6 py-4">
                <CheckCircle2 size={20} className="text-[#56815a]" />
                <span className="text-sm font-bold text-white">
                  You are on the list! We will be in touch.
                </span>
              </div>
            ) : (
              <form
                className="flex flex-col gap-3 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  setJoined(true);
                }}
              >
                <div className="relative flex-1">
                  <Mail
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999b94]"
                  />
                  <Input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="h-13 rounded-full border-0 bg-white pl-11 pr-4 text-sm text-[#20211f] placeholder:text-[#999b94] focus-visible:ring-[#f36b43]/30"
                  />
                </div>
                <Button
                  type="submit"
                  className="h-13 shrink-0 rounded-full bg-[#f36b43] px-7 text-sm font-extrabold text-white shadow-[0_10px_20px_rgba(243,107,67,0.25)] transition-transform hover:-translate-y-0.5 hover:bg-[#f36b43]"
                >
                  Notify me <ArrowRight size={16} />
                </Button>
              </form>
            )}
          </Card>
        </section>

        {/* For businesses */}
        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
          <Card className="flex flex-col justify-between gap-6 rounded-[2rem] border-[#e3e0d7] bg-[#fffdf8] px-7 py-10 sm:px-12 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c04e2f]">
                For businesses & enterprises
              </p>
              <h2 className="mt-3 max-w-xl font-heading text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
                Want early access for your business?
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-[#777a73]">
                E-commerce, manufacturing, SME. Whatever you ship, we want to help you move it
                better.
              </p>
            </div>
            <Button
              className="h-auto shrink-0 self-start rounded-full bg-[#20211f] px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-1 hover:bg-[#20211f]"
              onClick={() => setWaitlistOpen(true)}
            >
              Get early access <ArrowRight size={16} />
            </Button>
          </Card>
        </section>
      </main>

      <footer
        id="footer"
        className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-7 text-sm text-[#777a73] sm:flex-row sm:items-center sm:justify-between lg:px-10"
      >
        <Logo />
        <span>Moving Nigeria forward, one delivery at a time.</span>
        <span>&copy; 2026 Jise</span>
      </footer>

      {/* Waitlist Dialog */}
      <Dialog open={waitlistOpen} onOpenChange={setWaitlistOpen}>
        <DialogContent className=" max-w-lg max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-[2rem] bg-[#fffdf8] p-7 shadow-2xl sm:p-10">
          <DialogHeader className="mb-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f36b43] text-xl font-black text-white">
              J
            </span>
            <DialogTitle className="mt-6 font-heading text-3xl font-extrabold tracking-tighter">
              Join the waitlist
            </DialogTitle>
            <DialogDescription className="mt-2 text-sm leading-6 text-[#777a73]">
              Be among the first to try Jise when we launch. Enter your details and we will reach
              out the moment we are live.
            </DialogDescription>
          </DialogHeader>
          {joined ? (
            <div className="flex flex-col items-center gap-3 py-8 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e9f2e7] text-[#56815a]">
                <CheckCircle2 size={28} />
              </span>
              <p className="text-lg font-extrabold">You are on the list!</p>
              <p className="text-sm text-[#777a73]">
                We will let you know as soon as Jise is ready.
              </p>
            </div>
          ) : (
            <form className="space-y-3" onSubmit={handleWaitlistSubmit}>
              <div className="space-y-2">
                <Label className="text-sm font-bold">Full name</Label>
                <Input
                  required
                  type="text"
                  placeholder="Adaeze Okonkwo"
                  className="h-12 rounded-xl border-[#ddd9cf] bg-white px-4 text-sm focus-visible:border-[#f36b43] focus-visible:ring-[#f36b43]/15"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-bold">Email address</Label>
                <Input
                  required
                  type="email"
                  placeholder="you@company.com"
                  className="h-12 rounded-xl border-[#ddd9cf] bg-white px-4 text-sm focus-visible:border-[#f36b43] focus-visible:ring-[#f36b43]/15"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-bold">
                  I am interested in <span className="text-[#999b94]">(optional)</span>
                </Label>
                <Input
                  type="text"
                  placeholder="e.g. e-commerce deliveries, bulk shipping"
                  className="h-12 rounded-xl border-[#ddd9cf] bg-white px-4 text-sm focus-visible:border-[#f36b43] focus-visible:ring-[#f36b43]/15"
                />
              </div>
              <Button
                type="submit"
                className="h-12 w-full rounded-xl bg-[#20211f] text-sm font-bold text-white transition-colors hover:bg-[#f36b43]"
              >
                Join waitlist <ArrowRight size={16} />
              </Button>
            </form>
          )}
          <p className="mt-6 text-center text-xs text-[#999b94]">
            No spam. Just launch updates. Unsubscribe anytime.
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
}
