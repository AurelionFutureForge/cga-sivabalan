import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Centered Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <span className="inline-block px-4 py-1.5 glass-card rounded-full text-sm font-medium text-primary mb-6">
              About Dr. Sivabalan
            </span>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Dedicated to Your{" "}
              <span className="gradient-text">Success</span>
            </h2>

            {/* Intro Paragraph */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              With over 15 years of experience in education and career guidance, I've helped thousands of students achieve their academic and career goals through personalized counseling and strategic planning.
            </p>
          </motion.div>

          {/* Image and Professional Journey Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image Section - Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-card">
                <img
                  src="/sivabalan4.jpeg"
                  alt="Dr. Sivabalan"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
            </motion.div>

            {/* Professional Journey Section - Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-display font-semibold text-foreground">
                Professional Journey
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My journey in education began with a passion for wireless communication technology, leading to advanced degrees and eventually a Ph.D. from Anna University. Over the years, I've dedicated myself to understanding not just the technical aspects of education, but the human side - helping students discover their potential and navigate their career paths.
                </p>
                <p>
                  As the founder of Career Guidance Academy Tamil, I've had the privilege of working with over 15,000 students, helping them make informed decisions about their educational journey. My approach combines academic rigor with practical industry insights, ensuring students are well-prepared for their chosen careers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
