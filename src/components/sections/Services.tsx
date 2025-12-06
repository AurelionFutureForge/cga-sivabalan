import { motion, useScroll, useTransform } from "framer-motion";
import { BookOpen, LineChart, Building2, Users, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: BookOpen,
    title: "TNEA Counselling",
    description: "Expert guidance on cutoff strategy, choice filling, and seat allocation for Tamil Nadu Engineering Admissions.",
    color: "sunrise-1",
    image: "📚",
  },
  {
    icon: LineChart,
    title: "JEE Roadmap",
    description: "Strategic planning for JEE preparation, mock rank improvement, and competitive score enhancement.",
    color: "sunrise-2",
    image: "📈",
  },
  {
    icon: Building2,
    title: "JoSAA Selection",
    description: "Navigate seat matrix, branch preferences, and college selection for all India admissions with confidence.",
    color: "sunrise-3",
    image: "🏛️",
  },
  {
    icon: Users,
    title: "Live Support",
    description: "Real-time counselling sessions, mock counselling practice, and doubt clearing with expert mentors.",
    color: "sunrise-4",
    image: "👥",
  },
];

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-sunrise-1/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-sunrise-3/10 rounded-full blur-3xl" />

      <div className="container px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 glass-card rounded-full text-sm font-medium text-primary mb-6">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Comprehensive <span className="gradient-text">Guidance</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From rank prediction to final admission — every step covered with expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="glass-card p-8 sm:p-10 rounded-3xl h-full relative overflow-hidden transition-all duration-500 hover:shadow-hover">
                {/* Large emoji background */}
                <div className="absolute -right-4 -bottom-4 text-[120px] opacity-10 group-hover:opacity-20 transition-opacity select-none">
                  {service.image}
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 rounded-2xl bg-${service.color}/20 flex items-center justify-center`}
                    >
                      <service.icon className={`w-8 h-8 text-${service.color}`} />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 45 }}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    >
                      <ArrowUpRight className="w-5 h-5 text-foreground" />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>

                {/* Bottom gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-${service.color} via-${service.color}/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
