import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, ArrowRight, ExternalLink, MessageCircle } from "lucide-react";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Card, CardContent } from "./components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <div className="relative bg-transparent text-foreground dark selection:bg-primary/30">
      <img src="/logo/image.png" alt="" className="fixed inset-0 w-full h-full object-cover" />
    

      <nav className="z-50 w-full h-16 border-b border-border/40 backdrop-blur-md sticky top-0 flex items-center justify-between px-6 md:px-12">
        <div className="font-clash font-bold text-xl tracking-tight flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-linear-to-tr from-primary to-accent flex items-center justify-center text-[10px] text-primary-foreground font-black">
            <img src="/logo/logo.png" alt="" />
          </div>
          Aman Mittal
        </div>
       
        <Button onClick={() => window.open("https://www.linkedin.com/in/aman-mittal-22833b288/")} variant="outline" size="sm" className="hidden md:flex gap-2 rounded-full border-border/50 hover:bg-secondary/50">
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
          <motion.div variants={itemVariants} className="relative group cursor-pointer inline-block">
            <div className="absolute -inset-1 bg-linear-to-r from-primary via-accent to-secondary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <Avatar className="w-24 h-24 border-2 border-background shadow-2xl relative">
              <AvatarImage src="/logo/logo.png" alt="Aman Mittal" />
              <AvatarFallback className="bg-secondary text-2xl font-bold">AM</AvatarFallback>
            </Avatar>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 max-w-3xl">
            <Badge variant="secondary" className="px-3 py-1 text-xs mb-4 uppercase tracking-widest border border-border/50 bg-secondary/30 backdrop-blur-sm font-geist">
              Creative Professional
            </Badge>
            <h1 className="text-5xl md:text-7xl font-clash font-extrabold bg-clip-text text-transparent bg-linear-to-tr from-emerald-400 via-foreground/90 to-muted-foreground leading-[1.1] tracking-tighter">
              Hi, I'm Aman Mittal
            </h1>
            <p className="text-xl md:text-2xl text-foreground font-serif italic max-w-2xl mx-auto leading-relaxed">
              Developer <span className="text-primary/50 mx-1 not-italic">•</span> UI/UX Designer <span className="text-primary/50 mx-1 not-italic">•</span> Open Source Enthusiast
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Button onClick={() => window.open("https://www.linkedin.com/in/aman-mittal-22833b288/")} size="lg" variant="outline" className="rounded-full bg-background/50 backdrop-blur-md border-border/50 hover:bg-secondary/50 hover:scale-105 active:scale-95 transition-all duration-200">
              LinkedIn <Linkedin/> <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button size="lg" variant="outline" className="rounded-full bg-background/50 backdrop-blur-md border-border/50 hover:bg-secondary/50 hover:scale-105 active:scale-95 transition-all duration-200">
                  Contact Me
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="font-clash text-2xl font-bold">Let's Connect</SheetTitle>
                  <SheetDescription className="font-geist text-foreground text-base">
                    Reach out for opportunities, collaborations, or just a friendly chat.
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8 p-10">
                  <Button asChild size="lg" className="w-full rounded-2xl bg-[#25D366] hover:bg-[#25D366]/90 text-white shadow-lg shadow-[#25D366]/20 transition-all duration-200">
                    <a href="https://wa.me/918882390482?text=Hi%20Aman,%20I%20came%20across%20your%20portfolio%20and%20wanted%20to%20connect!" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="ml-2 w-4 h-4" /> WhatsApp Me
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full rounded-2xl border-[#0A66C2]/40 text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all duration-200">
                    <a href="https://www.linkedin.com/in/aman-mittal-22833b288/" target="_blank" rel="noopener noreferrer">
                      Connect on LinkedIn <Linkedin className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="secondary" className="w-full rounded-2xl transition-all duration-200">
                    <a href="mailto:hello@amanmittal.com">
                      Email Me <Mail className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>

          </motion.div>
          {/* 
          <motion.div variants={itemVariants} className="flex items-center gap-6 pt-12 text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors p-2 hover:bg-secondary/50 rounded-full">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#1DA1F2] transition-colors p-2 hover:bg-[#1DA1F2]/10 rounded-full">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#0A66C2] transition-colors p-2 hover:bg-[#0A66C2]/10 rounded-full">
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div> */}
        </motion.div>

        {/* Feature Cards Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6 mt-32"
        >
          {[
            { title: "Frontend Engineering", desc: "Building scalable React & Next.js applications.", icon: <ExternalLink className="w-5 h-5 text-primary" /> },
            { title: "UI/UX Design", desc: "Crafting beautiful interfaces with Figma and Shadcn UI.", icon: <ExternalLink className="w-5 h-5 text-accent" /> },
            { title: "Open Source", desc: "Contributing to tools that empower developers globally.", icon: <ExternalLink className="w-5 h-5 text-secondary-foreground" /> },
          ].map((feature, idx) => (
            <Card key={idx} className="bg-card/40 backdrop-blur-sm border-border/40 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 group cursor-pointer">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div> */}
      </main>
    </div>
  );
}
