import { motion, useScroll, useTransform } from "framer-motion";
import { Users, Target, HeartHandshake, Award, Shield } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Target,
    title: "AI Predictor",
    description: "Accurate rank & college prediction tool",
    gradient: "from-sunrise-1/20 to-sunrise-2/20",
  },
  {
    icon: HeartHandshake,
    title: "1-on-1 Support",
    description: "Personal counsellor for your journey",
    gradient: "from-sunrise-2/20 to-sunrise-3/20",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "99% success rate in admissions",
    gradient: "from-sunrise-3/20 to-sunrise-4/20",
  },
  {
    icon: Shield,
    title: "Zero Bias",
    description: "Transparent, student-first approach",
    gradient: "from-sunrise-4/20 to-sunrise-1/20",
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
    <section ref={containerRef} id="why-us" className="py-20 bg-card relative overflow-hidden">
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
        {/* Centered Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
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
        </motion.div>

        {/* Content and Image Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
          {/* Content Section - Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Main Promotional Text */}
            <p className="text-xl sm:text-2xl text-foreground leading-relaxed">
              Empowering over{" "}
              <span className="text-primary font-bold">15,000+ students</span>{" "}
              with strategic career guidance and educational excellence. Specialized in competitive exam preparation and academic counseling with{" "}
              <span className="text-primary font-bold">15+ years</span>{" "}
              of proven expertise.
            </p>

            {/* Additional Content */}
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
              <p>
                Our comprehensive approach combines personalized counseling, data-driven insights, and years of experience to help students make informed decisions about their engineering education. We understand that choosing the right college and branch is one of the most critical decisions in a student's career.
              </p>
              <p>
                From TNEA counseling to JEE guidance and JoSAA support, we provide end-to-end assistance throughout your admission journey. Our team of expert counselors works closely with each student to understand their aspirations, strengths, and career goals, ensuring they find the perfect match.
              </p>
            </div>

            {/* Compact Stats Row */}
            <div className="flex flex-wrap gap-8 pt-6 border-t border-border">
              {[
                { value: "15,000+", label: "Students Guided" },
                { value: "15+", label: "Years Experience" },
                { value: "75+", label: "Entrance Exams" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  <span className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Section - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full"
          >
            <div className="relative w-full rounded-3xl overflow-hidden shadow-card bg-card">
              <img
                src="/sivabalan4.jpeg"
                alt="Dr. Sivabalan"
                className="w-full h-auto object-cover rounded-3xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
