import React from 'react';

interface HeaderProps {
  onOpenSettings: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenSettings }) => {
  return (
    <header className="w-full relative z-50">
      <div className="bg-gradient-to-b from-fun-purple to-purple-600 text-white p-6 shadow-xl rounded-b-[40px] border-b-8 border-purple-800">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-full shadow-lg animate-bounce-slow">
               <span className="text-4xl">🏰</span>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-wide drop-shadow-md text-yellow-300">
                Studio Disney
              </h1>
              <p className="text-sm md:text-base font-medium text-purple-200 bg-purple-800/30 px-3 py-1 rounded-full inline-block mt-1">
                Transforme sua foto em Magia! ✨
              </p>
            </div>
          </div>
          
          <button 
            onClick={onOpenSettings}
            className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors backdrop-blur-sm"
            title="Configurações de API"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;