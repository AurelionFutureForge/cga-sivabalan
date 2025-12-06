import { motion, useScroll, useTransform } from "framer-motion";
import { UserPlus, MessageSquare, ClipboardList, GraduationCap, ArrowRight } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    icon: UserPlus,
    title: "Register",
    description: "Sign up and share your dreams with us",
    color: "sunrise-1",
    bgClass: "bg-sunrise-1",
    bgOpacityClass: "bg-sunrise-1/20",
    textClass: "text-sunrise-1",
  },
  {
    icon: MessageSquare,
    title: "Connect",
    description: "Get matched with an expert counsellor",
    color: "sunrise-2",
    bgClass: "bg-sunrise-2",
    bgOpacityClass: "bg-sunrise-2/20",
    textClass: "text-sunrise-2",
  },
  {
    icon: ClipboardList,
    title: "Plan",
    description: "Receive your personalized strategy",
    color: "sunrise-3",
    bgClass: "bg-sunrise-3",
    bgOpacityClass: "bg-sunrise-3/20",
    textClass: "text-sunrise-3",
  },
  {
    icon: GraduationCap,
    title: "Succeed",
    description: "Secure admission to your dream college",
    color: "sunrise-4",
    bgClass: "bg-sunrise-4",
    bgOpacityClass: "bg-sunrise-4/20",
    textClass: "text-sunrise-4",
  },
];

export const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  return (
    <section ref={containerRef} id="how-it-works" className="py-24 bg-card relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 glass-card rounded-full text-sm font-medium text-primary mb-6">
            Your Journey
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Four Steps to <span className="gradient-text">Success</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A simple, guided path to your engineering admission success.
          </p>
        </motion.div>

        {/* Journey path */}
        <div className="relative max-w-5xl mx-auto">
          {/* SVG connecting path - desktop */}
          <svg
            className="absolute top-1/2 left-0 right-0 -translate-y-1/2 hidden lg:block h-40 w-full"
            viewBox="0 0 1000 160"
            fill="none"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 50 80 C 200 80, 200 40, 350 40 C 500 40, 500 120, 650 120 C 800 120, 800 80, 950 80"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              style={{ pathLength }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--sunrise-1))" />
                <stop offset="33%" stopColor="hsl(var(--sunrise-2))" />
                <stop offset="66%" stopColor="hsl(var(--sunrise-3))" />
                <stop offset="100%" stopColor="hsl(var(--sunrise-4))" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Step card */}
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="glass-card p-8 rounded-3xl w-full relative group"
                >
                  {/* Step number */}
                  <div className={`absolute -top-4 -left-4 w-10 h-10 rounded-full ${step.bgClass} flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg`}>
                    {index + 1}
                  </div>

                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${step.bgOpacityClass} flex items-center justify-center group-hover:shadow-glow transition-shadow duration-500`}
                  >
                    <step.icon className={`w-10 h-10 ${step.textClass}`} />
                  </motion.div>

                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="lg:hidden my-4"
                  >
                    <ArrowRight className="w-6 h-6 text-primary rotate-90 sm:rotate-0" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
