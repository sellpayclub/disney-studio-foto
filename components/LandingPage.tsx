import React from 'react';

interface LandingPageProps {
  onGoToApp: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGoToApp }) => {
  const scrollToPlans = () => {
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  const galleryImages = [
    "https://i.postimg.cc/gk3HYgQ1/10.png",
    "https://i.postimg.cc/1RkKhkCB/5.png",
    "https://i.postimg.cc/ZK6xTw2j/6.png",
    "https://i.postimg.cc/GhvxcXVj/7.png",
    "https://i.postimg.cc/5N8SxsTk/8.png",
    "https://i.postimg.cc/15Dr9v27/9.png"
  ];

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-[#FFFBEB] overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <header className="relative pt-12 pb-16 px-5 text-center bg-white rounded-b-[2.5rem] shadow-xl border-b-4 border-fun-purple/10">
        {/* Background Elements */}
        <div className="absolute top-4 left-2 text-5xl opacity-10 animate-bounce-slow pointer-events-none">🎈</div>
        <div className="absolute top-10 right-4 text-4xl opacity-10 animate-pulse pointer-events-none">✨</div>
        
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-fun-purple/5 border border-fun-purple/20 px-4 py-1.5 rounded-full mb-6 shadow-sm">
            <span className="text-xs font-bold text-fun-purple tracking-widest uppercase">✨ Estúdio Mágico</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-fun-purple mb-4 leading-[1.1] tracking-tight">
            Transforme seu filho em <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fun-pink to-purple-600">
              estrela de cinema!
            </span>
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto leading-relaxed font-medium px-2">
            Escolha a fantasia, envie a foto e veja a magia acontecer em segundos.
          </p>
          
          <button 
            onClick={scrollToPlans}
            className="w-full sm:w-auto group relative px-8 py-5 bg-gradient-to-r from-fun-green to-emerald-600 text-white rounded-2xl text-xl font-black shadow-[0_6px_0_rgb(21,128,61)] active:shadow-none active:translate-y-[6px] transition-all animate-pulse"
          >
            QUERO VER OS PLANOS 🪄
          </button>
          
          <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
            <span className="flex items-center gap-1">⚡ Rápido</span> • 
            <span className="flex items-center gap-1">📱 Sem App</span> • 
            <span className="flex items-center gap-1">🔒 Seguro</span>
          </div>
        </div>
      </header>

      {/* --- GALERIA SWIPE (MOBILE FIRST) --- */}
      <section className="py-12 pb-4 overflow-hidden">
        <div className="text-center mb-6 px-4">
          <h2 className="text-2xl font-black text-fun-purple flex items-center justify-center gap-2">
            📸 Galeria da Fama <span className="text-sm bg-fun-pink text-white px-2 py-1 rounded-lg rotate-3">Uau!</span>
          </h2>
        </div>

        {/* Scroll Horizontal Container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-8 -mx-0 hide-scrollbar md:grid md:grid-cols-3 md:max-w-5xl md:mx-auto md:overflow-visible">
          {galleryImages.map((src, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[75vw] sm:w-[300px] snap-center rounded-3xl overflow-hidden shadow-lg border-4 border-white aspect-[4/5] relative"
            >
              <img 
                src={src} 
                alt={`Resultado ${index + 1}`} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                 <span className="text-white text-sm font-bold flex items-center gap-1">
                   ✨ Resultado Real
                 </span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-400 font-medium animate-bounce md:hidden">
          👈 Deslize para ver mais 👉
        </p>
      </section>

      {/* --- COMO FUNCIONA (COMPACTO) --- */}
      <section className="py-10 px-4 bg-white/50">
        <div className="max-w-md mx-auto md:max-w-4xl">
          <h2 className="text-3xl font-black text-center text-slate-800 mb-8">
            Como funciona?
          </h2>
          
          <div className="space-y-4 md:grid md:grid-cols-3 md:space-y-0 md:gap-6">
            {[
              { icon: '📸', title: '1. Envie a foto', desc: 'Do rosto da criança.', color: 'bg-blue-100 text-blue-700' },
              { icon: '🎭', title: '2. Escolha o Herói', desc: 'Princesas ou Heróis.', color: 'bg-pink-100 text-pink-700' },
              { icon: '✨', title: '3. Pronto!', desc: 'Baixe e compartilhe.', color: 'bg-yellow-100 text-yellow-700' }
            ].map((step, idx) => (
              <div key={idx} className="flex items-center md:flex-col md:text-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-inner ${step.color} flex-shrink-0`}>
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-800 leading-tight">{step.title}</h3>
                  <p className="text-sm text-slate-500 font-medium">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING (STACKED FOR MOBILE) --- */}
      <section id="plans" className="py-12 px-4 bg-gradient-to-b from-transparent to-fun-purple/5">
        <div className="max-w-md mx-auto md:max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-slate-800 mb-2">
              Pacotes Mágicos
            </h2>
            <p className="text-slate-600">Promoção por tempo limitado! 🕒</p>
          </div>

          <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
            
            {/* Plan: ILIMITADO (Primeiro no Mobile para conversão) */}
            <div className="order-1 bg-white p-6 rounded-[2rem] border-4 border-fun-purple shadow-2xl relative overflow-hidden transform transition-transform active:scale-[0.99]">
               <div className="absolute top-0 right-0 bg-fun-pink text-white text-xs font-bold px-4 py-2 rounded-bl-2xl uppercase tracking-wider">
                 Mais Vendido
               </div>

               <h3 className="text-2xl font-black text-fun-purple mb-1 mt-2">Plano Ilimitado</h3>
               <div className="flex items-end gap-2 mb-6">
                 <span className="text-lg text-slate-400 line-through decoration-red-400">R$ 49,90</span>
                 <span className="text-5xl font-black text-slate-800 tracking-tighter">R$ 19<small className="text-2xl">,90</small></span>
               </div>

               <a 
                href="https://pay.lowify.com.br/go.php?offer=dpcxtvg"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-gradient-to-r from-fun-purple to-purple-700 text-white rounded-xl text-center font-black text-xl shadow-lg hover:brightness-110 mb-6"
              >
                QUERO ILIMITADO! 🚀
              </a>

               <ul className="space-y-3 text-slate-700 font-bold text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">✓</span> Fotos <span className="text-fun-pink bg-pink-100 px-1 rounded">ILIMITADAS</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">✓</span> Todos Personagens
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">✓</span> Prioridade na fila
                </li>
               </ul>
            </div>

            {/* Plan: Teste */}
            <div className="order-2 bg-white/60 p-6 rounded-[2rem] border-2 border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-600 mb-1">Plano Teste</h3>
              <div className="flex items-end gap-2 mb-4">
                 <span className="text-slate-400 line-through text-sm">R$ 19,90</span>
                 <span className="text-3xl font-black text-fun-blue">R$ 10,00</span>
              </div>

              <ul className="space-y-2 mb-6 text-slate-500 text-sm font-medium">
                <li className="flex items-center gap-2">✓ 10 fotos geradas</li>
                <li className="flex items-center gap-2">✓ Download Alta Qualidade</li>
              </ul>

              <a 
                href="https://pay.lowify.com.br/go.php?offer=3o6c9ga"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-white border-2 border-fun-blue text-fun-blue rounded-xl text-center font-bold"
              >
                Comprar Teste
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* --- PROMO VIAGEM (COMPACTO) --- */}
      <section className="py-12 px-5 bg-blue-900 text-white rounded-t-[3rem] text-center relative overflow-hidden">
        <div className="relative z-10 max-w-lg mx-auto">
           <div className="inline-block bg-yellow-400 text-blue-900 text-xs font-black px-3 py-1 rounded-full mb-4 animate-bounce">
             PROMOÇÃO 2026
           </div>
           
           <h2 className="text-3xl font-black text-yellow-300 leading-tight mb-4">
             Ganhe uma viagem para a Disney! ✈️
           </h2>
           
           <p className="text-blue-200 mb-8 text-sm leading-relaxed px-4">
             Comprando qualquer plano hoje, você concorre automaticamente a uma viagem mágica com a família.
           </p>
           
           <a 
             href="https://pay.lowify.com.br/go.php?offer=dpcxtvg"
             target="_blank"
             rel="noopener noreferrer"
             className="block w-full py-4 bg-yellow-400 text-blue-900 rounded-2xl text-xl font-black shadow-[0_4px_0_#b45309]"
           >
             PARTICIPAR AGORA
           </a>
        </div>
      </section>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;