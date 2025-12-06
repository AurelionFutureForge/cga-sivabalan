import { GraduationCap, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">EduGuide</span>
            </a>
            <p className="text-background/60 text-sm mb-6">
              Your trusted partner for engineering admissions. 
              Guiding students to their dream colleges since 2019.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-background/60">
              {["Home", "About Us", "Services", "Pricing", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="hover:text-background transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-background/60">
              {[
                "TNEA Counselling",
                "JEE Guidance",
                "JoSAA Support",
                "College Predictor",
                "Mock Sessions",
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="hover:text-background transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li>+91 98765 43210</li>
              <li>hello@eduguide.in</li>
              <li>Chennai, Tamil Nadu</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/40">
          <p>© 2024 EduGuide. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
