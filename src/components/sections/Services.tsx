import { motion } from "framer-motion";
import { BookOpen, LineChart, Building2, Users, Stethoscope, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: BookOpen,
    title: "TNEA Counselling",
    description: "Expert guidance on cutoff strategy, choice filling, and seat allocation for Tamil Nadu Engineering Admissions.",
    color: "sunrise-1",
    image: "📚",
    slug: "tnea-counselling",
  },
  {
    icon: LineChart,
    title: "JEE Roadmap",
    description: "Strategic planning for JEE preparation, mock rank improvement, and competitive score enhancement.",
    color: "sunrise-2",
    image: "📈",
    slug: "jee-roadmap",
  },
  {
    icon: Building2,
    title: "JoSAA Selection",
    description: "Navigate seat matrix, branch preferences, and college selection for all India admissions with confidence.",
    color: "sunrise-3",
    image: "🏛️",
    slug: "josaa-selection",
  },
  {
    icon: Users,
    title: "Live Support",
    description: "Real-time counselling sessions, mock counselling practice, and doubt clearing with expert mentors.",
    color: "sunrise-4",
    image: "👥",
    slug: "live-support",
  },
  {
    icon: Stethoscope,
    title: "NEET Roadmap",
    description: "Comprehensive NEET preparation guidance, counselling support, and admission assistance for aspiring doctors.",
    color: "sunrise-5",
    image: "🩺",
    slug: "neet-roadmap",
  },
];

export const Services = () => {

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link to={`/services/${service.slug}`}>
                <div className="glass-card p-8 sm:p-10 rounded-3xl h-full relative overflow-hidden transition-all duration-500 hover:shadow-hover cursor-pointer">
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
                        className="w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
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
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
