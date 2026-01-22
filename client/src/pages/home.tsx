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
import executionImg from "@/assets/agents/execution.png";
import salesImg from "@/assets/agents/sales.png";
import followUpImg from "@/assets/agents/follow-up.png";
import strategyImg from "@/assets/agents/strategy.png";
import authorityImg from "@/assets/agents/authority.png";
import empathyImg from "@/assets/agents/empathy.png";
import clientCareImg from "@/assets/agents/client-care.png";
import safePracticeImg from "@/assets/agents/safe-practice.png";
import smartSystemsImg from "@/assets/agents/smart-systems.png";
import ethicsImg from "@/assets/agents/ethics.png";
import orchestraImg from "@/assets/agents/orchestra.png";


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
      subheadline: "Tu nuevo equipo de ventas AI 24/7. Califica leads instantáneamente, maneja objeciones y agenda citas automáticamente mientras tú te enfocas en cerrar tratos.",
      ctaPrimary: "Obtén Acceso Anticipado",
      ctaSecondary: "Ver Demo",
      trust: ["Sin tarjeta de crédito", "Configuración en 2 min", "Prueba de 14 días"]
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
    agents: {
      headline: "Conoce a tus Nuevos Top Producers",
      subheadline: "Agentes AI especializados para cada etapa de tu embudo de ventas. Desliza para conocer a tu equipo.",
      planIncluded: "Incluido en",
      list: [
        {
          name: "Execution Core GPT",
          role: "Gestión de Tareas",
          outcome: "Priorización Ruthless.",
          copy: "Elimina la parálisis por análisis. Organiza tu día para máximo ROI.",
          plan: "Starter",
          image: executionImg
        },
        {
          name: "Confident Sales GPT",
          role: "Cierre de Ventas",
          outcome: "Conversión sin miedo.",
          copy: "Maneja objeciones de precio y competencia con confianza absoluta.",
          plan: "Starter",
          image: salesImg
        },
        {
          name: "Follow-Up Master GPT",
          role: "Retención de Leads",
          outcome: "Cero leads perdidos.",
          copy: "Nutre prospectos automáticamente hasta que estén listos para firmar.",
          plan: "Starter",
          image: followUpImg
        },
        {
          name: "Market Strategist GPT",
          role: "Análisis de Datos",
          outcome: "Autoridad instantánea.",
          copy: "Interpreta tendencias de mercado para posicionarte como el experto local.",
          plan: "Pro",
          image: strategyImg
        },
        {
          name: "Visible Authority GPT",
          role: "Marca Personal",
          outcome: "Omnipresencia digital.",
          copy: "Crea contenido magnético que atrae clientes ideales sin esfuerzo.",
          plan: "Pro",
          image: authorityImg
        },
        {
          name: "Emotional Intelligence GPT",
          role: "Conexión Humana",
          outcome: "Confianza profunda.",
          copy: "Detecta matices emocionales para comunicar con empatía perfecta.",
          plan: "Pro",
          image: empathyImg
        },
        {
          name: "Client Care GPT",
          role: "Experiencia Cliente",
          outcome: "Referidos de por vida.",
          copy: "Convierte clientes pasados en tu fuente #1 de nuevos negocios.",
          plan: "Pro",
          image: clientCareImg
        },
        {
          name: "Safe Practice GPT",
          role: "Cumplimiento Legal",
          outcome: "Protección total.",
          copy: "Navega contratos y normativas sin riesgo de errores costosos.",
          plan: "Team",
          image: safePracticeImg
        },
        {
          name: "Smart Systems GPT",
          role: "Automatización",
          outcome: "Libertad de tiempo.",
          copy: "Construye flujos de trabajo que operan tu negocio en piloto automático.",
          plan: "Team",
          image: smartSystemsImg
        },
        {
          name: "Purpose & Ethics GPT",
          role: "Alineación de Valores",
          outcome: "Reputación intachable.",
          copy: "Asegura que cada interacción refleje tus más altos estándares éticos.",
          plan: "Team",
          image: ethicsImg
        },
        {
          name: "Orchestra GPT",
          role: "Director Maestro",
          outcome: "Sinergia total.",
          copy: "Coordina a todos tus agentes AI para una ejecución perfecta y unificada.",
          plan: "Team",
          image: orchestraImg
        }
      ]
    },
    pricing: {
      headline: "Invierte en tu Crecimiento",
      subheadline: "Precios simples y transparentes. Garantía de devolución de 30 días.",
      plans: [
        {
          name: "Starter",
          price: "199",
          description: "Para agentes individuales listos para escalar.",
          features: ["3 Agentes Esenciales", "500 Conversaciones/mes", "Integración CRM Básica", "Soporte por Email"],
          cta: "Comenzar"
        },
        {
          name: "Pro",
          price: "349",
          description: "Para top producers dominando su mercado.",
          features: ["7 Agentes Avanzados (Incluye Pro)", "Conversaciones Ilimitadas", "Sincronización CRM Prioritaria", "Soporte 24/7", "Entrenamiento de Scripts"],
          cta: "Comenzar",
          popular: "Más Popular"
        },
        {
          name: "Team",
          price: "Custom",
          description: "Para inmobiliarias y equipos de alto volumen.",
          features: ["Suite Completa (11 Agentes)", "Asientos Ilimitados", "Opción Marca Blanca", "Gerente de Éxito Dedicado", "Acceso API"],
          cta: "Contactar Ventas"
        }
      ],
      perMonth: "/mes"
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
      subheadline: "Únete a más de 5,000 agentes que cierran más tratos trabajando menos.",
      placeholder: "Ingresa tu correo electrónico",
      button: "Obtener Acceso",
      disclaimer: "Cupos limitados para el programa beta. Sin spam, nunca."
    },
    footer: {
      description: "Empoderando profesionales inmobiliarios con herramientas AI de próxima generación.",
      products: "Producto",
      legal: "Legal",
      links: {
        features: "Características",
        pricing: "Precios",
        cases: "Casos de Éxito",
        privacy: "Privacidad",
        terms: "Términos",
        cookies: "Cookies"
      },
      rights: "Todos los derechos reservados.",
      madeIn: "Hecho con inteligencia en San Francisco."
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
      subheadline: "Your new 24/7 AI sales team. Instantly qualify leads, handle objections, and book appointments automatically while you focus on closing deals.",
      ctaPrimary: "Get Early Access",
      ctaSecondary: "Watch Demo",
      trust: ["No credit card required", "Setup in 2 mins", "14-day free trial"]
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
    agents: {
      headline: "Meet Your New Top Producers",
      subheadline: "Specialized AI agents for every stage of your pipeline. Swipe to meet your team.",
      planIncluded: "Included in",
      list: [
        {
          name: "Execution Core GPT",
          role: "Task Management",
          outcome: "Ruthless prioritization.",
          copy: "Eliminates analysis paralysis. Organizes your day for maximum ROI.",
          plan: "Starter",
          image: executionImg
        },
        {
          name: "Confident Sales GPT",
          role: "Sales Closing",
          outcome: "Fearless conversion.",
          copy: "Handles price and competition objections with absolute confidence.",
          plan: "Starter",
          image: salesImg
        },
        {
          name: "Follow-Up Master GPT",
          role: "Lead Retention",
          outcome: "Zero lost leads.",
          copy: "Nurtures prospects automatically until they are ready to sign.",
          plan: "Starter",
          image: followUpImg
        },
        {
          name: "Market Strategist GPT",
          role: "Data Analysis",
          outcome: "Instant authority.",
          copy: "Interprets market trends to position you as the local expert.",
          plan: "Pro",
          image: strategyImg
        },
        {
          name: "Visible Authority GPT",
          role: "Personal Brand",
          outcome: "Digital ubiquity.",
          copy: "Creates magnetic content that attracts ideal clients effortlessly.",
          plan: "Pro",
          image: authorityImg
        },
        {
          name: "Emotional Intelligence GPT",
          role: "Human Connection",
          outcome: "Deep trust.",
          copy: "Detects emotional nuances to communicate with perfect empathy.",
          plan: "Pro",
          image: empathyImg
        },
        {
          name: "Client Care GPT",
          role: "Customer Experience",
          outcome: "Lifetime referrals.",
          copy: "Turns past clients into your #1 source of new business.",
          plan: "Pro",
          image: clientCareImg
        },
        {
          name: "Safe Practice GPT",
          role: "Compliance",
          outcome: "Total protection.",
          copy: "Navigates contracts and regulations without risk of costly errors.",
          plan: "Team",
          image: safePracticeImg
        },
        {
          name: "Smart Systems GPT",
          role: "Automation",
          outcome: "Time freedom.",
          copy: "Builds workflows that run your business on autopilot.",
          plan: "Team",
          image: smartSystemsImg
        },
        {
          name: "Purpose & Ethics GPT",
          role: "Value Alignment",
          outcome: "Impeccable reputation.",
          copy: "Ensures every interaction reflects your highest ethical standards.",
          plan: "Team",
          image: ethicsImg
        },
        {
          name: "Orchestra GPT",
          role: "Master Conductor",
          outcome: "Total synergy.",
          copy: "Coordinates all your AI agents for perfect, unified execution.",
          plan: "Team",
          image: orchestraImg
        }
      ]
    },
    pricing: {
      headline: "Invest in Your Growth",
      subheadline: "Simple, transparent pricing. 30-day money-back guarantee.",
      plans: [
        {
          name: "Starter",
          price: "199",
          description: "For solo agents ready to scale.",
          features: ["3 Essential Agents", "500 Conversations/mo", "Basic CRM Integration", "Email Support"],
          cta: "Get Started"
        },
        {
          name: "Pro",
          price: "349",
          description: "For top producers dominating their market.",
          features: ["7 Advanced Agents (Includes Pro)", "Unlimited Conversations", "Priority CRM Sync", "24/7 Priority Support", "Custom Script Training"],
          cta: "Get Started",
          popular: "Most Popular"
        },
        {
          name: "Team",
          price: "Custom",
          description: "For brokerages and high-volume teams.",
          features: ["Full Suite (11 Agents)", "Unlimited Seats", "White-label Options", "Dedicated Success Manager", "API Access"],
          cta: "Contact Sales"
        }
      ],
      perMonth: "/mo"
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
      subheadline: "Join 5,000+ realtors who are closing more deals while working less.",
      placeholder: "Enter your email address",
      button: "Get Access",
      disclaimer: "Limited spots available for the beta program. No spam, ever."
    },
    footer: {
      description: "Empowering real estate professionals with next-generation AI tools to close more deals in less time.",
      products: "Product",
      legal: "Legal",
      links: {
        features: "Features",
        pricing: "Pricing",
        cases: "Case Studies",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        cookies: "Cookie Policy"
      },
      rights: "All rights reserved.",
      madeIn: "Made with intelligence in San Francisco."
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary-foreground text-xs font-semibold uppercase tracking-wider mb-8">
                <Star className="w-3 h-3 fill-primary text-primary" />
                {t.hero.badge}
              </div>
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
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-lg border-primary/30 hover:bg-primary/5 w-full sm:w-auto">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-primary border-b-[5px] border-b-transparent ml-1"></div>
                  </div>
                  {t.hero.ctaSecondary}
                </Button>
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
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-600">
                        <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Monthly Growth</div>
                        <div className="text-xl font-bold font-heading">+342% ROI</div>
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

const Pricing = ({ t }: { t: any }) => {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">{t.pricing.headline}</h2>
          <p className="text-muted-foreground">{t.pricing.subheadline}</p>
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
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-heading font-bold">
                      {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
                    </span>
                    {plan.price !== "Custom" && <span className="text-muted-foreground">{t.pricing.perMonth}</span>}
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
        <p className="text-xl text-muted-foreground mb-10">
          {t.cta.subheadline}
        </p>
        
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
              <li><a href="#" className="hover:text-primary">{t.footer.links.features}</a></li>
              <li><a href="#" className="hover:text-primary">{t.footer.links.pricing}</a></li>
              <li><a href="#" className="hover:text-primary">{t.footer.links.cases}</a></li>
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
          <p>{t.footer.madeIn}</p>
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
        <AgentsShowcase t={t} />
        <Pricing t={t} />
        <FAQ t={t} />
        <CTA t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
