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
    <div className="min-h-screen font-sans text-slate-900 bg-fun-yellow/10">
      
      {/* --- HERO SECTION --- */}
      <header className="relative pt-16 pb-24 px-4 text-center overflow-hidden bg-white rounded-b-[3rem] shadow-lg border-b-8 border-fun-purple/20">
        {/* Elementos Decorativos de Fundo */}
        <div className="absolute top-10 left-5 text-7xl opacity-10 animate-bounce-slow select-none">🎈</div>
        <div className="absolute top-20 right-10 text-6xl opacity-10 animate-pulse select-none">✨</div>
        <div className="absolute bottom-10 left-1/4 text-8xl opacity-5 select-none text-fun-pink">🏰</div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block bg-fun-purple/10 backdrop-blur-sm px-6 py-2 rounded-full mb-8 border-2 border-fun-purple shadow-sm">
            <span className="text-fun-purple font-black uppercase tracking-wider text-sm">✨ Estúdio Mágico Disney</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-fun-purple mb-6 leading-tight drop-shadow-sm">
            Transforme seu pequeno em uma <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fun-pink to-purple-600">
              estrela de cinema!
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-700 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Escolha a fantasia, envie a foto e veja a magia acontecer. <br/>
            <strong>Fotos realistas com qualidade profissional!</strong>
          </p>
          
          <button 
            onClick={scrollToPlans}
            className="group relative px-12 py-6 bg-gradient-to-r from-fun-green to-emerald-600 text-white rounded-full text-2xl font-black shadow-[0_8px_0_rgb(21,128,61)] hover:shadow-[0_4px_0_rgb(21,128,61)] hover:translate-y-[4px] transition-all transform hover:scale-105 active:shadow-none active:translate-y-[8px]"
          >
            QUERO VER OS PLANOS 🪄
          </button>
          
          <div className="mt-8 flex justify-center gap-4 text-sm font-bold text-gray-400 uppercase tracking-widest">
            <span>✨ Sem instalação</span> • <span>🚀 Rápido</span> • <span>🔒 Seguro</span>
          </div>
        </div>
      </header>

      {/* --- O QUE É --- */}
      <section className="py-20 px-4 bg-white relative z-0">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-blue-50 p-10 rounded-[3rem] border-4 border-blue-100 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-black text-fun-blue">🧠 O que é o Estúdio Mágico?</h2>
          <p className="text-xl text-slate-700 leading-relaxed font-medium">
            Um app simples e mágico que transforma uma foto comum da criança em uma imagem <span className="text-fun-pink font-bold">realista</span> de personagem, como se fosse uma cena de filme.
          </p>
          <div className="text-2xl font-bold text-fun-purple bg-white inline-block px-8 py-4 rounded-2xl shadow-sm border-2 border-fun-purple/20">
            Nada complicado. Nada técnico.<br/>
            <span className="text-fun-pink">É só escolher… e sorrir 😍</span>
          </div>
        </div>
      </section>

      {/* --- COMO FUNCIONA --- */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center text-fun-purple mb-16 drop-shadow-sm">
            🪄 Como funciona <span className="text-fun-pink">(em 3 passos)</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '📸', title: '1. Envie a foto', desc: 'Envie ou tire uma foto bem bonita da criança.', color: 'border-blue-200 bg-blue-50' },
              { icon: '🎭', title: '2. Escolha o Herói', desc: 'Selecione o personagem favorito na nossa lista.', color: 'border-pink-200 bg-pink-50' },
              { icon: '✨', title: '3. Magia Pronta!', desc: 'Foto gerada! Baixe, compartilhe ou imprima.', color: 'border-yellow-200 bg-yellow-50' }
            ].map((step, idx) => (
              <div key={idx} className={`p-8 rounded-[2.5rem] text-center shadow-lg border-b-8 ${step.color} transform hover:-translate-y-2 transition-transform duration-300`}>
                <div className="text-7xl mb-6 drop-shadow-md">{step.icon}</div>
                <h3 className="text-2xl font-black text-slate-800 mb-3">{step.title}</h3>
                <p className="text-lg text-slate-600 font-medium leading-normal">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PERSONAGENS --- */}
      <section className="py-20 px-4 bg-white shadow-inner">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center text-fun-pink mb-6">
            🌟 Personagens Disponíveis
          </h2>
          <p className="text-center text-xl text-slate-500 mb-12 font-medium">Todos os seus favoritos estão aqui!</p>

          <div className="space-y-10">
             {/* Girls */}
             <div className="bg-pink-50 p-8 rounded-[2rem] border-4 border-pink-100">
                <h3 className="text-2xl font-bold text-pink-600 mb-6 text-center">👑 Princesas & Heroínas</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {['Elsa ❄️', 'Ariel 🧜‍♀️', 'Moana 🌊', 'Rapunzel 👱‍♀️', 'Mirabel 🦋', 'Minnie 🎀', 'Mulan 🗡️', 'Malévola 🐉', 'Judy Hopps 🐰', 'Cinderela 👠', 'Lilo 🌺', 'Capitã Marvel ⭐'].map(c => (
                    <div key={c} className="bg-white px-5 py-3 rounded-xl font-bold text-pink-700 text-lg shadow-sm border border-pink-200">{c}</div>
                  ))}
                </div>
             </div>

             {/* Boys */}
             <div className="bg-blue-50 p-8 rounded-[2rem] border-4 border-blue-100">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 text-center">⚡ Heróis & Aventureiros</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {['Homem-Aranha 🕷️', 'Homem de Ferro 🦾', 'Pantera Negra 🐾', 'Capitão América 🛡️', 'Deadpool ⚔️', 'Wolverine 🐺', 'Dr. Estranho 🔮', 'Thor 🔨', 'Hulk 👊', 'Woody 🤠', 'Buzz 🚀', 'Simba 🦁', 'Hércules ⚡', 'Tarzan 🦍', 'Aladdin 🧞'].map(c => (
                    <div key={c} className="bg-white px-5 py-3 rounded-xl font-bold text-blue-700 text-lg shadow-sm border border-blue-200">{c}</div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- GALERIA DE RESULTADOS --- */}
      <section className="py-24 px-4 bg-fun-purple/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-fun-purple mb-4 drop-shadow-sm">
              📸 Galeria da Fama
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              Veja algumas crianças que já se transformaram! 😍
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {galleryImages.map((src, index) => (
              <div 
                key={index} 
                className="group relative rounded-3xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-[1.02] hover:rotate-1 transition-all duration-300 aspect-square bg-gray-200"
              >
                <img 
                  src={src} 
                  alt={`Resultado ${index + 1}`} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                   <span className="text-white font-bold text-lg">✨ Mágico!</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING --- */}
      <section id="plans" className="py-24 px-4 relative overflow-hidden bg-fun-purple/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center text-slate-800 mb-4">
            Escolha seu Pacote Mágico
          </h2>
          <p className="text-center text-xl text-slate-600 mb-16">Comece a criar memórias hoje mesmo!</p>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            
            {/* Plan 1: Teste */}
            <div className="bg-white p-8 rounded-[2.5rem] border-4 border-gray-200 shadow-xl flex flex-col items-center text-center hover:border-fun-blue transition-colors duration-300">
              <div className="bg-blue-100 text-blue-700 px-6 py-2 rounded-full font-bold text-sm mb-6 uppercase tracking-wider">
                Para conhecer
              </div>
              <h3 className="text-3xl font-black text-slate-700 mb-2">Plano Teste</h3>
              <div className="flex items-baseline mb-8">
                 <span className="text-2xl text-slate-400 line-through mr-2">R$ 19,90</span>
                 <span className="text-5xl font-black text-fun-blue">R$ 10,00</span>
              </div>
              
              <ul className="space-y-4 mb-10 text-left w-full pl-6 text-lg text-slate-600 font-medium flex-grow">
                <li className="flex items-center gap-3">
                  <span className="bg-green-100 text-green-600 rounded-full p-1 text-xs">✔️</span> 
                  10 fotos geradas
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-green-100 text-green-600 rounded-full p-1 text-xs">✔️</span> 
                  Acesso a todos personagens
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-green-100 text-green-600 rounded-full p-1 text-xs">✔️</span> 
                  Download alta qualidade
                </li>
              </ul>

              <a 
                href="https://pay.lowify.com.br/go.php?offer=3o6c9ga"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 rounded-2xl border-2 border-fun-blue text-fun-blue font-black text-xl hover:bg-blue-50 transition-colors block"
              >
                Comprar Plano Teste
              </a>
              <p className="mt-4 text-xs text-gray-400">Pagamento único e seguro</p>
            </div>

            {/* Plan 2: Ilimitado (Highlight) */}
            <div className="bg-white p-8 rounded-[2.5rem] border-8 border-fun-purple shadow-2xl flex flex-col items-center text-center relative transform md:scale-105 z-10">
              <div className="absolute -top-6 bg-gradient-to-r from-fun-pink to-purple-600 text-white px-8 py-3 rounded-full font-bold text-base tracking-wide shadow-lg border-4 border-white">
                👑 O MAIS VENDIDO
              </div>
              
              <h3 className="text-4xl font-black text-fun-purple mb-2 mt-4">Plano Ilimitado</h3>
              <div className="flex items-baseline mb-8">
                 <span className="text-2xl text-slate-400 line-through mr-2">R$ 49,90</span>
                 <span className="text-6xl font-black text-slate-800">R$ 19,90</span>
              </div>

              <ul className="space-y-4 mb-10 text-left w-full pl-6 text-lg text-slate-700 font-bold flex-grow">
                <li className="flex items-center gap-3 text-fun-pink text-xl bg-pink-50 p-2 rounded-lg -ml-2">
                  <span>💖</span> Fotos ILIMITADAS
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-fun-purple text-white rounded-full p-1 text-xs">✔️</span>
                  Todos personagens liberados
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-fun-purple text-white rounded-full p-1 text-xs">✔️</span>
                  Prioridade no processamento
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-fun-purple text-white rounded-full p-1 text-xs">✔️</span>
                  Atualizações futuras inclusas
                </li>
              </ul>

              <a 
                href="https://pay.lowify.com.br/go.php?offer=dpcxtvg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 rounded-2xl bg-gradient-to-r from-fun-purple to-purple-700 text-white font-black text-2xl hover:scale-105 transition-transform shadow-lg animate-pulse block"
              >
                QUERO ILIMITADO!
              </a>
              <p className="mt-4 text-sm text-purple-400 font-bold">Oferta por tempo limitado! 🕒</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- PROMO VIAGEM --- */}
      <section className="py-24 px-4 bg-gradient-to-b from-blue-700 to-blue-900 text-white rounded-t-[4rem] text-center relative overflow-hidden border-t-8 border-yellow-400">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
           <div className="text-6xl mb-6 animate-bounce-slow">🏰 ✈️</div>
           
           <h2 className="text-4xl md:text-6xl font-black mb-8 text-yellow-300 drop-shadow-[0_4px_0_rgba(0,0,0,0.3)] leading-tight">
             GARANTA HOJE <br/> e CONCORRA a uma viagem para a Disney!
           </h2>
           
           <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto font-medium leading-relaxed bg-blue-800/50 p-6 rounded-3xl border border-blue-500/30">
             Ao adquirir qualquer plano, você participa automaticamente do sorteio de uma viagem com tudo pago para você e sua família conhecerem a Disney em 2026!
           </p>
           
           <a 
             href="https://pay.lowify.com.br/go.php?offer=dpcxtvg"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-block px-14 py-6 bg-yellow-400 text-blue-900 rounded-full text-2xl font-black shadow-[0_8px_0_rgb(202,138,4)] hover:shadow-[0_4px_0_rgb(202,138,4)] hover:translate-y-[4px] transition-all"
           >
             PARTICIPAR DO SORTEIO
           </a>
           
           <p className="mt-12 text-sm opacity-60 font-medium tracking-wide">
             💫 Estúdio Mágico Disney • Uma foto. Um personagem. Uma lembrança para sempre. 💖
           </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;