import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Check, Star, 
  MessageSquare, Brain, FileText, 
  Phone, Shield, Zap, Bot, 
  TrendingUp, Users, Clock, Globe,
  ChevronLeft, ChevronRight
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// --- Images ---
import heroCityImg from "@/assets/hero-city-ai.png";

const IMG_ANA    = "/ana%20agente%20principal.png";
const IMG_SOFIA  = "/agente%20sofia.png";
const IMG_MARCOS = "/agente%20marcos.png";


// --- Types & Translations ---

type Language = 'es' | 'en';

const TRANSLATIONS = {
  es: {
    nav: {
      features: "Características",
      agents: "Agentes",
      pricing: "Precios",
      cta: "Acceso Anticipado"
    },
    hero: {
      badge: "Votada Herramienta AI #1 para Realtors 2025",
      headline: <>El Top 1% de los Realtors <br /><span className="text-primary italic">Nunca Duerme.</span></>,
      subheadline: "Tu nuevo sistema IA 24/7. Yo te lo configuro, te lo entrego listo y te acompaño. Tú no tocas código — tú solo cierras ventas.",
      ctaPrimary: "Obtén Acceso Anticipado",
      ctaSecondary: "Agendar una Llamada",
      trust: ["Sin código de tu parte", "Onboarding guiado", "Soporte incluido"]
    },
    problem: {
      headline: "El Problema de la 'Velocidad de Respuesta'",
      subheadline: "Estás perdiendo ventas todos los días. No porque no seas bueno, sino porque eres humano.",
      cards: [
        {
          title: "La Regla de los 5 Minutos",
          text: "Los leads contactados en < 5 mins tienen 21x más probabilidad de convertir. ¿Puedes lograr eso 24/7?",
          icon: Clock
        },
        {
          title: "Fatiga de Seguimiento",
          text: "Hacer seguimiento 8-12 veces por lead es agotador. La mayoría de agentes se rinde después del 2do intento.",
          icon: TrendingUp
        },
        {
          title: "Calidad Inconsistente",
          text: "Días malos, llamadas perdidas y falta de guiones perfectos te cuestan miles en comisiones.",
          icon: Users
        }
      ]
    },
    features: {
      label: "Características",
      headline: "Todo lo que Necesitas para Escalar",
      subheadline: "Reemplaza tus herramientas fragmentadas con un sistema inteligente unificado.",
      list: [
        {
          title: "Seguimiento Instantáneo",
          description: "Contacta leads en segundos 24/7. Nunca pierdas un lead de Zillow o Realtor.com de nuevo.",
          icon: MessageSquare
        },
        {
          title: "Manejo de Objeciones",
          description: "Entrenado con millones de conversaciones para navegar expertamente el 'Solo estoy mirando'.",
          icon: Shield
        },
        {
          title: "Descripciones de Propiedades",
          description: "Genera descripciones SEO optimizadas y emocionalmente persuasivas con un clic.",
          icon: FileText
        },
        {
          title: "Notas CRM Inteligentes",
          description: "Actualiza tu CRM automáticamente con resúmenes, sentimiento del cliente y próximos pasos.",
          icon: Brain
        },
        {
          title: "Maestría en Guiones",
          description: "Accede a guiones probados que se adaptan en vivo a las respuestas del prospecto.",
          icon: Phone
        },
        {
          title: "Asistente Siempre Activo",
          description: "Tu miembro del equipo digital que nunca duerme, toma descansos ni pide aumento.",
          icon: Zap
        }
      ]
    },
    howItWorks: {
      label: "El Proceso",
      headline: "¿Cómo Funciona?",
      subheadline: "Del primer contacto a tu sistema activo — sin que toques código.",
      steps: [
        {
          number: "01",
          title: "Agendamos una llamada de 30 min",
          description: "Entiendo tu negocio, tus metas y tus fuentes de leads. Sin compromiso."
        },
        {
          number: "02",
          title: "Configuro tu sistema en 5–7 días",
          description: "Ana personalizada para ti, flujos automáticos y CRM según tu plan."
        },
        {
          number: "03",
          title: "Te entrego todo listo con capacitación",
          description: "Una sesión contigo para que sepas exactamente cómo funciona cada parte."
        },
        {
          number: "04",
          title: "Soporte continuo de mi parte",
          description: "No estás solo. Estoy disponible para ajustes y mejoras cada mes."
        }
      ]
    },
    agents: {
      headline: "Conoce a Ana — Tu Agente IA Personal",
      subheadline: "Ana es la pieza central del sistema. Yo la configuro personalizada para tu negocio como Realtor. No es software genérico — es tu asistente IA construida a tu medida.",
      planIncluded: "Incluido en",
      list: [
        {
          name: "Ana",
          role: "Agente IA Principal",
          outcome: "Siempre disponible, siempre lista.",
          copy: "Yo construyo a Ana específicamente para tu negocio. Califica leads, maneja objeciones y agenda citas — sin que toques código.",
          plan: "Starter",
          image: IMG_ANA
        },
        {
          name: "Sofia",
          role: "Cerradora de Ventas",
          outcome: "Conversión sin miedo.",
          copy: "Sofia maneja objeciones de precio y competencia con guiones de alto rendimiento. Transforma el 'Solo estoy mirando' en una cita agendada.",
          plan: "Pro",
          image: IMG_SOFIA
        },
        {
          name: "Marcos",
          role: "Seguimiento Automático",
          outcome: "Cero leads perdidos.",
          copy: "Marcos nutre a tus prospectos automáticamente hasta que estén listos para firmar. Tú no tienes que recordar nada.",
          plan: "Pro",
          image: IMG_MARCOS
        }
      ]
    },
    pricing: {
      headline: "Invierte en tu Crecimiento",
      subheadline: "Precios de acceso anticipado — disponible solo para los primeros 5 clientes.",
      setupLabel: "Setup único",
      monthlyLabel: "/mes",
      fullPricesNote: "Precios plenos después de los primeros 5 clientes: Starter $797 + $147/mes · Pro $1,497 + $297/mes · Scale $2,997 + $497/mes",
      plans: [
        {
          name: "Starter",
          tagline: "Activa tu Agente IA",
          setup: "497",
          monthly: "97",
          description: "Para el Realtor que quiere empezar sin arriesgar mucho.",
          features: [
            "Ana configurada para tu negocio",
            "1 flujo n8n (seguimiento automático)",
            "Calificación básica de leads",
            "30 días de soporte incluido"
          ],
          cta: "Comenzar"
        },
        {
          name: "Pro",
          tagline: "CRM + Automatización Completa",
          setup: "997",
          monthly: "197",
          description: "Donde la mayoría de los clientes deberían aterrizar.",
          features: [
            "Todo Starter incluido",
            "CRM en Supabase configurado",
            "3–5 flujos automatizados",
            "Dashboard de métricas",
            "60 días de soporte"
          ],
          cta: "Comenzar",
          popular: "Más Popular"
        },
        {
          name: "Scale",
          tagline: "Sistema IA Completo",
          setup: "1,997",
          monthly: "397",
          description: "Para el Realtor o equipo que quiere operar como el top 1%.",
          features: [
            "Todo Pro incluido",
            "Secuencias de nurturing completas",
            "Reportes semanales automáticos",
            "Llamada estratégica mensual con Lianet"
          ],
          cta: "Comenzar"
        }
      ]
    },
    faq: {
      headline: "Preguntas Frecuentes",
      list: [
        {
          question: "¿Es difícil de configurar?",
          answer: "Para nada. Conectamos tus fuentes de leads (Zillow, Facebook, etc.) en unos 2 minutos. Sin código."
        },
        {
          question: "¿Sonará como un robot?",
          answer: "No. Nuestros modelos están ajustados con conversaciones de agentes humanos de alto rendimiento. La mayoría no nota la diferencia."
        },
        {
          question: "¿Se integra con mi CRM?",
          answer: "Sí, nos integramos nativamente con KVCore, Follow Up Boss, LionDesk y Salesforce. Otros disponibles vía Zapier."
        },
        {
          question: "¿Qué pasa si no soy tecnológico?",
          answer: "Construimos esto para agentes, no ingenieros. La interfaz es simple e intuitiva, y ofrecemos llamadas de onboarding gratuitas."
        },
        {
          question: "¿Están seguros los datos de mis clientes?",
          answer: "Absolutamente. Usamos encriptación de nivel bancario y nunca compartimos tus leads con otros agentes."
        },
        {
          question: "¿Puedo cancelar cuando quiera?",
          answer: "Sí, operamos mes a mes. Creemos que debemos ganarnos tu negocio cada mes."
        }
      ]
    },
    cta: {
      headline: "¿Listo para Automatizar tu Éxito?",
      subheadline: "Solo quedan 5 cupos de acceso anticipado. Escríbeme tu correo y hablamos.",
      placeholder: "Ingresa tu correo electrónico",
      button: "Obtener Acceso",
      disclaimer: "Te escribo personalmente en menos de 24 horas. Sin spam, nunca."
    },
    footer: {
      description: "Soy Lianet Espinosa, Realtor en Florida. Yo configuro este sistema de IA para tu negocio — y me aseguro de que funcione.",
      products: "Navegación",
      legal: "Legal",
      links: {
        features: "Características",
        pricing: "Precios",
        privacy: "Privacidad",
        terms: "Términos",
        cookies: "Cookies"
      },
      rights: "Todos los derechos reservados.",
      contact: "Contacto: lianet@lianet-espinosa-realty.com"
    }
  },
  en: {
    nav: {
      features: "Features",
      agents: "Agents",
      pricing: "Pricing",
      cta: "Get Early Access"
    },
    hero: {
      badge: "Voted #1 AI Tool for Realtors 2025",
      headline: <>The Top 1% of Realtors <br /><span className="text-primary italic">Never Sleep.</span></>,
      subheadline: "Your new 24/7 AI system. I configure it, deliver it ready, and stay by your side. You don't touch code — you just close deals.",
      ctaPrimary: "Get Early Access",
      ctaSecondary: "Schedule a Call",
      trust: ["No code on your end", "Guided onboarding", "Support included"]
    },
    problem: {
      headline: "The 'Speed to Lead' Problem",
      subheadline: "You're losing deals every single day. Not because you're not good, but because you're human.",
      cards: [
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
      ]
    },
    features: {
      label: "Features",
      headline: "Everything You Need to Scale",
      subheadline: "Replace your fragmented toolset with one intelligent unified system.",
      list: [
        {
          title: "Instant Follow-Up",
          description: "Engage leads within seconds of inquiry 24/7. Never miss a Zillow or Realtor.com lead again.",
          icon: MessageSquare
        },
        {
          title: "Objection Handling",
          description: "Trained on millions of real estate conversations to expertly navigate 'I'm just looking'.",
          icon: Shield
        },
        {
          title: "Listing Descriptions",
          description: "Generate SEO-optimized, emotionally compelling listing copy in your unique brand voice in one click.",
          icon: FileText
        },
        {
          title: "Smart CRM Notes",
          description: "Automatically updates your CRM with conversation summaries, client sentiment, and next steps.",
          icon: Brain
        },
        {
          title: "Script Mastery",
          description: "Access battle-tested cold calling scripts that adapt to the prospect's responses live.",
          icon: Phone
        },
        {
          title: "Always-On Assistant",
          description: "Your digital team member that never sleeps, takes breaks, or asks for a raise.",
          icon: Zap
        }
      ]
    },
    howItWorks: {
      label: "The Process",
      headline: "How Does It Work?",
      subheadline: "From first contact to an active system — without you touching code.",
      steps: [
        {
          number: "01",
          title: "We schedule a 30-min call",
          description: "I learn about your business, your goals, and your lead sources. No commitment."
        },
        {
          number: "02",
          title: "I configure your system in 5–7 days",
          description: "Ana personalized for you, automated flows, and CRM according to your plan."
        },
        {
          number: "03",
          title: "I deliver everything ready with training",
          description: "A session with you so you know exactly how every part works."
        },
        {
          number: "04",
          title: "Ongoing support from me",
          description: "You're not alone. I'm available for adjustments and improvements every month."
        }
      ]
    },
    agents: {
      headline: "Meet Ana — Your Personal AI Agent",
      subheadline: "Ana is the centerpiece of the system. I configure her specifically for your real estate business. Not generic software — your AI assistant built to fit you.",
      planIncluded: "Included in",
      list: [
        {
          name: "Ana",
          role: "Main AI Agent",
          outcome: "Always on, always ready.",
          copy: "I build Ana specifically for your business. She qualifies leads, handles objections, and books appointments — without you touching code.",
          plan: "Starter",
          image: IMG_ANA
        },
        {
          name: "Sofia",
          role: "Sales Closer",
          outcome: "Fearless conversion.",
          copy: "Sofia handles price and competition objections with high-performance scripts. Turns 'I'm just looking' into a booked appointment.",
          plan: "Pro",
          image: IMG_SOFIA
        },
        {
          name: "Marcos",
          role: "Auto Follow-Up",
          outcome: "Zero lost leads.",
          copy: "Marcos automatically nurtures your prospects until they're ready to sign. You don't have to remember a thing.",
          plan: "Pro",
          image: IMG_MARCOS
        }
      ]
    },
    pricing: {
      headline: "Invest in Your Growth",
      subheadline: "Early access pricing — available for the first 5 clients only.",
      setupLabel: "One-time setup",
      monthlyLabel: "/mo",
      fullPricesNote: "Full prices after first 5 clients: Starter $797 + $147/mo · Pro $1,497 + $297/mo · Scale $2,997 + $497/mo",
      plans: [
        {
          name: "Starter",
          tagline: "Activate Your AI Agent",
          setup: "497",
          monthly: "97",
          description: "For the Realtor who wants to start without much risk.",
          features: [
            "Ana configured for your business",
            "1 n8n flow (automatic follow-up)",
            "Basic lead qualification",
            "30 days of support included"
          ],
          cta: "Get Started"
        },
        {
          name: "Pro",
          tagline: "CRM + Full Automation",
          setup: "997",
          monthly: "197",
          description: "Where most clients should land.",
          features: [
            "Everything in Starter",
            "Supabase CRM configured",
            "3–5 automated flows",
            "Metrics dashboard",
            "60 days of support"
          ],
          cta: "Get Started",
          popular: "Most Popular"
        },
        {
          name: "Scale",
          tagline: "Complete AI System",
          setup: "1,997",
          monthly: "397",
          description: "For the Realtor or team who wants to operate like the top 1%.",
          features: [
            "Everything in Pro",
            "Full nurturing sequences",
            "Automatic weekly reports",
            "Monthly strategy call with Lianet"
          ],
          cta: "Get Started"
        }
      ]
    },
    faq: {
      headline: "Frequently Asked Questions",
      list: [
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
      ]
    },
    cta: {
      headline: "Ready to Automate Your Success?",
      subheadline: "Only 5 early access spots left. Send me your email and let's talk.",
      placeholder: "Enter your email address",
      button: "Get Access",
      disclaimer: "I'll personally reach out in less than 24 hours. No spam, ever."
    },
    footer: {
      description: "I'm Lianet Espinosa, Realtor in Florida. I configure this AI system for your business — and I make sure it works.",
      products: "Navigation",
      legal: "Legal",
      links: {
        features: "Features",
        pricing: "Pricing",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        cookies: "Cookie Policy"
      },
      rights: "All rights reserved.",
      contact: "Contact: lianet@lianet-espinosa-realty.com"
    }
  }
};

// --- Components ---

const Navbar = ({ lang, setLang, t }: { lang: Language, setLang: (l: Language) => void, t: any }) => {
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
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">{t.nav.features}</a>
          <a href="#agents" className="text-sm font-medium hover:text-primary transition-colors">{t.nav.agents}</a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">{t.nav.pricing}</a>
          
          <div className="flex items-center gap-2 bg-secondary/10 rounded-full p-1 border border-border/20">
            <button 
              onClick={() => setLang('es')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'es' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
            >
              ES
            </button>
            <button 
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'en' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
            >
              EN
            </button>
          </div>

          <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
            {t.nav.cta}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
            <div className="flex items-center gap-2 bg-secondary/10 rounded-full p-1 border border-border/20">
                <button 
                onClick={() => setLang('es')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'es' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
                >
                ES
                </button>
                <button 
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'en' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
                >
                EN
                </button>
            </div>
            <button className="p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
            </button>
        </div>
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
              <a href="#features" className="text-lg font-medium" onClick={() => setIsOpen(false)}>{t.nav.features}</a>
              <a href="#agents" className="text-lg font-medium" onClick={() => setIsOpen(false)}>{t.nav.agents}</a>
              <a href="#pricing" className="text-lg font-medium" onClick={() => setIsOpen(false)}>{t.nav.pricing}</a>
              <Button className="w-full bg-primary text-primary-foreground">{t.nav.cta}</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ t }: { t: any }) => {
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

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-3xl lg:max-w-none mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] mb-6 text-foreground">
                {t.hero.headline}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                {t.hero.subheadline}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-12">
                <Button size="lg" className="h-14 px-8 rounded-full text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 w-full sm:w-auto">
                  {t.hero.ctaPrimary}
                </Button>
                <a
                  href="mailto:lianet@lianet-espinosa-realty.com?subject=Quiero%20agendar%20una%20llamada"
                  className="inline-flex items-center justify-center h-14 px-8 rounded-full text-lg border border-primary/30 hover:bg-primary/5 transition-colors w-full sm:w-auto gap-3 font-medium"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  {t.hero.ctaSecondary}
                </a>
              </div>

              <div className="flex flex-wrap items-center lg:justify-start justify-center gap-8 text-sm text-muted-foreground/80">
                {t.hero.trust.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" /> {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="flex-1 w-full max-w-xl lg:max-w-none relative">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="relative z-10"
            >
               <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/20">
                 <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
                 <img 
                    src={heroCityImg} 
                    alt="Futuristic Real Estate Vision" 
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                 />
                 
                 {/* Floating Glass Card Overlay */}
                 <div className="absolute bottom-6 left-6 right-6 z-20 glass-card p-4 rounded-xl flex items-center gap-4 animate-in slide-in-from-bottom-4 fade-in duration-1000">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <Zap className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Beta disponible</div>
                        <div className="text-xl font-bold font-heading">5 cupos</div>
                    </div>
                 </div>
               </div>

               {/* Decorative Elements */}
               <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/30 rounded-full blur-2xl -z-10" />
               <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/30 rounded-full blur-2xl -z-10" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const ProblemSection = ({ t }: { t: any }) => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{t.problem.headline}</h2>
          <p className="text-muted-foreground">{t.problem.subheadline}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.problem.cards.map((item: any, i: number) => (
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

const Features = ({ t }: { t: any }) => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">{t.features.label}</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4">{t.features.headline}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.features.subheadline}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.list.map((feature: any, i: number) => (
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

const HowItWorks = ({ t }: { t: any }) => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">{t.howItWorks.label}</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4">{t.howItWorks.headline}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t.howItWorks.subheadline}</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {t.howItWorks.steps.map((step: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-heading font-bold text-lg">{step.number}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AgentsShowcase = ({ t }: { t: any }) => {
  return (
    <section id="agents" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">{t.agents.headline}</h2>
          <p className="text-muted-foreground">{t.agents.subheadline}</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-8">
              {t.agents.list.map((agent: any, i: number) => (
                <CarouselItem key={i} className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <Card className="overflow-hidden border-border/40 hover:shadow-xl transition-all duration-300 h-full group bg-white/40 hover:bg-white/60">
                      <div className="aspect-[4/3] overflow-hidden relative">
                         <div className="absolute top-4 right-4 z-10">
                            <span className={`
                              text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm
                              ${agent.plan === 'Starter' ? 'bg-zinc-200 text-zinc-700' : ''}
                              ${agent.plan === 'Pro' ? 'bg-primary/20 text-primary-foreground border border-primary/30' : ''}
                              ${agent.plan === 'Team' ? 'bg-zinc-900 text-zinc-100' : ''}
                            `}>
                              {agent.plan}
                            </span>
                         </div>
                         <img 
                            src={agent.image} 
                            alt={agent.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                      </div>
                      
                      <div className="p-6 flex flex-col h-full relative">
                        <div className="-mt-12 mb-4 relative z-10">
                           <div className="w-16 h-16 rounded-full border-4 border-white bg-white shadow-lg overflow-hidden p-1">
                              <img src={agent.image} alt="avatar" className="w-full h-full rounded-full object-cover" />
                           </div>
                        </div>

                        <div className="mb-4">
                          <h3 className="text-xl font-bold font-heading mb-1">{agent.name}</h3>
                          <p className="text-primary font-medium text-xs uppercase tracking-wide">{agent.role}</p>
                        </div>
                        
                        <p className="text-foreground font-semibold mb-2 italic">"{agent.outcome}"</p>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                           {agent.copy}
                        </p>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
               <CarouselPrevious className="static translate-y-0 mr-2" />
               <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

const LianetSection = ({ lang }: { lang: Language }) => {
  const isES = lang === 'es';
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border-4 border-white/60">
                <img
                  src="/lianet-hero.jpg"
                  alt="Lianet Espinosa — Realtor en Florida"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Realtor badge */}
              <div className="mt-4 text-center">
                <a
                  href="https://www.lianet-espinosa-realty.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  <Globe className="w-4 h-4" />
                  lianet-espinosa-realty.com
                </a>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                {isES ? 'La Persona Detrás del Sistema' : 'The Person Behind the System'}
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-6">
                {isES
                  ? <>Soy Lianet Espinosa — <br /><span className="text-primary italic">Realtor en Florida.</span></>
                  : <>I'm Lianet Espinosa — <br /><span className="text-primary italic">Realtor in Florida.</span></>
                }
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                <p>
                  {isES
                    ? 'Aprendí a construir sistemas de IA con especialistas del sector y lo implementé primero en mi propio negocio como Realtor. Vi cómo Ana calificaba leads a las 2am, hacía seguimiento automático y agendaba citas mientras yo dormía.'
                    : 'I learned to build AI systems with industry specialists and implemented it first in my own real estate business. I saw how Ana qualified leads at 2am, followed up automatically, and booked appointments while I slept.'
                  }
                </p>
                <p className="font-semibold text-foreground">
                  {isES
                    ? 'Si funciona para mí, funciona para ti. Y yo me aseguro de que funcione.'
                    : 'If it works for me, it works for you. And I make sure it works.'
                  }
                </p>
                <p>
                  {isES
                    ? 'Eso es lo que ninguna empresa de tecnología puede copiar: yo sé lo que es perder un lead a las 11pm porque nadie respondió. Por eso construyo esto con la perspectiva de un Realtor, no de un ingeniero de software.'
                    : "That's what no tech company can copy: I know what it feels like to lose a lead at 11pm because nobody responded. That's why I build this from a Realtor's perspective, not a software engineer's."
                  }
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = ({ t }: { t: any }) => {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">{t.pricing.headline}</h2>
        </div>
        <div className="flex justify-center mb-12">
          <span className="inline-block bg-primary/10 text-primary border border-primary/20 text-sm font-semibold px-5 py-2 rounded-full">
            {t.pricing.subheadline}
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.pricing.plans.map((plan: any, i: number) => (
            <div key={i} className={`relative ${plan.popular ? 'md:-mt-8' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 -translate-y-1/2 flex justify-center z-10">
                  <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                    {plan.popular}
                  </span>
                </div>
              )}
              <Card className={`h-full flex flex-col ${
                plan.popular
                  ? 'border-primary shadow-2xl shadow-primary/10 bg-white/80'
                  : 'border-border/50 bg-white/40'
              }`}>
                <CardContent className="p-8 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-4">{plan.tagline}</p>

                  {/* Dual pricing: setup + monthly */}
                  <div className="mb-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-heading font-bold">${plan.setup}</span>
                      <span className="text-sm text-muted-foreground">{t.pricing.setupLabel}</span>
                    </div>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-lg font-semibold text-muted-foreground">+ ${plan.monthly}</span>
                      <span className="text-sm text-muted-foreground">{t.pricing.monthlyLabel}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-8 pb-8 border-b border-border/50">
                    {plan.description}
                  </p>

                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-secondary/20 text-foreground hover:bg-secondary/30'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Full prices note */}
        <p className="text-center text-xs text-muted-foreground mt-10 max-w-xl mx-auto">
          {t.pricing.fullPricesNote}
        </p>
      </div>
    </section>
  );
};

const FAQ = ({ t }: { t: any }) => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">{t.faq.headline}</h2>
        <Accordion type="single" collapsible className="w-full">
          {t.faq.list.map((faq: any, i: number) => (
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

const CTA = ({ t }: { t: any }) => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          {t.cta.headline}
        </h2>
        
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 mb-6" onSubmit={(e) => e.preventDefault()}>
          <Input 
            type="email" 
            placeholder={t.cta.placeholder}
            className="h-12 bg-background border-border/60 focus:border-primary/50"
          />
          <Button size="lg" className="h-12 bg-primary text-primary-foreground hover:bg-primary/90 px-8">
            {t.cta.button}
          </Button>
        </form>
        <p className="text-xs text-muted-foreground">
          {t.cta.disclaimer}
        </p>
      </div>
    </section>
  );
};

const Footer = ({ t }: { t: any }) => {
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
              {t.footer.description}
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
            <h4 className="font-bold mb-4">{t.footer.products}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-primary">{t.footer.links.features}</a></li>
              <li><a href="#pricing" className="hover:text-primary">{t.footer.links.pricing}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">{t.footer.links.privacy}</a></li>
              <li><a href="#" className="hover:text-primary">{t.footer.links.terms}</a></li>
              <li><a href="#" className="hover:text-primary">{t.footer.links.cookies}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; 2025 Real Estate Success AI. {t.footer.rights}</p>
          <p>{t.footer.contact}</p>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  const [lang, setLang] = useState<Language>('es');
  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <ProblemSection t={t} />
        <Features t={t} />
        <HowItWorks t={t} />
        <AgentsShowcase t={t} />
        <LianetSection lang={lang} />
        <Pricing t={t} />
        <FAQ t={t} />
        <CTA t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
