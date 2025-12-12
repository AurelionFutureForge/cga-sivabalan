import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { BookOpen, LineChart, Building2, Users, Stethoscope, ArrowLeft, Calendar, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ParticleField } from "@/components/effects/ParticleField";
import BookingFormDialog from "@/components/BookingFormDialog";

// Hero images
import heroTnea from "@/assets/hero-tnea.jpg";
import heroJee from "@/assets/hero-jee.jpg";
import heroJosaa from "@/assets/hero-josaa.jpg";
import heroSupport from "@/assets/hero-support.jpg";
import heroNeet from "@/assets/hero-neet.jpg";
const servicesData = {
  "tnea-counselling": {
    icon: BookOpen,
    title: "TNEA Counselling",
    tagline: "Master Your Tamil Nadu Engineering Admission",
    description: "Expert guidance on cutoff strategy, choice filling, and seat allocation for Tamil Nadu Engineering Admissions.",
    color: "sunrise-1",
    heroImage: heroTnea,
    features: [
      "Personalized cutoff analysis based on your rank and category",
      "Strategic choice filling guidance for maximum chances",
      "Real-time seat matrix monitoring and updates",
      "Mock counselling sessions to practice before actual rounds",
      "Branch vs College priority consultation",
      "Last-minute vacancy round support"
    ],
    process: [
      { step: "Rank Analysis", desc: "We analyze your TNEA rank and identify realistic college options" },
      { step: "Choice List Strategy", desc: "Create an optimized choice list based on cutoff trends" },
      { step: "Live Support", desc: "Real-time guidance during counselling rounds" },
      { step: "Admission Success", desc: "Secure your seat in the best possible college" }
    ],
    stats: [
      { value: "5000+", label: "Students Guided" },
      { value: "98%", label: "Success Rate" },
      { value: "150+", label: "Colleges Covered" }
    ]
  },
  "jee-roadmap": {
    icon: LineChart,
    title: "JEE Roadmap",
    tagline: "Strategic Planning for JEE Excellence",
    description: "Strategic planning for JEE preparation, mock rank improvement, and competitive score enhancement.",
    color: "sunrise-2",
    heroImage: heroJee,
    features: [
      "Comprehensive JEE Main & Advanced preparation roadmap",
      "Personalized study schedule based on your strengths",
      "Mock test analysis and improvement strategies",
      "Topic-wise weightage and priority planning",
      "Revision techniques for maximum retention",
      "Stress management and exam day strategies"
    ],
    process: [
      { step: "Assessment", desc: "Evaluate current preparation level and identify gaps" },
      { step: "Custom Plan", desc: "Create personalized study roadmap with milestones" },
      { step: "Track Progress", desc: "Regular mock tests and performance tracking" },
      { step: "Score Boost", desc: "Final revision and score optimization strategies" }
    ],
    stats: [
      { value: "2000+", label: "JEE Aspirants" },
      { value: "85%", label: "Rank Improvement" },
      { value: "50+", label: "NITs/IIITs" }
    ]
  },
  "josaa-selection": {
    icon: Building2,
    title: "JoSAA Selection",
    tagline: "Navigate All India Admissions with Confidence",
    description: "Navigate seat matrix, branch preferences, and college selection for all India admissions with confidence.",
    color: "sunrise-3",
    heroImage: heroJosaa,
    features: [
      "Complete JoSAA counselling process guidance",
      "IIT, NIT, IIIT college comparison and selection",
      "Branch preference optimization strategies",
      "Seat matrix analysis across all rounds",
      "Document verification support",
      "Spot round and vacancy round guidance"
    ],
    process: [
      { step: "Rank Mapping", desc: "Map your JEE rank to potential colleges and branches" },
      { step: "Choice Optimization", desc: "Build strategic choice list for maximum benefit" },
      { step: "Round Tracking", desc: "Monitor each round and adjust strategy accordingly" },
      { step: "Final Allotment", desc: "Secure admission in your target institution" }
    ],
    stats: [
      { value: "1500+", label: "Selections Made" },
      { value: "23", label: "IITs Covered" },
      { value: "31", label: "NITs Covered" }
    ]
  },
  "live-support": {
    icon: Users,
    title: "Live Support",
    tagline: "Real-Time Expert Mentorship",
    description: "Real-time counselling sessions, mock counselling practice, and doubt clearing with expert mentors.",
    color: "sunrise-4",
    heroImage: heroSupport,
    features: [
      "One-on-one video counselling sessions",
      "24/7 WhatsApp support during critical periods",
      "Mock counselling simulations",
      "Instant doubt clearing with experts",
      "Parent consultation sessions",
      "Post-admission guidance and support"
    ],
    process: [
      { step: "Connect", desc: "Schedule a session with our expert counsellors" },
      { step: "Discuss", desc: "Share your concerns and get personalized advice" },
      { step: "Clarify", desc: "Get all your doubts resolved in real-time" },
      { step: "Execute", desc: "Implement the strategy with ongoing support" }
    ],
    stats: [
      { value: "10,000+", label: "Sessions Completed" },
      { value: "4.9/5", label: "Rating" },
      { value: "< 2hrs", label: "Response Time" }
    ]
  },
  "neet-roadmap": {
    icon: Stethoscope,
    title: "NEET Roadmap",
    tagline: "Your Path to Medical Excellence",
    description: "Comprehensive NEET preparation guidance, counselling support, and admission assistance for aspiring doctors.",
    color: "sunrise-5",
    heroImage: heroNeet,
    features: [
      "Complete NEET UG preparation roadmap",
      "Subject-wise study planning (Physics, Chemistry, Biology)",
      "NCERT mastery strategies and beyond",
      "State and All India quota counselling guidance",
      "College prediction based on NEET score",
      "MCC and state counselling support"
    ],
    process: [
      { step: "Foundation", desc: "Build strong conceptual foundation in all subjects" },
      { step: "Practice", desc: "Extensive MCQ practice and mock tests" },
      { step: "Counselling", desc: "Navigate NEET counselling for best college" },
      { step: "MBBS Seat", desc: "Secure admission in top medical college" }
    ],
    stats: [
      { value: "3000+", label: "Medical Aspirants" },
      { value: "92%", label: "Selection Rate" },
      { value: "100+", label: "Medical Colleges" }
    ]
  }
};

export const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = servicesData[serviceId as keyof typeof servicesData];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Link to="/">
            <Button variant="default">Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <ParticleField />

        {/* Gradient orbs */}
        <div className={`absolute top-1/4 -left-40 w-96 h-96 bg-${service.color}/20 rounded-full blur-3xl`} />
        <div className={`absolute bottom-1/4 -right-40 w-96 h-96 bg-${service.color}/10 rounded-full blur-3xl`} />

        <div className="container px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Link to="/#services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>

            {/* 16:9 Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-4xl mx-auto mb-8 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="aspect-video">
                <img
                  src={service.heroImage}
                  alt={`${service.title} hero`}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent`} />
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full mb-6`}
            >
              <IconComponent className={`w-6 h-6 text-${service.color}`} />
              <span className="font-medium text-foreground">{service.title}</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              {service.tagline}
            </h1>

            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              {service.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingFormDialog>
                <Button variant="cta" size="xl" className="group">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Session Now
                </Button>
              </BookingFormDialog>
              <BookingFormDialog>
                <Button variant="hero-outline" size="xl">
                  <Phone className="w-5 h-5 mr-2" />
                  Talk to Expert
                </Button>
              </BookingFormDialog>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-3xl text-center"
              >
                <div className={`text-4xl font-display font-bold text-${service.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              What's <span className="gradient-text">Included</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Comprehensive support at every step of your journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl flex items-start gap-4 group hover:shadow-hover transition-all"
              >
                <div className={`w-10 h-10 rounded-xl bg-${service.color}/20 flex items-center justify-center flex-shrink-0`}>
                  <CheckCircle2 className={`w-5 h-5 text-${service.color}`} />
                </div>
                <p className="text-foreground">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative overflow-hidden">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-${service.color}/5 rounded-full blur-3xl`} />

        <div className="container px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A simple 4-step process to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="glass-card p-8 rounded-3xl text-center h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-${service.color}/20 flex items-center justify-center mx-auto mb-6`}>
                    <span className={`text-2xl font-bold text-${service.color}`}>{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {item.step}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>

                {index < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-border to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`glass-card p-12 sm:p-16 rounded-3xl text-center relative overflow-hidden`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}/10 via-transparent to-${service.color}/5`} />

            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Book a free consultation session with our experts and take the first step towards your dream college.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookingFormDialog>
                  <Button variant="cta" size="xl" className="group">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Free Session
                  </Button>
                </BookingFormDialog>
                <Link to="/#contact">
                  <Button variant="hero-outline" size="xl">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServiceDetail;
