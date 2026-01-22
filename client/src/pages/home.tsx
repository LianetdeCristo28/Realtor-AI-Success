import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Check, ChevronRight, Star, 
  MessageSquare, Brain, FileText, Calendar, 
  Phone, Shield, Zap, ArrowRight, Bot, 
  TrendingUp, Users, Clock, Lock
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// --- Types & Data ---

const FEATURES = [
  {
    icon: MessageSquare,
    title: "Instant Follow-Up",
    description: "Engage leads within seconds of inquiry 24/7. Never miss a Zillow or Realtor.com lead again."
  },
  {
    icon: Shield,
    title: "Objection Handling",
    description: "Trained on millions of real estate conversations to expertly navigate 'I'm just looking' or 'Commission is too high'."
  },
  {
    icon: FileText,
    title: "Listing Descriptions",
    description: "Generate SEO-optimized, emotionally compelling listing copy in your unique brand voice in one click."
  },
  {
    icon: Brain,
    title: "Smart CRM Notes",
    description: "Automatically updates your CRM with conversation summaries, client sentiment, and next steps."
  },
  {
    icon: Phone,
    title: "Script Mastery",
    description: "Access battle-tested cold calling and door knocking scripts that adapt to the prospect's responses live."
  },
  {
    icon: Zap,
    title: "Always-On Assistant",
    description: "Your digital team member that never sleeps, takes breaks, or asks for a raise. Pure productivity."
  }
];

const AGENTS = [
  {
    name: "Sarah",
    role: "Lead Qualifier",
    outcome: "Turns cold leads into booked appointments.",
    demo: "Hi! I noticed you were looking at 123 Main St. It's a beauty! Are you looking to move soon, or just browsing the market?"
  },
  {
    name: "Marcus",
    role: "Negotiation Coach",
    outcome: "Helps you defend your commission.",
    demo: "When they say 'Cut your fee', try this: 'I understand budget is key. If I can net you 10% more, is my fee still an issue?'"
  },
  {
    name: "Elena",
    role: "Copywriting Specialist",
    outcome: "Writes listings that sell homes faster.",
    demo: "Sun-drenched modern sanctuary featuring soaring ceilings and chef's kitchen. An entertainer's dream in the heart of the city."
  },
  {
    name: "David",
    role: "Market Analyst",
    outcome: "Delivers data-driven valuation insights.",
    demo: "Based on recent comps in 90210, price per sqft is up 5%. I recommend positioning at $1.2M to trigger multiple offers."
  }
];

const PRICING = [
  {
    name: "Starter",
    price: "199",
    description: "For solo agents ready to scale.",
    features: ["1 AI Agent Persona", "500 Conversations/mo", "Basic CRM Integration", "Email Support"],
    highlight: false
  },
  {
    name: "Pro",
    price: "349",
    description: "For top producers dominating their market.",
    features: ["All 4 AI Personas", "Unlimited Conversations", "Priority CRM Sync", "24/7 Priority Support", "Custom Script Training"],
    highlight: true
  },
  {
    name: "Team",
    price: "Custom",
    description: "For brokerages and high-volume teams.",
    features: ["Unlimited Seats", "White-label Options", "Dedicated Success Manager", "API Access", "Team Analytics"],
    highlight: false
  }
];

const FAQS = [
  {
    question: "Is this hard to set up?",
    answer: "Not at all. We connect to your existing lead sources (Zillow, Facebook, etc.) in about 2 minutes. No coding required."
  },
  {
    question: "Will it sound like a robot?",
    answer: "No. Our models are fine-tuned on top-performing human realtor conversations. Most leads never know they're talking to AI."
  },
  {
    question: "Does it integrate with my CRM?",
    answer: "Yes, we integrate natively with KVCore, Follow Up Boss, LionDesk, and Salesforce. Others available via Zapier."
  },
  {
    question: "What if I'm not tech-savvy?",
    answer: "We built this for realtors, not engineers. The interface is simple, intuitive, and we offer free onboarding calls."
  },
  {
    question: "Is my client data secure?",
    answer: "Absolutely. We use bank-level encryption and never share your leads or client data with other agents or third parties."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, we operate on a month-to-month basis. We believe we should earn your business every single month."
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className="w-8 h-8 text-primary" />
          <span className="text-xl font-heading font-bold tracking-tight">REAL ESTATE SUCCESS AI</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
          <a href="#agents" className="text-sm font-medium hover:text-primary transition-colors">Agents</a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
          <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
            Get Early Access
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border/50"
          >
            <div className="flex flex-col p-6 gap-4">
              <a href="#features" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Features</a>
              <a href="#agents" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Agents</a>
              <a href="#pricing" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Pricing</a>
              <Button className="w-full bg-primary text-primary-foreground">Get Early Access</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/30 rounded-full blur-[80px]" />
        <svg className="absolute inset-0 w-full h-full text-border/20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary-foreground text-xs font-semibold uppercase tracking-wider mb-8">
            <Star className="w-3 h-3 fill-primary text-primary" />
            Voted #1 AI Tool for Realtors 2025
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] mb-6 text-foreground">
            The Top 1% of Realtors <br />
            <span className="text-primary italic">Never Sleep.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Your new 24/7 AI sales team. Instantly qualify leads, handle objections, and book appointments while you focus on closing deals.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="h-14 px-8 rounded-full text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 w-full sm:w-auto">
              Get Early Access
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-lg border-primary/30 hover:bg-primary/5 w-full sm:w-auto">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-primary border-b-[5px] border-b-transparent ml-1"></div>
              </div>
              Watch Demo
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground/80">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" /> No credit card required
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" /> Setup in 2 minutes
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" /> 14-day free trial
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">The "Speed to Lead" Problem</h2>
          <p className="text-muted-foreground">You're losing deals every single day. Not because you're not good, but because you're human.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "5 Minute Rule",
              text: "Leads contacted within 5 mins are 21x more likely to convert. Can you hit that 24/7?",
              icon: Clock
            },
            {
              title: "Lead Fatigue",
              text: "Following up 8-12 times per lead is exhausting. Most agents stop after 2 attempts.",
              icon: TrendingUp
            },
            {
              title: "Inconsistent Quality",
              text: "Bad days, missed calls, and lack of script mastery cost you thousands in commissions.",
              icon: Users
            }
          ].map((item, i) => (
            <Card key={i} className="border-none shadow-none bg-transparent">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6 text-destructive">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Features</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4">Everything You Need to Scale</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Replace your fragmented toolset with one intelligent system.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full glass-card hover:bg-white/50 transition-colors border-border/40">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AgentsShowcase = () => {
  return (
    <section id="agents" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Meet Your New Top Producers</h2>
          <p className="text-muted-foreground">Specialized AI agents for every stage of your pipeline.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {AGENTS.map((agent, i) => (
            <Card key={i} className="overflow-hidden border-border/40 hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 md:p-8 flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold font-heading">{agent.name}</h3>
                    <p className="text-primary font-medium text-sm uppercase tracking-wide">{agent.role}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                    {agent.name[0]}
                  </div>
                </div>
                
                <p className="text-foreground/80 mb-6 italic">"{agent.outcome}"</p>
                
                <div className="mt-auto bg-background/50 rounded-xl p-4 border border-border/30 relative">
                  <div className="absolute -top-3 left-4 bg-primary text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">
                    Live Preview
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {agent.demo}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Invest in Your Growth</h2>
          <p className="text-muted-foreground">Simple, transparent pricing. 30-day money-back guarantee.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING.map((plan, i) => (
            <div key={i} className={`relative ${plan.highlight ? 'md:-mt-8' : ''}`}>
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 -translate-y-1/2 flex justify-center z-10">
                  <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              <Card className={`h-full flex flex-col ${
                plan.highlight 
                  ? 'border-primary shadow-2xl shadow-primary/10 bg-white/80' 
                  : 'border-border/50 bg-white/40'
              }`}>
                <CardContent className="p-8 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-heading font-bold">
                      {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
                    </span>
                    {plan.price !== "Custom" && <span className="text-muted-foreground">/mo</span>}
                  </div>
                  <p className="text-sm text-muted-foreground mb-8 pb-8 border-b border-border/50">
                    {plan.description}
                  </p>
                  
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      plan.highlight 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                        : 'bg-secondary/20 text-foreground hover:bg-secondary/30'
                    }`}
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border/50">
              <AccordionTrigger className="text-left font-medium text-lg hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          Ready to Automate Your Success?
        </h2>
        <p className="text-xl text-muted-foreground mb-10">
          Join 5,000+ realtors who are closing more deals while working less.
        </p>
        
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 mb-6" onSubmit={(e) => e.preventDefault()}>
          <Input 
            type="email" 
            placeholder="Enter your email address" 
            className="h-12 bg-background border-border/60 focus:border-primary/50"
          />
          <Button size="lg" className="h-12 bg-primary text-primary-foreground hover:bg-primary/90 px-8">
            Get Access
          </Button>
        </form>
        <p className="text-xs text-muted-foreground">
          Limited spots available for the beta program. No spam, ever.
        </p>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/40 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-6 h-6 text-primary" />
              <span className="text-lg font-heading font-bold">REAL ESTATE SUCCESS AI</span>
            </div>
            <p className="text-muted-foreground max-w-xs mb-6">
              Empowering real estate professionals with next-generation AI tools to close more deals in less time.
            </p>
            <div className="flex gap-4 text-muted-foreground">
              {/* Social placeholders */}
              <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 15.8-1.3-.6-2.3-1.6-2-2.5 0-.7 3.5.3 4.2-.4-3.6-1-1.5-5.2-1.5-5.2 0 0 1.2 1.3 2.5 1.4-2.4-3.5.8-6.6.8-6.6 2.3 3 5.4 4 7 3 0-2.4 2.8-4.2 4.6-2.9.8.5 1.5 1.3 2.1.8.6-.6.6-1.5 0-2 .6-.6 1.4-1.2 2-1.6-.6 1.1-1.3 2-2 2.6z"/></svg>
              </div>
              <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Features</a></li>
              <li><a href="#" className="hover:text-primary">Pricing</a></li>
              <li><a href="#" className="hover:text-primary">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; 2025 Real Estate Success AI. All rights reserved.</p>
          <p>Made with intelligence in San Francisco.</p>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <Features />
        <AgentsShowcase />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
