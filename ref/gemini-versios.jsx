import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Target, 
  TrendingDown, 
  ShieldCheck, 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  BarChart3, 
  Users,
  Smartphone,
  MousePointer2,
  Lock,
  ChevronRight,
  Menu,
  X,
  Shield
} from 'lucide-react';

const TargetAILandingPages = () => {
  const [activeVersion, setActiveVersion] = useState('eficiencia'); // 'eficiencia', 'roi', 'exclusividade'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to top when switching versions
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeVersion]);

  // Common Components
  const Navbar = () => (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#00a67e] rounded-lg flex items-center justify-center">
              <Target className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">TARGET <span className="text-[#00a67e]">AI</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#como-funciona" className="text-slate-400 hover:text-white transition-colors">Como Funciona</a>
            <a href="#seguranca" className="text-slate-400 hover:text-white transition-colors">Segurança</a>
            <button className="text-white hover:text-[#00a67e] transition-colors font-medium">Entrar</button>
            <button className="bg-[#00a67e] hover:bg-[#008f6d] text-white px-6 py-2.5 rounded-lg font-bold transition-all shadow-lg shadow-[#00a67e]/20">
              Teste Grátis 7 Dias
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4 space-y-4">
          <a href="#como-funciona" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300">Como Funciona</a>
          <a href="#seguranca" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300">Segurança</a>
          <button className="block w-full text-left text-[#00a67e] font-bold py-2">Entrar</button>
          <button className="block w-full bg-[#00a67e] text-white py-3 rounded-lg font-bold text-center">
            Teste Grátis 7 Dias
          </button>
        </div>
      )}
    </nav>
  );

  const SecuritySection = () => (
    <section id="seguranca" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-slate-900/50 p-8 md:p-16 rounded-3xl border border-slate-800">
          <div className="flex-1">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck className="text-[#00a67e] w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-white">Sua conta segura e protegida</h2>
            <p className="text-slate-400 text-lg mb-8">
              Utilizamos tecnologia de ponta que simula o comportamento humano para garantir que sua conta de WhatsApp Business opere dentro de todos os limites de segurança.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Lock className="text-[#00a67e] w-5 h-5 mt-1" />
                <span className="text-slate-300 font-medium">Criptografia de ponta a ponta</span>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="text-[#00a67e] w-5 h-5 mt-1" />
                <span className="text-slate-300 font-medium">Algoritmo anti-banimento</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
             <div className="relative">
                <div className="absolute -inset-4 bg-[#00a67e]/10 blur-2xl rounded-full"></div>
                <div className="relative border border-slate-700 bg-slate-950 p-6 rounded-2xl shadow-2xl flex items-center gap-4">
                   <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                      <ShieldCheck className="text-white" />
                   </div>
                   <div>
                      <div className="text-white font-bold">Monitoramento Seguro</div>
                      <div className="text-slate-500 text-sm">Status: Protegido por Target AI</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-slate-950 border-t border-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-[#00a67e] rounded flex items-center justify-center">
              <Target className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-white">TARGET <span className="text-[#00a67e]">AI</span></span>
          </div>
          <p className="text-slate-400 max-w-sm mb-8">
            Transformando grupos de WhatsApp em máquinas de vendas automatizadas com inteligência artificial de ponta.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer">
              <Smartphone size={20} />
            </div>
            <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer">
              <MessageSquare size={20} />
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Produto</h4>
          <ul className="space-y-4 text-slate-400">
            <li><a href="#" className="hover:text-[#00a67e] transition-colors">Recursos</a></li>
            <li><a href="#" className="hover:text-[#00a67e] transition-colors">Preços</a></li>
            <li><a href="#" className="hover:text-[#00a67e] transition-colors">Integrações</a></li>
            <li><a href="#seguranca" className="hover:text-[#00a67e] transition-colors">Segurança</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Suporte</h4>
          <ul className="space-y-4 text-slate-400">
            <li><a href="#" className="hover:text-[#00a67e] transition-colors">Central de Ajuda</a></li>
            <li><a href="#" className="hover:text-[#00a67e] transition-colors">Documentação API</a></li>
            <li><a href="#" className="hover:text-[#00a67e] transition-colors">Contato</a></li>
            <li><a href="#" className="hover:text-[#00a67e] transition-colors">Privacidade</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-900 text-center text-slate-500 text-sm">
        © 2026 Target AI · Captura inteligente de leads via WhatsApp. Todos os direitos reservados.
      </div>
    </footer>
  );

  const VersionSelector = () => (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] bg-slate-900/90 backdrop-blur-xl p-1.5 rounded-full border border-slate-700 shadow-2xl flex items-center gap-1 overflow-hidden">
      <button 
        onClick={() => setActiveVersion('eficiencia')}
        className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${activeVersion === 'eficiencia' ? 'bg-[#00a67e] text-white' : 'text-slate-400 hover:bg-slate-800'}`}
      >
        A: Eficiência
      </button>
      <button 
        onClick={() => setActiveVersion('roi')}
        className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${activeVersion === 'roi' ? 'bg-[#00a67e] text-white' : 'text-slate-400 hover:bg-slate-800'}`}
      >
        B: ROI/Financeiro
      </button>
      <button 
        onClick={() => setActiveVersion('exclusividade')}
        className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${activeVersion === 'exclusividade' ? 'bg-[#00a67e] text-white' : 'text-slate-400 hover:bg-slate-800'}`}
      >
        C: Exclusividade
      </button>
    </div>
  );

  // Page 1: Eficiência e Tempo
  const VersionEficiencia = () => (
    <div className="bg-slate-950 text-white min-h-screen pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:py-32 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a67e]/10 border border-[#00a67e]/20 text-[#00a67e] text-sm font-bold mb-6">
              <Zap size={16} /> Automação Inteligente 24/7
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Sua IA de vendas que monitora grupos de WhatsApp <span className="text-[#00a67e]">24/7.</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0">
              Pare de perder horas lendo conversas. O Target AI identifica intenções de compra em tempo real e aborda o lead no direct para você.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto bg-[#00a67e] hover:bg-[#008f6d] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                ATIVAR MEUS 7 DIAS GRÁTIS <ArrowRight size={20} />
              </button>
              <div className="flex flex-col items-center lg:items-start text-xs text-slate-500 font-medium">
                <span>✓ Sem cartão de crédito</span>
                <span>✓ Setup em 2 minutos</span>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-[#00a67e]/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-slate-900 border border-slate-800 p-2 rounded-2xl shadow-2xl">
              <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800">
                {/* Mock UI Header */}
                <div className="h-12 bg-slate-900 flex items-center px-4 justify-between border-b border-slate-800">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">Target AI Engine</div>
                  <div className="w-4 h-4 rounded-full bg-slate-800"></div>
                </div>
                {/* Mock Chat Feed */}
                <div className="p-6 space-y-4 max-h-[400px] overflow-hidden">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex-shrink-0"></div>
                    <div className="bg-slate-900 p-3 rounded-2xl rounded-tl-none text-sm text-slate-300">
                      "Alguém aqui indica um escritório de contabilidade confiável?"
                    </div>
                  </div>
                  <div className="flex gap-3 justify-end items-center">
                    <div className="text-[10px] text-[#00a67e] font-bold uppercase animate-pulse">Capturando Lead...</div>
                    <div className="w-2 h-2 rounded-full bg-[#00a67e]"></div>
                  </div>
                  <div className="flex gap-3 justify-end">
                    <div className="bg-[#00a67e]/20 border border-[#00a67e]/30 p-3 rounded-2xl rounded-tr-none text-sm text-white">
                      <span className="font-bold block mb-1">🤖 Target AI enviou:</span>
                      "Olá! Vi que você busca contabilidade. Sou da X-Contábil e..."
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#00a67e] flex-shrink-0 flex items-center justify-center"><Target size={14} /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Grupos de WhatsApp são minas de ouro,<br /><span className="text-[#00a67e]">mas ninguém tem tempo de minerar.</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Você gasta energia com notificações irrelevantes enquanto os clientes reais passam despercebidos.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Clock className="text-red-500" />, title: "Oportunidades Perdidas", desc: "Leads que esfriam porque você demorou horas para ver a mensagem no meio do caos." },
            { icon: <Smartphone className="text-orange-500" />, title: "Exaustão Digital", desc: "Ler centenas de mensagens inúteis por dia só para tentar encontrar um cliente." },
            { icon: <TrendingDown className="text-yellow-500" />, title: "Timing Errado", desc: "Chegar no lead quando a concorrência já fechou ou o cliente já perdeu o interesse." }
          ].map((item, i) => (
            <div key={i} className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-[#00a67e]/40 transition-colors">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section id="como-funciona" className="py-24 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold">Configuração em 3 passos</h2>
        </div>
        <div className="space-y-16">
          {[
            { step: "01", title: "Conecte e Mapeie", desc: "Escaneie o QR Code e selecione os grupos que deseja monitorar." },
            { step: "02", title: "Defina os Alvos", desc: "Escolha palavras-chave estratégicas como 'indicação', 'preciso de' ou 'ajuda'." },
            { step: "03", title: "Abordagem Automática", desc: "A IA entra em ação no privado do lead iniciando o funil de vendas." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center gap-8 group">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-2xl font-black text-[#00a67e] group-hover:bg-[#00a67e] group-hover:text-white transition-all">
                {item.step}
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-lg">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SecuritySection />

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#00a67e] to-[#008f6d] rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-[#00a67e]/30">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Target size={200} />
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-8">Experimente 7 dias grátis</h2>
          <p className="text-xl mb-12 text-white/90">A única ferramenta que coloca o lead no seu funil enquanto você dorme.</p>
          <button className="bg-slate-950 text-white px-10 py-5 rounded-xl font-black text-xl hover:scale-105 transition-transform shadow-2xl">
            EXPERIMENTAR TARGET AI AGORA
          </button>
        </div>
      </section>
    </div>
  );

  // Page 2: ROI e Custo por Lead
  const VersionROI = () => (
    <div className="bg-slate-950 text-white min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-bold mb-6">
              <TrendingDown size={16} /> Reduza seu CAC em até 90%
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
              O Lead mais qualificado está nos seus grupos. <span className="text-[#00a67e]">Chega de pagar caro em anúncios.</span>
            </h1>
            <p className="text-lg text-slate-400 mb-10">
              Pare de queimar orçamento no Facebook Ads com público frio. Capture pessoas que estão pedindo sua solução agora mesmo em grupos de WhatsApp.
            </p>
            <button className="w-full sm:w-auto bg-[#00a67e] hover:bg-[#008f6d] text-white px-10 py-5 rounded-xl font-black text-xl transition-all shadow-xl shadow-[#00a67e]/30">
              REDUZIR MEU CUSTO POR LEAD AGORA
            </button>
          </div>
          <div className="relative flex justify-center">
            <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10"><BarChart3 size={100} /></div>
              <h3 className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-6">Comparativo de Mercado</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-400"><span>Facebook / Google Ads</span><span>R$ 15,00 / lead</span></div>
                  <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-red-500/50"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-400 font-bold"><span>Target AI</span><span>R$ 0,00 / lead</span></div>
                  <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-2 h-full bg-[#00a67e]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparisons Section */}
      <section className="py-24 bg-slate-900/40 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="pb-6 text-slate-500 uppercase text-xs tracking-widest">Canal de Vendas</th>
                <th className="pb-6 text-slate-500 uppercase text-xs tracking-widest">Custo por Clique</th>
                <th className="pb-6 text-slate-500 uppercase text-xs tracking-widest">Qualidade do Lead</th>
                <th className="pb-6 text-slate-500 uppercase text-xs tracking-widest">Eficiência</th>
              </tr>
            </thead>
            <tbody className="text-lg">
              <tr className="border-b border-slate-900">
                <td className="py-8 font-bold text-slate-400">Plataformas de Anúncios</td>
                <td className="py-8 text-red-400">R$ 2,00 - R$ 15,00</td>
                <td className="py-8 text-slate-400">Passiva (Navegando)</td>
                <td className="py-8 text-slate-500">Médio</td>
              </tr>
              <tr className="bg-[#00a67e]/5 border-b border-[#00a67e]/10">
                <td className="py-10 font-black text-white flex items-center gap-2">
                  Target AI <Zap size={18} className="text-[#00a67e]" />
                </td>
                <td className="py-10 text-[#00a67e] font-bold">R$ 0,00</td>
                <td className="py-10 text-white font-bold italic">Ativa (Pedindo ajuda)</td>
                <td className="py-10 text-[#00a67e] font-black tracking-tighter">MÁXIMA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="como-funciona" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold leading-tight">Transforme "ruído" em faturamento recorrente.</h2>
            <div className="space-y-6">
              {[
                { title: "Escalabilidade Sem Anúncios", desc: "Adicione mais grupos e aumente seu alcance sem precisar investir mais um centavo em Ads." },
                { title: "ROI Positivo no Primeiro Lead", desc: "Uma única venda fechada nos 7 dias de teste já paga a ferramenta por meses." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 className="text-[#00a67e]" size={20} /></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900 p-8 rounded-2xl text-center border border-slate-800">
              <div className="text-3xl font-black text-[#00a67e] mb-2">90%</div>
              <div className="text-xs text-slate-500 uppercase font-bold">Menos CAC</div>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl text-center border border-slate-800 mt-8">
              <div className="text-3xl font-black text-[#00a67e] mb-2">24h</div>
              <div className="text-xs text-slate-500 uppercase font-bold">Monitoramento</div>
            </div>
          </div>
        </div>
      </section>

      <SecuritySection />

      {/* Final CTA */}
      <section className="py-24 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6">Pare de deixar dinheiro na mesa.</h2>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">Comece hoje mesmo a transformar seus grupos de networking em máquinas de venda automáticas.</p>
        <button className="bg-[#00a67e] hover:bg-[#008f6d] text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all hover:scale-105">
          ATIVAR MINHA IA DE VENDAS AGORA
        </button>
      </section>
    </div>
  );

  // Page 3: Exclusividade e Velocidade
  const VersionExclusividade = () => (
    <div className="bg-slate-950 text-white min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-40 px-4 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00a67e]/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm font-bold mb-8">
            <Lock size={14} className="text-[#00a67e]" /> Acesso antecipado para empresas selecionadas
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter">
            No WhatsApp, quem responde <span className="text-[#00a67e]">primeiro</span> fecha a venda.
          </h1>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Enquanto seus concorrentes nem leram a mensagem, o Target AI já abordou o cliente. Domine seus grupos com velocidade absoluta.
          </p>
          <div className="flex flex-col items-center gap-4">
            <button className="bg-[#00a67e] hover:bg-[#008f6d] text-white px-12 py-5 rounded-2xl font-black text-xl transition-all hover:shadow-[0_0_50px_rgba(0,166,126,0.4)]">
              GARANTIR MINHA VANTAGEM AGORA
            </button>
          </div>
        </div>
      </section>

      {/* Timing Concept */}
      <section id="como-funciona" className="py-24 px-4 bg-slate-900/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="w-full h-80 bg-slate-950 border border-slate-800 rounded-3xl p-8 flex flex-col justify-center gap-8">
                <div className="flex items-center gap-4 opacity-40">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">1</div>
                  <div className="text-lg">Cliente pede indicação no grupo...</div>
                </div>
                <div className="flex items-center gap-4 relative">
                  <div className="absolute -left-2 top-0 bottom-0 w-1 bg-[#00a67e] rounded-full blur-sm"></div>
                  <div className="w-12 h-12 bg-[#00a67e] rounded-lg flex items-center justify-center font-bold">2</div>
                  <div className="text-xl font-bold">Target AI aborda em 0.4s <Zap size={16} className="text-yellow-400 inline" /></div>
                </div>
             </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-8">A janela de oportunidade de um lead é de apenas 5 minutos.</h2>
            <p className="text-slate-400 text-lg mb-8">
              Quando alguém pede uma indicação, os primeiros a responderem levam 90% da atenção do cliente. O Target AI reduz seu tempo de resposta de "horas" para "milissegundos".
            </p>
          </div>
        </div>
      </section>

      <SecuritySection />

      {/* Exclusive CTA */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 italic">Não deixe seu mercado aberto para a concorrência.</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-slate-950 px-10 py-5 rounded-xl font-black text-xl hover:bg-[#00a67e] hover:text-white transition-all">
              QUERO SER O PRIMEIRO
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="antialiased selection:bg-[#00a67e] selection:text-white scroll-smooth">
      <Navbar />
      <VersionSelector />
      
      {activeVersion === 'eficiencia' && <VersionEficiencia />}
      {activeVersion === 'roi' && <VersionROI />}
      {activeVersion === 'exclusividade' && <VersionExclusividade />}
      
      <Footer />
    </div>
  );
};

export default TargetAILandingPages;