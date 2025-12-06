import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-2xl mb-8">
              <Heart className="w-8 h-8 text-accent" />
            </div>

            <div className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Story
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-8">
              About Us
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                <span className="text-foreground font-semibold">
                  Started by students who once faced the same confusion
                </span>{" "}
                — the overwhelming choices, the fear of wrong decisions, and the
                pressure of shaping one's entire future in a few critical days.
              </p>

              <p>
                We remember sitting in front of counselling portals, unsure which
                college to choose, which branch would suit us best, and whether our
                rank was good enough. That's exactly why we built this platform.
              </p>

              <p>
                Today, our team of experienced counsellors and tech enthusiasts work
                together to ensure no student faces that confusion alone. We combine
                years of admission data, expert insights, and genuine care to guide
                you towards the engineering college you truly deserve.
              </p>

              <p className="text-foreground font-medium text-lg">
                Your success story is waiting to be written. Let's write it together.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
              {[
                { value: "5+", label: "Years Experience" },
                { value: "1000+", label: "Students Guided" },
                { value: "50+", label: "Partner Colleges" },
                { value: "99%", label: "Success Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
      </div>
    </section>
  );
};
