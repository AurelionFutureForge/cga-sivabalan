import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Star } from "lucide-react";
import { ParticleField } from "@/components/effects/ParticleField";
import { useRef } from "react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(30 40% 97%) 0%, hsl(340 30% 96%) 40%, hsl(270 25% 96%) 70%, hsl(200 30% 96%) 100%)",
      }}
    >
      {/* Particle field */}
      <ParticleField />

      {/* Gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-sunrise-1/20 via-sunrise-2/10 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-sunrise-3/15 via-sunrise-4/10 to-transparent rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-sunrise-2/5 via-transparent to-sunrise-3/5 rounded-full blur-3xl" />
      </div>

      {/* Floating glass elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute top-32 right-[10%] hidden lg:block"
      >
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="glass-card w-20 h-20 rounded-2xl flex items-center justify-center shadow-glass"
        >
          <Star className="w-10 h-10 text-sunrise-2 fill-sunrise-2/30" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-40 left-[8%] hidden lg:block"
      >
        <motion.div
          animate={{ y: [10, -10, 10], rotate: [0, -3, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="glass-card w-16 h-16 rounded-xl flex items-center justify-center shadow-glass"
        >
          <Sparkles className="w-8 h-8 text-sunrise-3" />
        </motion.div>
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="container relative z-10 pt-40 pb-32 px-4 sm:px-6"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 glass-card rounded-full text-sm font-medium text-foreground/80 mb-10">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sunrise-1 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sunrise-1"></span>
              </span>
              Trusted by 15000+ Students Across India
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-8 tracking-tight"
          >
            <span className="text-foreground">Your</span>{" "}
            <span className="gradient-text text-glow">Dream</span>
            <br />
            <span className="text-foreground">Begins Here</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-light"
          >
            Career guidance for your engineering journey — from confusion to clarity,
            from rank prediction to admission success.{" "}
            <span className="text-foreground font-medium">TNEA • JoSAA • NEET</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <Button variant="cta" size="lg" className="group text-base px-8 py-6 rounded-2xl" asChild>
              <a href="#contact">
                Begin Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-8 py-6 rounded-2xl" asChild>
              <a href="#predictor">
                <Sparkles className="mr-2 w-5 h-5" />
                Try College Predictor
              </a>
            </Button>
          </motion.div>

          {/* Stats ribbon */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="mt-20 glass-card rounded-3xl p-8 max-w-3xl mx-auto"
          >
            <div className="grid grid-cols-3 gap-8">
              {[
                { value: "99%", label: "Success Rate" },
                { value: "15,000+", label: "Dreams Achieved" },
                { value: "24/7", label: "Expert Support" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom wave with gradient */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 50C480 40 600 50 720 60C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--card))"
          />
        </svg>
      </div>
    </section>
  );
};
