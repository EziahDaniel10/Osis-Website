import { Layout } from "@/components/layout";
import { Link } from "wouter";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ChevronRight, MapPin, Phone, Mail, Clock, CheckCircle2, ChevronDown } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number required"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function AccordionItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card mb-4">
      <button 
        onClick={onClick}
        className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-white/5 transition-colors text-left"
      >
        <span className="font-display font-bold text-lg text-white">{question}</span>
        <ChevronDown className={cn("text-primary transition-transform duration-300", isOpen && "rotate-180")} size={20} />
      </button>
      <div 
        className={cn(
          "px-6 overflow-hidden transition-all duration-300 ease-in-out text-muted-foreground",
          isOpen ? "max-h-40 py-4 border-t border-border" : "max-h-0 py-0"
        )}
      >
        {answer}
      </div>
    </div>
  );
}

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
  };

  const faqs = [
    {
      q: "What is the BNC Challenger S110?",
      a: "The BNC Challenger S110 is a high-performance electric bike designed for urban and off-road use. OSIS is the exclusive distributor of this bike in Nigeria."
    },
    {
      q: "What colors is the S110 available in?",
      a: "The S110 is available in four bold colors: Commando Green, Panther Black, Azure Blue, and Crimson Red."
    },
    {
      q: "Do you deliver nationwide?",
      a: "Yes! We deliver the BNC Challenger S110 and vehicle tires to all 36 states and the FCT across Nigeria."
    },
    {
      q: "What after-sales support do you offer?",
      a: "We provide comprehensive maintenance services, genuine replacement parts, and technical support to keep your bike and tires performing at their best."
    },
    {
      q: "How can I place an order?",
      a: "You can place an order by filling out the contact form above, calling our phone line, or reaching us via WhatsApp. Our team will guide you through the process."
    }
  ];

  return (
    <Layout>
      {/* HERO */}
      <section className="relative h-[50svh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/bike-blue.jpeg" 
            alt="Contact OSIS" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-background/85"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <FadeIn>
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium mb-4 uppercase tracking-widest">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-white">Contact</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white uppercase mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              We'd love to hear from you. Reach out for enquiries, orders, or support.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* LEFT: Contact Details */}
            <FadeIn>
              <h2 className="text-3xl font-display font-bold text-white uppercase mb-8">Contact Information</h2>
              
              <div className="space-y-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Headquarters</h4>
                    <p className="text-muted-foreground">Lagos, Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Phone</h4>
                    <p className="text-muted-foreground">+234 000 000 0000</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@osis.ng</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center text-primary shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">Monday – Friday, 8:00am – 6:00pm WAT</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://wa.me/2340000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white font-bold rounded-sm hover:bg-[#20b958] transition-colors mb-10"
              >
                Chat on WhatsApp
              </a>

              <img 
                src="/images/real-3.jpeg" 
                alt="OSIS Office" 
                className="w-full h-64 object-cover rounded-xl border border-border"
              />
            </FadeIn>

            {/* RIGHT: Contact Form */}
            <FadeIn delay={0.2}>
              <div className="bg-card p-8 md:p-10 rounded-2xl border border-border shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-blue-500"></div>
                
                {isSubmitted ? (
                  <div className="py-20 flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-muted-foreground text-lg">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 text-primary font-medium hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-display font-bold text-white uppercase mb-8">Send Us A Message</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">Full Name</label>
                        <input 
                          {...register("fullName")}
                          className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="John Doe"
                        />
                        {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName.message}</p>}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-white/80 mb-2">Email Address</label>
                          <input 
                            {...register("email")}
                            type="email"
                            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            placeholder="john@example.com"
                          />
                          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-white/80 mb-2">Phone Number</label>
                          <input 
                            {...register("phone")}
                            type="tel"
                            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            placeholder="+234..."
                          />
                          {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">Subject</label>
                        <select 
                          {...register("subject")}
                          className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                        >
                          <option value="">Select a subject...</option>
                          <option value="General Enquiry">General Enquiry</option>
                          <option value="BNC Challenger S110 Order">BNC Challenger S110 Order</option>
                          <option value="Tire Enquiry">Tire Enquiry</option>
                          <option value="After-Sales Support">After-Sales Support</option>
                          <option value="Fleet Solutions">Fleet Solutions</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">Message</label>
                        <textarea 
                          {...register("message")}
                          rows={6}
                          className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                          placeholder="How can we help you?"
                        ></textarea>
                        {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                      </div>

                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-primary text-white font-display font-bold uppercase tracking-widest rounded-sm hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-white uppercase mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about OSIS and the S110</p>
          </FadeIn>

          <StaggerContainer>
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <AccordionItem 
                  question={faq.q} 
                  answer={faq.a} 
                  isOpen={openFaq === index}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </Layout>
  );
}
