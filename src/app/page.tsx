"use client";

import { motion, type Variants } from "framer-motion";
import { Linkedin, Mail, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <div className="relative bg-transparent text-foreground dark selection:bg-primary/30 min-h-screen">
      <img
        src="/logo/image.png"
        alt=""
        className="fixed inset-0 w-full h-full object-cover"
      />

      <nav className="z-50 w-full h-16 border-b border-border/40 backdrop-blur-md sticky top-0 flex items-center justify-between px-6 md:px-12">
        <div className="font-clash font-bold text-xl tracking-tight flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-linear-to-tr from-primary to-accent flex items-center justify-center text-[10px] text-primary-foreground font-black overflow-hidden">
            <img src="/logo/logo.png" alt="Aman Mittal" />
          </div>
          Aman Mittal
        </div>

        <Button
          onClick={() =>
            window.open("https://www.linkedin.com/in/aman-mittal-22833b288/")
          }
          variant="outline"
          size="sm"
          className="hidden md:flex gap-2 rounded-full border-border/50 hover:bg-secondary/50 cursor-pointer"
        >
          <Mail size={14} /> Let's Connect
        </Button>
      </nav>

      <main className="relative z-50 max-w-5xl mx-auto px-6 pt-32 pb-24 md:pt-40">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center space-y-8"
        >
          <motion.div
            variants={itemVariants}
            className="relative group cursor-pointer inline-block"
          >
            <div className="absolute -inset-1 bg-linear-to-r from-primary via-accent to-secondary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <Avatar className="w-24 h-24 border-2 border-background shadow-2xl relative">
              <AvatarImage src="/logo/logo.png" alt="Aman Mittal" />
              <AvatarFallback className="bg-secondary text-2xl font-bold">
                AM
              </AvatarFallback>
            </Avatar>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 max-w-3xl">
            <Badge
              variant="secondary"
              className="px-3 py-1 text-xs mb-4 uppercase tracking-widest border border-border/50 bg-secondary/30 backdrop-blur-sm font-geist"
            >
              Creative Professional
            </Badge>
            <h1 className="text-5xl md:text-7xl font-clash font-extrabold bg-clip-text text-transparent bg-linear-to-tr from-emerald-400 via-foreground/90 to-muted-foreground leading-[1.1] tracking-tighter">
              Hi, I'm Aman Mittal
            </h1>
            <p className="text-xl md:text-2xl text-foreground font-serif italic max-w-2xl mx-auto leading-relaxed">
              Developer <span className="text-primary/50 mx-1 not-italic">•</span>{" "}
              UI/UX Designer{" "}
              <span className="text-primary/50 mx-1 not-italic">•</span> Open
              Source Enthusiast
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Button
              onClick={() =>
                window.open("https://www.linkedin.com/in/aman-mittal-22833b288/")
              }
              size="lg"
              variant="outline"
              className="rounded-full bg-background/50 backdrop-blur-md border-border/50 hover:bg-secondary/50 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              LinkedIn <Linkedin /> <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full bg-background/50 backdrop-blur-md border-border/50 hover:bg-secondary/50 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  Contact Me
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="font-clash text-2xl font-bold">
                    Let's Connect
                  </SheetTitle>
                  <SheetDescription className="font-geist text-foreground text-base">
                    Reach out for opportunities, collaborations, or just a friendly chat.
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8 p-10">
                  <Button
                    asChild
                    size="lg"
                    className="w-full rounded-2xl bg-[var(--brand-whatsapp)] hover:bg-[var(--brand-whatsapp-hover)] text-white shadow-lg shadow-[var(--brand-whatsapp)]/20 transition-all duration-200"
                  >
                    <a
                      href="https://wa.me/918882390482?text=Hi%20Aman,%20I%20came%20across%20your%20portfolio%20and%20wanted%20to%20connect!"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="ml-2 w-4 h-4" /> WhatsApp Me
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full rounded-2xl border-[var(--brand-linkedin)]/40 text-[var(--brand-linkedin)] hover:bg-[var(--brand-linkedin)]/10 transition-all duration-200"
                  >
                    <a
                      href="https://www.linkedin.com/in/aman-mittal-22833b288/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Connect on LinkedIn <Linkedin className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="w-full rounded-2xl transition-all duration-200"
                  >
                    <a href="mailto:hello@amanmittal.com">
                      Email Me <Mail className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

