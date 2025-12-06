import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    description: "Get started with basic guidance",
    features: [
      "College Predictor Tool Access",
      "Basic Counselling Guide PDF",
      "Email Support",
      "Community Access",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Standard",
    price: "₹2,999",
    description: "Complete counselling support",
    features: [
      "Everything in Free",
      "1-on-1 Counsellor Sessions (3)",
      "Personalized College List",
      "Choice Filling Assistance",
      "WhatsApp Support",
      "Mock Counselling Session",
    ],
    cta: "Choose Standard",
    popular: true,
  },
  {
    name: "Premium",
    price: "₹5,999",
    description: "End-to-end admission success",
    features: [
      "Everything in Standard",
      "Unlimited Counsellor Sessions",
      "Priority Support 24/7",
      "Document Verification Help",
      "Seat Acceptance Guidance",
      "Post-Admission Support",
      "Parent Orientation Call",
    ],
    cta: "Go Premium",
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Pricing Plans
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden charges, ever.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "bg-foreground text-background shadow-2xl scale-105 z-10"
                  : "bg-card shadow-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 gradient-cta text-primary-foreground text-sm font-semibold rounded-full">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-xl font-semibold mb-2 ${
                  plan.popular ? "text-background" : "text-foreground"
                }`}>
                  {plan.name}
                </h3>
                <div className={`text-4xl font-bold mb-2 ${
                  plan.popular ? "text-background" : "text-foreground"
                }`}>
                  {plan.price}
                </div>
                <p className={`text-sm ${
                  plan.popular ? "text-background/70" : "text-muted-foreground"
                }`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      plan.popular ? "text-primary" : "text-success"
                    }`} />
                    <span className={`text-sm ${
                      plan.popular ? "text-background/80" : "text-muted-foreground"
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "cta" : "outline"}
                className="w-full"
                size="lg"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
