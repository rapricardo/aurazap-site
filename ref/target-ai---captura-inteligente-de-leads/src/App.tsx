import { 
  CheckCircle2, 
  MessageSquare, 
  Search, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  ChevronDown,
  Menu,
  X,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-target-bg/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-target-green rounded-lg flex items-center justify-center">
            <Zap className="text-slate-950 w-6 h-6" fill="currentColor" />
          </div>
          <span className="text-2xl font-display font-bold text-white tracking-tighter">
            TARGET <span className="text-target-green">AI</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button className="btn-ghost">Login</button>
          <button className="btn-primary !py-2 !px-6 text-sm">Começar Teste Grátis</button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-target-bg border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            <button className="btn-ghost w-full">Login</button>
            <button className="btn-primary w-full">Começar Teste Grátis</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-target-green/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[100px] rounded-full translate-y-1/4 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-target-green/10 border border-target-green/20 text-target-green text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-target-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-target-green"></span>
            </span>
            Monitoramento 24/7 Ativo
          </div>
          <h1 className="text-5xl md:text-7xl mb-6 leading-[1.1]">
            Sua IA de vendas que monitora grupos de <span className="text-target-green">WhatsApp 24/7.</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 leading-relaxed">
            Pare de perder horas lendo conversas. O Target AI identifica intenções de compra em tempo real e aborda o lead no direct para você. Simples, automático e sem custo por clique.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
            <button className="btn-primary w-full sm:w-auto text-lg">
              ATIVAR MEUS 7 DIAS GRÁTIS
            </button>
          </div>
          <p className="text-sm text-slate-500 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-target-green" /> Sem cartão de crédito. Configuração em 2 minutos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Dashboard Mockup */}
          <div className="glass rounded-2xl p-4 shadow-2xl relative z-10">
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-xs text-slate-500 font-mono">dashboard.targetai.com</div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-16 bg-white/5 rounded-lg animate-pulse" />
                ))}
              </div>
              <div className="h-40 bg-white/5 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-target-green/20 w-12 h-12" />
              </div>
            </div>
          </div>

          {/* Chat Mockup Overlay */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -bottom-10 -right-4 md:-right-10 w-64 md:w-80 glass rounded-2xl p-4 shadow-2xl z-20 border-target-green/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-bold text-slate-950">AI</div>
              <div>
                <div className="text-xs font-bold text-white">Target AI Bot</div>
                <div className="text-[10px] text-target-green">Digitando...</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white/10 rounded-lg p-2 text-[11px] text-slate-300 max-w-[80%]">
                Olá! Vi que você está procurando por "gestão de tráfego" no grupo Networking SP.
              </div>
              <div className="bg-target-green/20 rounded-lg p-2 text-[11px] text-white ml-auto max-w-[80%] border border-target-green/30">
                Podemos te ajudar com isso agora mesmo. Gostaria de ver nosso portfólio?
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Problem = () => {
  const problems = [
    {
      title: "Oportunidades perdidas",
      desc: "Você não viu a mensagem a tempo e o lead já fechou com outro.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Poluição visual",
      desc: "Notificações infinitas que roubam seu foco e produtividade.",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: "Concorrência rápida",
      desc: "Sua concorrência chega antes de você em grupos de networking.",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4">
            Grupos de WhatsApp são minas de ouro,<br />
            <span className="text-target-green">mas ninguém tem tempo de minerar.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl border-white/5 hover:border-target-green/20 transition-all"
            >
              <div className="w-12 h-12 bg-target-green/10 rounded-xl flex items-center justify-center text-target-green mb-6">
                {p.icon}
              </div>
              <h3 className="text-xl mb-4">{p.title}</h3>
              <p className="text-slate-400">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Conecte e Mapeie",
      desc: "Escaneie o QR Code e selecione os grupos de networking ou comunidades que deseja monitorar.",
      icon: "01"
    },
    {
      title: "Defina os Alvos",
      desc: "Escolha as palavras-chave que indicam intenção (ex: \"indicação\", \"preciso de\", \"ajuda com\").",
      icon: "02"
    },
    {
      title: "Abordagem Automática",
      desc: "Assim que a palavra surge, a IA envia uma mensagem personalizada no privado do lead.",
      icon: "03"
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl mb-4">Do setup à primeira venda em 3 passos simples.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-target-green/20 to-transparent -translate-y-1/2 z-0" />
          
          {steps.map((s, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-target-bg border-2 border-target-green rounded-full flex items-center justify-center text-2xl font-display font-bold text-target-green mb-8 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                {s.icon}
              </div>
              <h3 className="text-2xl mb-4">{s.title}</h3>
              <p className="text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Differentials = () => {
  const diffs = [
    {
      title: "Leads Qualificados",
      desc: "Você só fala com quem manifestou interesse explícito no que você oferece.",
      icon: <CheckCircle2 />
    },
    {
      title: "Custo Zero de Tráfego",
      desc: "Aproveite a audiência orgânica dos grupos que você já participa sem gastar com anúncios.",
      icon: <TrendingUp />
    },
    {
      title: "Velocidade de Resposta",
      desc: "A IA aborda em milissegundos. No WhatsApp, quem responde primeiro, ganha a venda.",
      icon: <Zap />
    },
    {
      title: "Privacidade e Segurança",
      desc: "Conexão estável que simula o comportamento humano para proteger seu número.",
      icon: <ShieldCheck />
    }
  ];

  return (
    <section className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl mb-8 leading-tight">
              Diferenciais técnicos feitos para o <span className="text-target-green">Empresário Moderno.</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {diffs.map((d, i) => (
                <div key={i}>
                  <div className="text-target-green mb-4">{d.icon}</div>
                  <h4 className="text-lg mb-2 text-white">{d.title}</h4>
                  <p className="text-sm text-slate-400">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-target-green/20 to-transparent p-1">
              <div className="w-full h-full bg-target-bg rounded-[22px] flex items-center justify-center overflow-hidden relative">
                <Search className="w-32 h-32 text-target-green/10 absolute" />
                <div className="relative z-10 text-center p-8">
                  <div className="text-4xl font-display font-bold text-white mb-4">98%</div>
                  <div className="text-slate-400">Taxa de abertura em abordagens via Direct</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "Preciso pagar para testar?",
      a: "Não. Você tem acesso total por 7 dias para validar a ferramenta e ver os primeiros leads chegando sem compromisso."
    },
    {
      q: "Funciona com WhatsApp Business?",
      a: "Sim, perfeitamente compatível com contas pessoais e Business. A integração é via QR Code padrão."
    },
    {
      q: "Quantas palavras-chave posso cadastrar?",
      a: "Quantas forem necessárias para o seu negócio. Você pode monitorar desde termos genéricos até nichos específicos."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4">7 dias para você sentir o poder da automação.</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden">
              <button 
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-medium text-lg">{f.q}</span>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-target-green/5 blur-[100px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl mb-8">
          Chega de ser escravo das notificações.<br />
          <span className="text-target-green">Deixe o Target AI trabalhar.</span>
        </h2>
        <button className="btn-primary mb-16 group">
          EXPERIMENTAR TARGET AI AGORA
          <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-6">
          <div className="flex items-center gap-2">
            <Zap className="text-target-green w-5 h-5" fill="currentColor" />
            <span className="font-display font-bold text-white">TARGET AI</span>
          </div>
          <p className="text-slate-500 text-sm">
            © 2026 Target AI - Captura inteligente de leads. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-target-green transition-colors">Privacidade</a>
            <a href="#" className="hover:text-target-green transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-target-green/30 selection:text-target-green">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Differentials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
