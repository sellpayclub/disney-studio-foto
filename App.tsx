import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ImageUpload from './components/ImageUpload';
import CharacterSelector from './components/CharacterSelector';
import LandingPage from './components/LandingPage';
import { Character, AppState } from './types';
import { generateDisneyImage } from './services/geminiService';

const App: React.FC = () => {
  // Simple routing state
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    // Check path on mount safely
    try {
      const path = window.location.pathname;
      // Aceita /landpage, /LandingPage ou qualquer variação que termine com isso
      if (path === '/landpage' || path === '/LandingPage' || path.endsWith('/LandingPage') || path.endsWith('/landpage')) {
        setShowLanding(true);
      }
    } catch (e) {
      console.warn("Routing check failed", e);
    }
  }, []);

  const handleGoToApp = () => {
    try {
      // Safe navigation attempting to reset to root
      window.history.pushState({}, '', '/');
    } catch (e) {
      // Fallback if pushState is blocked
      console.warn("Navigation update failed", e);
    }
    setShowLanding(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [appState, setAppState] = useState<AppState>(AppState.IDLE);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleImageSelect = (file: File) => {
    setSelectedImage(file);
    setAppState(AppState.SELECTING);
    setResultImage(null);
    setErrorMsg(null);
  };

  const handleCharacterSelect = (char: Character) => {
    setSelectedCharacter(char);
    // Scroll to generate button smoothly
    setTimeout(() => {
        document.getElementById('generate-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleGenerate = async () => {
    if (!selectedImage || !selectedCharacter) return;

    setAppState(AppState.GENERATING);
    setErrorMsg(null);

    try {
      // Usa a chave configurada internamente no serviço
      const generatedUrl = await generateDisneyImage(selectedImage, selectedCharacter);
      setResultImage(generatedUrl);
      setAppState(AppState.SUCCESS);
      
      // Scroll to result
      setTimeout(() => {
        document.getElementById('result-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);

    } catch (error: any) {
      console.error(error);
      setErrorMsg(error.message || "Ops! A varinha mágica falhou. Vamos tentar de novo?");
      setAppState(AppState.ERROR);
    }
  };

  const resetApp = () => {
    setAppState(AppState.IDLE);
    setSelectedImage(null);
    setSelectedCharacter(null);
    setResultImage(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render Landing Page if active
  if (showLanding) {
    return <LandingPage onGoToApp={handleGoToApp} />;
  }

  // Render Main App
  return (
    <div className="min-h-screen pb-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce-slow pointer-events-none">🎈</div>
      <div className="absolute top-40 right-10 text-6xl opacity-20 animate-pulse pointer-events-none">✨</div>
      <div className="absolute bottom-20 left-20 text-6xl opacity-20 animate-wiggle pointer-events-none">🍭</div>

      <Header />

      <main className="max-w-4xl mx-auto p-4 space-y-10 relative z-10">
        
        {/* Intro Card */}
        <div className="text-center py-8 bg-white/90 backdrop-blur-md rounded-[3rem] shadow-xl border-4 border-white mt-4 mx-2 transform hover:scale-[1.01] transition-transform">
          <h2 className="text-3xl md:text-4xl font-bold text-fun-purple mb-3 drop-shadow-sm">
            Estúdio Mágico Disney 🏰
          </h2>
          <p className="text-lg text-gray-600 max-w-lg mx-auto leading-relaxed px-4 font-medium">
            Transforme seu pequeno em uma estrela de cinema! Escolha a fantasia e veja a magia acontecer. 
            <br/><span className="text-fun-pink text-sm font-bold">(Resultado Realista!)</span>
          </p>
        </div>

        {/* Step 1: Upload */}
        <div className="bg-white rounded-[2.5rem] p-6 shadow-xl border-b-8 border-r-8 border-fun-blue/20">
          <ImageUpload 
            onImageSelected={handleImageSelect} 
            currentImage={selectedImage}
          />
        </div>

        {/* Step 2: Select Character */}
        {(selectedImage || appState !== AppState.IDLE) && (
          <div className="bg-white rounded-[2.5rem] p-6 shadow-xl border-b-8 border-r-8 border-fun-pink/20 animate-pop">
            <CharacterSelector 
              selectedId={selectedCharacter?.id || null} 
              onSelect={handleCharacterSelect} 
            />
          </div>
        )}

        {/* Step 3: Generate Action */}
        {(selectedImage && selectedCharacter) && (
          <div id="generate-section" className="flex flex-col items-center justify-center py-6 space-y-6">
            <button
              onClick={handleGenerate}
              disabled={appState === AppState.GENERATING}
              className={`
                group relative px-10 py-6 rounded-full text-2xl font-bold text-white shadow-[0_10px_0_rgb(0,0,0,0.2)] transition-all transform active:shadow-none active:translate-y-[10px]
                ${appState === AppState.GENERATING 
                  ? 'bg-gray-400 cursor-not-allowed shadow-none translate-y-[5px]' 
                  : 'bg-gradient-to-r from-fun-green to-emerald-500 hover:scale-105 hover:rotate-1'}
              `}
            >
              {appState === AppState.GENERATING ? (
                <span className="flex items-center gap-4">
                  <span className="animate-spin text-3xl">🪄</span>
                  Fazendo a Mágica...
                </span>
              ) : (
                <span className="flex items-center gap-3">
                   🎬 CRIAR FOTO REALISTA! 🎬
                </span>
              )}
            </button>
            {appState === AppState.GENERATING && (
              <div className="text-center space-y-2 bg-white/50 p-4 rounded-xl backdrop-blur-sm">
                <p className="text-lg font-bold text-fun-purple animate-pulse">
                  Costurando a fantasia... 🧵
                </p>
                <p className="text-sm text-gray-600">
                  Ajustando as luzes do estúdio... (aguarde uns segundinhos!)
                </p>
              </div>
            )}
          </div>
        )}

        {/* Error Message */}
        {errorMsg && (
          <div className="bg-red-100 border-4 border-red-300 text-red-600 p-6 rounded-3xl text-center shadow-lg transform rotate-1 animate-wiggle">
            <p className="font-bold text-xl">😢 Poxa vida!</p>
            <p>{errorMsg}</p>
          </div>
        )}

        {/* Step 4: Result */}
        {resultImage && (
          <div id="result-section" className="bg-white p-8 rounded-[3rem] shadow-2xl border-8 border-fun-yellow overflow-hidden text-center animate-pop relative">
            <div className="absolute top-0 left-0 w-full h-6 bg-stripes-pattern"></div>
            
            <h2 className="text-3xl font-bold text-fun-purple mb-8 flex items-center justify-center gap-3">
              🎉 OLHA SÓ ISSO! 🎉
            </h2>
            
            <div className="relative inline-block rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-1 hover:rotate-0 transition-transform duration-500 group bg-gray-100">
              <img 
                src={resultImage} 
                alt="Resultado Mágico" 
                className="max-w-full md:max-w-2xl mx-auto object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-black/10 rounded-2xl pointer-events-none"></div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href={resultImage} 
                download={`studio-disney-${selectedCharacter?.name}.png`}
                className="w-full sm:w-auto px-8 py-4 bg-fun-blue text-white rounded-2xl font-bold hover:bg-blue-500 transition-colors shadow-[0_6px_0_#1e3a8a] active:shadow-none active:translate-y-[6px] flex items-center justify-center gap-3 text-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Baixar Foto
              </a>
              <button 
                onClick={resetApp}
                className="w-full sm:w-auto px-8 py-4 bg-white text-fun-purple border-4 border-fun-purple rounded-2xl font-bold hover:bg-purple-50 transition-colors shadow-sm flex items-center justify-center gap-2 text-lg"
              >
                🔄 Criar Outra
              </button>
            </div>
            
            <p className="mt-6 text-sm text-gray-400 font-medium">
              *A IA tenta preservar o rosto ao máximo, mas pode haver variações artísticas.
            </p>
          </div>
        )}

      </main>
    </div>
  );
};

export default App;