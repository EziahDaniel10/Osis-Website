import { Layout } from "@/components/layout";
import { Link } from "wouter";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

export default function About() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative h-[60svh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/real-2.jpeg" 
            alt="About OSIS" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <FadeIn>
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium mb-4 uppercase tracking-widest">
              <Link href="/index.html" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-white">About</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white uppercase mb-4">
              About OSIS
            </h1>
            <p className="text-xl text-primary font-medium tracking-wide">Nigeria's pioneer in sustainable electric mobility</p>
          </FadeIn>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Who We Are</span>
              <h2 className="text-4xl font-display font-bold text-white uppercase mb-6">One Spirit. One Mission.</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  One Spirit Integrated Services (OSIS) is a forward-thinking company committed to driving innovation in Nigeria's transportation and mobility sector. 
                </p>
                <p>
                  As the sole distributor of the BNC Challenger S110 electric bike and a trusted supplier of vehicle tires, OSIS is setting new benchmarks in sustainable and reliable transport solutions. With partnerships extending to reputable global manufacturers, OSIS has earned recognition for its dedication to quality, environmental responsibility, and excellent customer service.
                </p>
                <p>
                  Our Lagos headquarters serves as a central hub for nationwide logistics, customer support, and business operations.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-8">
                {['Quality', 'Sustainability', 'Innovation', 'Integrity'].map(val => (
                  <div key={val} className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-white flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-primary" />
                    {val}
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="relative">
              <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full"></div>
              <img 
                src="/images/real-3.jpeg" 
                alt="OSIS Team" 
                className="relative rounded-2xl w-full object-cover border border-primary/30 shadow-2xl"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1} className="bg-background p-10 rounded-xl border-l-4 border-l-primary relative overflow-hidden group hover:shadow-2xl transition-shadow">
              <span className="absolute -right-8 -top-8 text-9xl text-primary/10 font-serif font-black group-hover:text-primary/20 transition-colors">"</span>
              <h3 className="text-2xl font-display font-bold text-white uppercase mb-6 relative z-10">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed relative z-10 text-lg">
                To provide high-quality electric bikes and vehicle tires that deliver exceptional performance, reliability, and environmental benefits to individuals and businesses across Nigeria — empowering people to make greener choices.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-background p-10 rounded-xl border-l-4 border-l-blue-500 relative overflow-hidden group hover:shadow-2xl transition-shadow">
              <span className="absolute -right-8 -top-8 text-9xl text-blue-500/10 font-serif font-black group-hover:text-blue-500/20 transition-colors">"</span>
              <h3 className="text-2xl font-display font-bold text-white uppercase mb-6 relative z-10">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed relative z-10 text-lg">
                To become Nigeria's leading force in sustainable transportation, transforming how people commute through innovative, eco-friendly, and cost-effective mobility solutions.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-white uppercase mb-4">Why Choose OSIS</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { icon: "🥇", title: "Exclusive Distributor" },
              { icon: "🔧", title: "Expert After-Sales" },
              { icon: "🚀", title: "Nationwide Reach" },
              { icon: "🌱", title: "Eco-Committed" },
            ].map((item, i) => (
              <StaggerItem key={i} className="p-8 bg-card rounded-xl border border-border">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="font-display font-bold text-white uppercase text-lg">{item.title}</h4>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* TEAM */}
      {/* <section className="py-24 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl font-display font-bold text-white uppercase mb-4">Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Behind OSIS is a dedicated team of professionals passionate about engineering, sustainability, and transforming Nigeria's mobility landscape.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              { name: "John Doe", role: "Chief Executive Officer", initials: "JD" },
              { name: "Jane Smith", role: "Head of Operations", initials: "JS" },
              { name: "David O.", role: "Lead Technician", initials: "DO" },
            ].map((member, i) => (
              <StaggerItem key={i} className="bg-background rounded-xl p-8 text-center border border-border hover:border-primary transition-colors">
                <div className="w-24 h-24 mx-auto bg-primary rounded-full flex items-center justify-center text-3xl font-display font-bold text-white mb-6 shadow-lg shadow-primary/30">
                  {member.initials}
                </div>
                <h4 className="text-xl font-display font-bold text-white uppercase">{member.name}</h4>
                <p className="text-primary text-sm font-medium mt-1 mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm">Committed to delivering excellence and pushing the boundaries of what's possible.</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section> */}

      {/* GALLERY STRIP */}
      <section className="flex flex-col md:flex-row h-64 md:h-80">
        <div className="flex-1 overflow-hidden">
          <img src="/images/real-1.jpeg" alt="OSIS Action" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="flex-1 overflow-hidden hidden md:block">
          <img src="/images/real-4.jpeg" alt="OSIS Action" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="flex-1 overflow-hidden">
          <img src="/images/real-5.jpeg" alt="OSIS Action" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 bg-background text-center">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-display font-bold text-white uppercase mb-6">Want to partner with us or learn more?</h2>
            <Link 
              href="/contact.html"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-display font-bold uppercase tracking-widest hover:bg-primary/90 transition-all rounded-sm shadow-lg shadow-primary/20"
            >
              Contact Our Team
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
