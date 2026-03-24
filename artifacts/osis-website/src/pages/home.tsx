import { Layout } from "@/components/layout";
import { Link } from "wouter";
import { ChevronRight, BatteryCharging, Zap, MapPin, Wrench, HeadphonesIcon, Truck, ShieldCheck, CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

export default function Home() {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative min-h-[100svh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bike.jpeg" 
            alt="BNC Challenger S110" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/85 sm:bg-background/70 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <FadeIn className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/50 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
              <span>🇳🇬</span> Nigeria's Exclusive Distributor
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white uppercase leading-[1.1] mb-6">
              Challenge The <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Status Quo.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Meet the BNC Challenger S110 — Nigeria's most revolutionary electric bike. Sustainable. Powerful. Built for the modern African terrain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#products"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-display font-bold uppercase tracking-widest hover:bg-primary/90 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all rounded-sm group"
              >
                Explore the S110
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white text-white font-display font-bold uppercase tracking-widest hover:bg-white/10 transition-all rounded-sm"
              >
                Get In Touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-card border-y border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <StaggerItem className="space-y-2">
              <Zap className="mx-auto text-primary" size={28} />
              <h4 className="font-display font-bold text-white uppercase text-sm">Exclusive Distributor</h4>
              <p className="text-xs text-muted-foreground">BNC Challenger S110</p>
            </StaggerItem>
            <StaggerItem className="space-y-2">
              <MapPin className="mx-auto text-primary" size={28} />
              <h4 className="font-display font-bold text-white uppercase text-sm">Nationwide Delivery</h4>
              <p className="text-xs text-muted-foreground">All 36 States + FCT</p>
            </StaggerItem>
            <StaggerItem className="space-y-2">
              <Wrench className="mx-auto text-primary" size={28} />
              <h4 className="font-display font-bold text-white uppercase text-sm">Full Support</h4>
              <p className="text-xs text-muted-foreground">Expert After-Sales Service</p>
            </StaggerItem>
            <StaggerItem className="space-y-2">
              <ShieldCheck className="mx-auto text-primary" size={28} />
              <h4 className="font-display font-bold text-white uppercase text-sm">Fleet Solutions</h4>
              <p className="text-xs text-muted-foreground">For Individuals & Business</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-24 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase mb-4">Our Products</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg">Innovative solutions for modern Nigerian mobility</p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Product 1 - BNC Challenger S110 */}
            <FadeIn className="lg:col-span-8 group" delay={0.1}>
              <div className="bg-card rounded-xl border border-border overflow-hidden h-full flex flex-col hover:border-primary/50 transition-colors duration-500 shadow-xl">
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 bg-primary text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-lg flex items-center gap-1">
                    <span>⭐</span> Flagship Product
                  </div>
                  <img 
                    src="/images/bike-red.jpeg" 
                    alt="BNC Challenger S110" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-3xl font-display font-bold text-white uppercase mb-1">BNC Challenger S110</h3>
                  <p className="text-primary font-medium tracking-wide text-sm mb-4">CHALLENGE THE STATUS QUO</p>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Experience the perfect blend of style, efficiency, and cutting-edge technology with Nigeria's most advanced electric bike. Designed for urban commuters and off-road enthusiasts alike.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-3 mb-8 text-sm">
                    {['Zero Emissions & Eco-friendly', 'Powerful Electric Motor', 'Low Maintenance Cost', 'Urban & Rural Ready'].map(feat => (
                      <div key={feat} className="flex items-center gap-2 text-white/80">
                        <CheckCircle2 size={16} className="text-primary shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-bold">Available Variants</p>
                    <div className="flex gap-3 mb-8">
                      <div className="w-8 h-8 rounded-full bg-[#6b7c5c] ring-2 ring-offset-2 ring-offset-card ring-transparent hover:ring-white transition-all cursor-crosshair" title="Commando Green"></div>
                      <div className="w-8 h-8 rounded-full bg-[#1a1a1a] ring-2 ring-offset-2 ring-offset-card ring-transparent hover:ring-white transition-all cursor-crosshair" title="Panther Black"></div>
                      <div className="w-8 h-8 rounded-full bg-[#2563eb] ring-2 ring-offset-2 ring-offset-card ring-transparent hover:ring-white transition-all cursor-crosshair" title="Azure Blue"></div>
                      <div className="w-8 h-8 rounded-full bg-[#dc2626] ring-2 ring-offset-2 ring-offset-card ring-transparent hover:ring-white transition-all cursor-crosshair" title="Crimson Red"></div>
                    </div>
                    <Link 
                      href="/contact"
                      className="inline-flex w-full items-center justify-center px-6 py-4 bg-primary/10 border border-primary text-primary font-display font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-all rounded-sm"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Product 2 - Tires */}
            <FadeIn className="lg:col-span-4 group" delay={0.3}>
              <div className="bg-card rounded-xl border border-border overflow-hidden h-full flex flex-col hover:border-primary/50 transition-colors duration-500 shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 bg-white/10 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider border border-white/20">
                    Also Available
                  </div>
                  {/* stock image scenic mountain landscape for vehicle tires context */}
                  <img 
                    src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&fit=crop" 
                    alt="Vehicle Tires" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-display font-bold text-white uppercase mb-4">Vehicle Tires</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    A wide range of durable, high-quality tires from globally trusted manufacturers. Serving private vehicles and commercial fleets nationwide.
                  </p>
                  
                  <div className="space-y-2 mb-8 text-sm">
                    {['Premium Brands', 'Fleet Supply', 'Safety-Certified', 'Competitive Pricing'].map(feat => (
                      <div key={feat} className="flex items-center gap-2 text-white/80">
                        <CheckCircle2 size={16} className="text-primary shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Link 
                      href="/contact"
                      className="inline-flex w-full items-center justify-center px-6 py-4 bg-transparent border border-white/20 text-white font-display font-bold uppercase tracking-wider hover:bg-white/5 transition-all rounded-sm"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* COLOR SHOWCASE */}
      <section className="py-24 bg-[#0a0a14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase mb-4">Choose Your Color</h2>
            <p className="text-muted-foreground text-lg">The BNC Challenger S110 comes in 4 bold variants</p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { img: '/images/bike-green.jpeg', name: 'Commando Green', desc: 'The color of youth and growth' },
              { img: '/images/bike-black.jpeg', name: 'Panther Black', desc: 'It\'s My Happy Color' },
              { img: '/images/bike-blue.jpeg', name: 'Azure Blue', desc: 'I\'m a blue sky thinker' },
              { img: '/images/bike-red.jpeg', name: 'Crimson Red', desc: 'It\'s a picker-upper' },
            ].map((color) => (
              <StaggerItem key={color.name} className="relative aspect-[3/4] rounded-lg overflow-hidden group">
                <img src={color.img} alt={color.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h4 className="text-xl font-display font-bold text-white uppercase">{color.name}</h4>
                  <p className="text-sm text-primary font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity delay-100">"{color.desc}"</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase mb-4">What We Offer</h2>
            <div className="w-24 h-1 bg-primary mb-6"></div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <BatteryCharging size={32} />, title: "Electric Bike Sales", desc: "Premium electric bikes for sustainable commuting." },
              { icon: <CheckCircle2 size={32} />, title: "Tire Sales & Distribution", desc: "Top-tier vehicle tires for individuals and commercial use." },
              { icon: <Wrench size={32} />, title: "After-Sales Support", desc: "Expert maintenance, servicing, and spare parts." },
              { icon: <HeadphonesIcon size={32} />, title: "Consultation Services", desc: "Guidance on transitioning to electric mobility solutions." },
              { icon: <Truck size={32} />, title: "Delivery Services", desc: "Reliable nationwide delivery across Nigeria." },
              { icon: <ShieldCheck size={32} />, title: "Fleet Solutions", desc: "Bulk supplies for delivery businesses and corporate fleets." },
            ].map((service, i) => (
              <StaggerItem key={i} className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all hover:-translate-y-1 shadow-lg group">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-display font-bold text-white uppercase mb-3">{service.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase mb-4">The S110 in Action</h2>
            <p className="text-muted-foreground text-lg">Trusted by Nigerians across the country</p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            <FadeIn delay={0.1} className="col-span-2 row-span-2 rounded-xl overflow-hidden relative group">
              <img src="/images/real-1.jpeg" alt="Gallery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </FadeIn>
            <FadeIn delay={0.2} className="col-span-1 row-span-1 rounded-xl overflow-hidden relative group">
              <img src="/images/real-2.jpeg" alt="Gallery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </FadeIn>
            <FadeIn delay={0.3} className="col-span-1 row-span-1 rounded-xl overflow-hidden relative group">
              <img src="/images/real-3.jpeg" alt="Gallery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </FadeIn>
            <FadeIn delay={0.4} className="col-span-2 md:col-span-2 row-span-1 rounded-xl overflow-hidden relative group">
              <img src="/images/real-4.jpeg" alt="Gallery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-900 z-0"></div>
        <div className="absolute inset-0 bg-[url('/images/bike-colors.jpeg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase mb-6 drop-shadow-lg">Ready to Ride the Future?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">Join hundreds of Nigerians already making the switch to efficient, sustainable electric mobility.</p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-primary font-display font-bold uppercase tracking-widest hover:bg-gray-100 hover:scale-105 transition-all rounded-sm shadow-xl"
            >
              Order Your S110 Today
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
