import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface BookingFormDialogProps {
  children: React.ReactNode;
}

const BookingFormDialog = ({ children }: BookingFormDialogProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    contactNumber: "",
    classLevel: "",
    parentProfession: "",
    service: "",
    additionalInfo: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Session booked successfully! We'll contact you soon.");
    setIsSubmitting(false);
    setOpen(false);
    setFormData({
      studentName: "",
      contactNumber: "",
      classLevel: "",
      parentProfession: "",
      service: "",
      additionalInfo: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-card/95 backdrop-blur-xl border-white/20 p-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sunrise-1/10 via-transparent to-sunrise-3/10 pointer-events-none" />
        
        <DialogHeader className="p-6 pb-0 relative z-10">
          <DialogTitle className="text-2xl font-display font-bold text-foreground">
            Book Free Counselling Session
          </DialogTitle>
          <p className="text-muted-foreground mt-2">
            Fill in your details and we'll get back to you within 24 hours
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="p-6 pt-4 space-y-4 relative z-10">
          {/* Student Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Student Name <span className="text-destructive">*</span>
            </label>
            <Input
              required
              placeholder="Enter student's full name"
              value={formData.studentName}
              onChange={(e) => handleChange("studentName", e.target.value)}
              className="bg-background/50 border-white/20 focus:border-primary"
            />
          </div>

          {/* Contact Number */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Contact Number <span className="text-destructive">*</span>
            </label>
            <Input
              required
              type="tel"
              placeholder="Enter contact number"
              value={formData.contactNumber}
              onChange={(e) => handleChange("contactNumber", e.target.value)}
              className="bg-background/50 border-white/20 focus:border-primary"
            />
          </div>

          {/* Class Level */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Class / Level <span className="text-destructive">*</span>
            </label>
            <Select
              required
              value={formData.classLevel}
              onValueChange={(value) => handleChange("classLevel", value)}
            >
              <SelectTrigger className="bg-background/50 border-white/20">
                <SelectValue placeholder="Select class or level" />
              </SelectTrigger>
              <SelectContent className="bg-card border-white/20">
                <SelectItem value="6th">6th Standard</SelectItem>
                <SelectItem value="7th">7th Standard</SelectItem>
                <SelectItem value="8th">8th Standard</SelectItem>
                <SelectItem value="9th">9th Standard</SelectItem>
                <SelectItem value="10th">10th Standard</SelectItem>
                <SelectItem value="11th">11th Standard</SelectItem>
                <SelectItem value="12th">12th Standard</SelectItem>
                <SelectItem value="ug">Undergraduate (UG)</SelectItem>
                <SelectItem value="others">Others</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Parent's Profession */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Parent's Profession
            </label>
            <Input
              placeholder="Enter parent's profession"
              value={formData.parentProfession}
              onChange={(e) => handleChange("parentProfession", e.target.value)}
              className="bg-background/50 border-white/20 focus:border-primary"
            />
          </div>

          {/* Service Looking For */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              What are you looking for? <span className="text-destructive">*</span>
            </label>
            <Select
              required
              value={formData.service}
              onValueChange={(value) => handleChange("service", value)}
            >
              <SelectTrigger className="bg-background/50 border-white/20">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent className="bg-card border-white/20">
                <SelectItem value="tnea">TNEA Counselling Guidance</SelectItem>
                <SelectItem value="jee">JEE Counselling Support</SelectItem>
                <SelectItem value="josaa">JoSAA Counselling</SelectItem>
                <SelectItem value="neet">NEET Counselling</SelectItem>
                <SelectItem value="career">Career Guidance</SelectItem>
                <SelectItem value="college-predictor">College Predictor Tool</SelectItem>
                <SelectItem value="other">Other Services</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Additional Info */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Anything you want us to know before the meeting?
            </label>
            <Textarea
              placeholder="Share any specific concerns, questions, or information..."
              value={formData.additionalInfo}
              onChange={(e) => handleChange("additionalInfo", e.target.value)}
              className="bg-background/50 border-white/20 focus:border-primary min-h-[100px] resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full gradient-cta text-primary-foreground shadow-lg hover:shadow-xl h-12 text-base font-semibold"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Booking Session...
              </span>
            ) : (
              "Book Free Session"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingFormDialog;
