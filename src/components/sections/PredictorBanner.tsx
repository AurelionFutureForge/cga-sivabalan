import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, Sparkles } from "lucide-react";

export const PredictorBanner = () => {
  return (
    <section id="predictor" className="py-20 bg-card">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl gradient-bg p-8 sm:p-12 lg:p-16"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-primary-foreground mb-6"
            >
              <Sparkles className="w-4 h-4" />
              AI-Powered Tool
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4"
            >
              College Predictor Tool
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto"
            >
              Enter your rank and get instant predictions for colleges and branches 
              you can get admitted to. Powered by historical data analysis.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg" 
                className="bg-card text-foreground hover:bg-card/90 shadow-lg"
              >
                <Search className="w-5 h-5 mr-2" />
                Try College Predictor
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-sm text-primary-foreground/60 mt-6"
            >
              Free to use • Updated for 2024 • Works for TNEA, JEE & JoSAA
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
