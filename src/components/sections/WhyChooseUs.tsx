import { motion, useScroll, useTransform } from "framer-motion";
import { Users, Target, HeartHandshake, Award, Shield } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Users,
    title: "1000+ Students",
    description: "Join thousands who found their perfect college",
    gradient: "from-sunrise-1/20 to-sunrise-2/20",
  },
  {
    icon: Target,
    title: "AI Predictor",
    description: "Accurate rank & college prediction tool",
    gradient: "from-sunrise-2/20 to-sunrise-3/20",
  },
  {
    icon: HeartHandshake,
    title: "1-on-1 Support",
    description: "Personal counsellor for your journey",
    gradient: "from-sunrise-3/20 to-sunrise-4/20",
  },
  {
    icon: Award,
    title: "99% Success",
    description: "Proven track record of admissions",
    gradient: "from-sunrise-4/20 to-sunrise-1/20",
  },
  {
    icon: Shield,
    title: "Zero Bias",
    description: "Transparent, student-first approach",
    gradient: "from-sunrise-1/20 to-sunrise-3/20",
  },
];

export const WhyChooseUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} id="why-us" className="py-24 bg-card relative overflow-hidden">
      {/* Parallax background elements */}
      <motion.div
        style={{ y }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-sunrise-1/10 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-sunrise-3/10 to-transparent rounded-full blur-3xl"
      />

      <div className="container px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 glass-card rounded-full text-sm font-medium text-primary mb-6"
          >
            Why Choose Us
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Your Success is Our{" "}
            <span className="gradient-text">Mission</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We understand the stress of engineering admissions. That's why we've built 
            a support system that truly cares.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="glass-card p-8 rounded-3xl h-full text-center transition-all duration-500 hover:shadow-hover">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 mx-auto mb-5 glass rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-shadow duration-500"
                  >
                    <feature.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
