import React from 'react';

const Header: React.FC = () => {
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
        </div>
      </div>
    </header>
  );
};

export default Header;