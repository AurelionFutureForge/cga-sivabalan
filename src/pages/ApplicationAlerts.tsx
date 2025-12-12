import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Calendar, Clock, AlertCircle, CheckCircle2, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { toast } from "sonner";

const alerts = [
  {
    id: 1,
    title: "TNEA 2025 Registration Opens",
    date: "May 15, 2025",
    status: "upcoming",
    category: "TNEA",
    description: "Online registration for TNEA counselling begins. Prepare your documents and certificates.",
  },
  {
    id: 2,
    title: "JEE Main 2025 Session 2 Results",
    date: "April 25, 2025",
    status: "upcoming",
    category: "JEE",
    description: "JEE Main Session 2 results expected. Check your scorecard and percentile.",
  },
  {
    id: 3,
    title: "JoSAA 2025 Registration",
    date: "June 10, 2025",
    status: "upcoming",
    category: "JoSAA",
    description: "Joint Seat Allocation Authority registration for IITs, NITs, and GFTIs begins.",
  },
  {
    id: 4,
    title: "NEET UG 2025 Application Deadline",
    date: "March 15, 2025",
    status: "active",
    category: "NEET",
    description: "Last date to submit NEET UG 2025 application form with late fee.",
  },
  {
    id: 5,
    title: "TNEA Certificate Verification",
    date: "June 20, 2025",
    status: "upcoming",
    category: "TNEA",
    description: "Document verification at designated centers. Carry all original certificates.",
  },
  {
    id: 6,
    title: "JEE Advanced 2025 Registration",
    date: "May 1, 2025",
    status: "upcoming",
    category: "JEE",
    description: "Registration opens for JEE Advanced. Only JEE Main qualified candidates eligible.",
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "TNEA":
      return "bg-sunrise-1/20 text-sunrise-1 border-sunrise-1/30";
    case "JEE":
      return "bg-sunrise-2/20 text-sunrise-2 border-sunrise-2/30";
    case "JoSAA":
      return "bg-sunrise-3/20 text-sunrise-3 border-sunrise-3/30";
    case "NEET":
      return "bg-sunrise-5/20 text-sunrise-5 border-sunrise-5/30";
    default:
      return "bg-primary/20 text-primary border-primary/30";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "active":
      return <AlertCircle className="w-4 h-4 text-destructive" />;
    case "upcoming":
      return <Clock className="w-4 h-4 text-sunrise-2" />;
    case "completed":
      return <CheckCircle2 className="w-4 h-4 text-green-500" />;
    default:
      return <Bell className="w-4 h-4 text-muted-foreground" />;
  }
};

const ApplicationAlerts = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = () => {
    if (email) {
      toast.success("You're subscribed! We'll notify you about important deadlines.");
      setShowPopup(false);
      setEmail("");
    } else {
      toast.error("Please enter your email address");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="container px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Bell className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Stay Updated</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Application <span className="gradient-text">Alerts</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Never miss important deadlines. Get real-time updates on TNEA, JEE, JoSAA, and NEET 
              application dates, registration windows, and counselling schedules.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Alerts Grid */}
      <section className="py-16">
        <div className="container px-4 sm:px-6">
          {/* Filter Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {["All", "TNEA", "JEE", "JoSAA", "NEET"].map((filter) => (
              <Badge
                key={filter}
                variant="outline"
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {filter}
              </Badge>
            ))}
          </motion.div>

          {/* Alerts List */}
          <div className="grid gap-6 max-w-4xl mx-auto">
            {alerts.map((alert, index) => (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="glass-card hover:shadow-glow transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      {/* Status & Category */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                          {getStatusIcon(alert.status)}
                        </div>
                        <Badge className={getCategoryColor(alert.category)}>
                          {alert.category}
                        </Badge>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {alert.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {alert.description}
                        </p>
                      </div>

                      {/* Date */}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{alert.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16"
          >
            <Card className="glass-card max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-display">
                  Get Personalized Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Subscribe to receive instant notifications for your specific exams. 
                  Never miss a deadline again!
                </p>
                <Button variant="cta" className="rounded-xl">
                  Subscribe to Alerts
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      {/* Alert Registration Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md glass-card rounded-2xl p-6 shadow-glow"
            >
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                  <Bell className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">
                  Get Instant Alerts!
                </h3>
                <p className="text-muted-foreground text-sm">
                  Register now to receive application alerts directly to your inbox. Never miss a deadline!
                </p>
                <div className="space-y-3 pt-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background/50 border-border/50"
                  />
                  <Button 
                    variant="cta" 
                    className="w-full rounded-xl"
                    onClick={handleSubscribe}
                  >
                    Subscribe Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  No spam, only important exam updates!
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ApplicationAlerts;
