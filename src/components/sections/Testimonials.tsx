import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    college: "NIT Trichy - CSE",
    rank: "AIR 5,432",
    quote: "The counsellors helped me understand the seat matrix perfectly. I got my dream branch at NIT Trichy. Forever grateful!",
    year: "2024",
  },
  {
    id: 2,
    name: "Arjun Venkat",
    college: "Anna University - ECE",
    rank: "TNEA 1,245",
    quote: "Was confused between multiple colleges. The team's data-driven approach helped me make the right choice.",
    year: "2024",
  },
  {
    id: 3,
    name: "Sneha Rajan",
    college: "IIT Madras - ME",
    rank: "AIR 3,891",
    quote: "The mock counselling sessions were incredibly helpful. I felt so prepared during actual JoSAA counselling!",
    year: "2023",
  },
  {
    id: 4,
    name: "Karthik M",
    college: "PSG Tech - IT",
    rank: "TNEA 892",
    quote: "From rank prediction to final admission, the support was exceptional. They truly care about students.",
    year: "2023",
  },
];

export const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} id="testimonials" className="py-24 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card opacity-50" />
      
      <div className="container px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 glass-card rounded-full text-sm font-medium text-primary mb-6">
            Success Stories
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Dreams <span className="gradient-text">Achieved</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real stories from students who transformed their futures with our guidance.
          </p>
        </motion.div>

        {/* Timeline testimonials */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />

          <div className="space-y-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col`}
              >
                {/* Year badge - center on timeline */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold text-sm shadow-glow z-10"
                  >
                    {testimonial.year}
                  </motion.div>
                </div>

                {/* Content card */}
                <div className={`lg:w-[calc(50%-3rem)] w-full ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="glass-card p-8 rounded-3xl relative group"
                  >
                    {/* Quote icon */}
                    <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-sunrise-2 fill-sunrise-2" />
                      ))}
                    </div>

                    <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                      "{testimonial.quote}"
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-semibold">
                        {testimonial.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.college}
                        </p>
                        <p className="text-xs text-primary font-medium">
                          {testimonial.rank}
                        </p>
                      </div>
                    </div>

                    {/* Mobile year badge */}
                    <div className="lg:hidden absolute -top-3 right-6 px-3 py-1 gradient-bg rounded-full text-primary-foreground text-xs font-bold">
                      {testimonial.year}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
