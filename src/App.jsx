import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Target, 
  TrendingUp, 
  Users, 
  Mail, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X,
  Instagram,
  Linkedin,
  Facebook,
  Zap,
  Award,
  Smartphone,
  ChevronRight
} from 'lucide-react';

const VSEConsultants = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Handle scroll effects for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const testimonials = [
    {
      name: "Evans Kiburi",
      role: "Client",
      result: "Improved Brand Visibility",
      quote: "Incredible team! Always positive, a pleasure to work with, they provide tailored advice that truly meets your needs!"
    },
    {
      name: "Sarah Mwangi",
      role: "E-commerce Founder",
      result: "150% Sales Growth",
      quote: "VSE didn't just market our product; they completely revamped our go-to-market formula. The results speak for themselves."
    }
  ];

  return (
    <div className="font-sans text-slate-50 bg-slate-950 min-h-screen selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* Logo in white container for visibility */}
            <div className="bg-white rounded-lg p-1.5 shadow-lg shadow-indigo-500/10">
              <img 
                src="/vse.png" 
                alt="VSE Consultants Logo" 
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Services</button>
            <button onClick={() => scrollToSection('case-study')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Case Studies</button>
            <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">About</button>
            <button 
              onClick={() => scrollToSection('audit')}
              className="px-6 py-2.5 bg-white text-slate-950 rounded-full font-bold text-sm hover:bg-indigo-50 transition-all transform hover:scale-105 hover:shadow-lg active:scale-95"
            >
              Get Free Audit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
            <button onClick={() => scrollToSection('services')} className="text-left text-slate-300 hover:text-white py-2">Services</button>
            <button onClick={() => scrollToSection('case-study')} className="text-left text-slate-300 hover:text-white py-2">Case Studies</button>
            <button onClick={() => scrollToSection('about')} className="text-left text-slate-300 hover:text-white py-2">About</button>
            <button onClick={() => scrollToSection('audit')} className="w-full py-3 bg-indigo-600 rounded-lg font-bold text-white">Get Started</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern Business Skyline" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950"></div>
        </div>

        {/* Abstract Background Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-950/50 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-8 animate-fade-in-up backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            #1 Marketing Agency in Kenya
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight max-w-5xl mx-auto">
            Your Comprehensive <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Marketing Solution.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Struggling with your strategy? We curate world-class marketing formulas customized to elevate your brand. Achieving your goals has never been simpler.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => scrollToSection('audit')}
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2"
            >
              Get Free Audit <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-bold text-lg transition-all border border-white/10 backdrop-blur-sm"
            >
              View Strategies
            </button>
          </div>

          <div className="mt-16 pt-10 border-t border-slate-800/50 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-slate-500 text-sm font-medium uppercase tracking-wider">
            <span>Trusted by elite brands</span>
            <div className="flex items-center gap-8">
               {/* UPDATED: Bigger Partner Logos in larger White Boxes */}
               <div className="bg-white rounded-xl px-6 py-4 shadow-lg shadow-indigo-500/10 transform hover:scale-105 transition-all duration-300">
                 <img src="/zaliha.png" alt="Zalika Logo" className="h-16 md:h-20 w-auto object-contain" />
               </div>
               <div className="bg-white rounded-xl px-6 py-4 shadow-lg shadow-indigo-500/10 transform hover:scale-105 transition-all duration-300">
                 <img src="/auwana.png" alt="Auwana Logo" className="h-16 md:h-20 w-auto object-contain" />
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section id="results" className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10M+</div>
              <div className="text-sm text-indigo-400 font-medium">Audience Reached</div>
            </div>
            <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">12k</div>
              <div className="text-sm text-purple-400 font-medium">Strategic Options</div>
            </div>
            <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">45%</div>
              <div className="text-sm text-pink-400 font-medium">More Qualified Leads</div>
            </div>
            <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">8+</div>
              <div className="text-sm text-emerald-400 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-700"></div>
                <div className="relative rounded-2xl overflow-hidden border border-slate-700 aspect-video lg:aspect-square">
                  {/* High Quality Stock Image */}
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000" 
                    alt="Strategic Team Meeting" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-2">Focused on Growth</h3>
                    <p className="text-slate-300">We build great teams to solve your business problems efficiently.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Meticulously curated by <span className="text-indigo-400">Specialists.</span></h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                We are a team of passionate people whose goal is to improve everyone's life through proper execution of marketing strategies and Go-To-Market formulas. 
                <br/><br/>
                Our products are designed for small to medium size companies willing to optimize their performance. Don't miss the opportunity to transform your marketing approach.
              </p>
              
              <div className="space-y-6">
                 <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">Targeted Execution</h4>
                      <p className="text-slate-400 text-sm mt-1">We don't guess. We analyze, plan, and execute with precision.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="p-3 bg-pink-500/10 rounded-lg text-pink-400">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">Scalable Growth</h4>
                      <p className="text-slate-400 text-sm mt-1">Strategies designed to grow with you, from startup to enterprise.</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Marketing Excellence</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our team provides tailored marketing solutions that create a unique brand presence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="w-8 h-8 text-indigo-400" />,
                title: "Strategic Planning",
                desc: "Contemporary marketing plans designed to elevate your brand and drive growth with cutting-edge techniques.",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
              },
              {
                icon: <Smartphone className="w-8 h-8 text-pink-400" />,
                title: "Social Ecosystem",
                desc: "Dominate the Kenyan social space with campaigns that reach millions and drive real engagement.",
                img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800"
              },
              {
                icon: <Globe className="w-8 h-8 text-emerald-400" />,
                title: "Digital Audit",
                desc: "Comprehensive analysis of your website, email, and social platforms to identify growth opportunities.",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
              }
            ].map((service, index) => (
              <div key={index} className="group rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all border border-slate-700/50 hover:border-indigo-500/50 relative overflow-hidden flex flex-col h-full">
                <div className="h-48 overflow-hidden relative">
                   <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-all z-10"></div>
                   <img src={service.img} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 relative">
                  <div className="absolute -top-10 right-8 p-4 bg-slate-950 rounded-xl border border-slate-700 group-hover:border-indigo-500/50 transition-colors shadow-xl z-20">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white mt-2">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="case-study" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-stretch gap-0 bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            {/* Left Image Side */}
            <div className="w-full md:w-2/5 relative min-h-[400px]">
               <img 
                 src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=2000" 
                 alt="Professional Analytics" 
                 className="absolute inset-0 w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-indigo-900/60 mix-blend-multiply"></div>
               <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full border border-white/20 mb-3 inline-block">CASE STUDY</span>
                  <h3 className="text-2xl font-bold text-white">Zalika Africa</h3>
                  <p className="text-indigo-200 text-sm mt-2">Education Sector</p>
               </div>
            </div>

            {/* Right Content Side */}
            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
               {/* UPDATED: Title and content from the blog post */}
               <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Latest Insights: From Clutter to Clarity</h2>
               <p className="text-slate-400 mb-6 leading-relaxed">
                 When legacy accounts and digital clutter stifle lead generation, aggressive optimization is key. 
                 See how our Marketing Lead, Mburu Gichohi, utilized the "VSE Blueprint" to surgically declutter a fragmented presence into a high-performance sales asset.
               </p>
               
               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                 <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 text-center">
                   <div className="text-2xl font-bold text-white">200</div>
                   <div className="text-xs text-slate-400">Leads Generated</div>
                 </div>
                 <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 text-center">
                   <div className="text-2xl font-bold text-emerald-400">20</div>
                   <div className="text-xs text-slate-400">Sales Closed</div>
                 </div>
                 <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 text-center">
                   <div className="text-2xl font-bold text-indigo-400">10%</div>
                   <div className="text-xs text-slate-400">Conversion Rate</div>
                 </div>
                 <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 text-center">
                   <div className="text-xl font-bold text-white">2.5k</div>
                   <div className="text-xs text-slate-400">Ad Spend (KES)</div>
                 </div>
               </div>

               <div className="bg-indigo-900/20 border-l-4 border-indigo-500 p-4 mb-8 rounded-r-lg">
                 <p className="text-indigo-200 italic text-sm">
                   "Strategy and precision will always outperform spending alone. The success was not a result of a large budget, but of a disciplined process."
                 </p>
               </div>

               <button className="flex items-center gap-2 text-white font-bold hover:text-indigo-400 transition-colors group">
                 Read Full Case Study <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-indigo-950/20 -z-10"></div>
         <div className="container mx-auto px-6">
           <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl p-8 md:p-16 border border-indigo-500/30 shadow-2xl relative overflow-hidden">
             {/* Decorative circles */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

             <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
               <div className="md:w-3/5">
                 <div className="inline-block px-4 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm font-bold mb-6 border border-amber-500/30">
                   PREMIUM PACKAGE
                 </div>
                 <h2 className="text-3xl md:text-5xl font-bold mb-6">World Class Strategy Curation</h2>
                 <p className="text-lg text-indigo-100 mb-8 max-w-xl">
                   Get a fully customized marketing blueprint meticulously curated by our specialists. This isn't just advice; it's a complete roadmap to market dominance in Kenya and Africa.
                 </p>
                 <ul className="space-y-4 mb-8">
                   <li className="flex items-center gap-3 text-indigo-100">
                     <CheckCircle2 className="w-5 h-5 text-amber-400" /> Full Market Analysis
                   </li>
                   <li className="flex items-center gap-3 text-indigo-100">
                     <CheckCircle2 className="w-5 h-5 text-amber-400" /> Custom KPI Dashboard
                   </li>
                   <li className="flex items-center gap-3 text-indigo-100">
                     <CheckCircle2 className="w-5 h-5 text-amber-400" /> 12-Month Execution Plan
                   </li>
                 </ul>
               </div>
               <div className="md:w-2/5 w-full">
                 <div className="bg-slate-950/80 backdrop-blur-xl p-8 rounded-2xl border border-indigo-500/50 text-center shadow-xl transform hover:-translate-y-2 transition-transform duration-500">
                   <p className="text-slate-400 text-sm uppercase tracking-widest mb-2">Total Investment</p>
                   <div className="text-5xl font-bold text-white mb-2">Sh. 295,000</div>
                   <p className="text-indigo-400 text-sm mb-8">One-time comprehensive fee</p>
                   <button onClick={() => scrollToSection('audit')} className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-indigo-500/25">
                     Secure Your Strategy
                   </button>
                 </div>
               </div>
             </div>
           </div>
         </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-center relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #6366f1 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold mb-16">Success Stories</h2>
          <div className="max-w-4xl mx-auto bg-slate-800/30 p-12 rounded-3xl border border-slate-700/50 backdrop-blur-sm relative shadow-2xl">
             <Award className="w-16 h-16 text-indigo-500/20 absolute top-8 left-8" />
             
             <div className="relative z-10">
               <p className="text-2xl md:text-3xl font-light italic text-slate-200 mb-8">"{testimonials[activeTestimonial].quote}"</p>
               <div>
                 <h4 className="text-xl font-bold text-white">{testimonials[activeTestimonial].name}</h4>
                 <p className="text-indigo-400">{testimonials[activeTestimonial].role}</p>
                 <span className="inline-block mt-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded-full border border-emerald-500/20">
                   {testimonials[activeTestimonial].result}
                 </span>
               </div>
             </div>

             <div className="flex justify-center gap-3 mt-8">
               {testimonials.map((_, idx) => (
                 <button 
                   key={idx}
                   onClick={() => setActiveTestimonial(idx)}
                   className={`w-3 h-3 rounded-full transition-all ${activeTestimonial === idx ? 'bg-indigo-500 w-8' : 'bg-slate-600'}`}
                   aria-label={`View testimonial ${idx + 1}`}
                 />
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* CTA / Audit Form */}
      <section id="audit" className="py-24 bg-gradient-to-b from-slate-950 to-indigo-950">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
            <p className="text-lg text-slate-300">
              Share your details below for a <span className="text-indigo-400 font-bold">FREE audit</span> of your social media, website, and email marketing platforms.
            </p>
          </div>

          <form className="max-w-xl mx-auto bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl relative">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="space-y-6 relative z-10">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Company Name</label>
                <input type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="Your Brand" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Social Media / Website Links</label>
                <textarea className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all h-32" placeholder="e.g. instagram.com/brand, yourwebsite.com"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                <input type="email" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="you@company.com" />
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-indigo-500/30 transform transition hover:scale-[1.02]">
                Claim My Free Audit
              </button>
            </div>
            <p className="text-center text-xs text-slate-500 mt-6">
              By submitting, you agree to our privacy policy. No spam, ever.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                {/* Footer Logo in white container */}
                <div className="bg-white rounded-lg p-1.5">
                  <img 
                    src="/vse.png" 
                    alt="VSE Consultants Logo" 
                    className="h-8 w-auto object-contain"
                  />
                </div>
              </div>
              <p className="text-slate-400 max-w-sm mb-6">
                Empowering business growth and career potential through expert marketing execution.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Services</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Marketing Strategy</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Digital Audit</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Social Media Management</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Go-To-Market Plans</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Contact</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4" /> vsesalesconsultants@gmail.com
                </li>
                <li className="flex items-center gap-3">
                  <Smartphone className="w-4 h-4" /> +254 790 122 006
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
            <p>&copy; 2024 VSE Consultants. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-400">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VSEConsultants;