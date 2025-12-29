import React, { useState } from 'react';
import { Character } from '../types';
import { CHARACTERS } from '../constants';

interface CharacterSelectorProps {
  selectedId: string | null;
  onSelect: (character: Character) => void;
}

const CharacterSelector: React.FC<CharacterSelectorProps> = ({ selectedId, onSelect }) => {
  const [filter, setFilter] = useState<'girl' | 'boy'>('girl');

  const filteredCharacters = CHARACTERS.filter(char => {
    // Personagens "neutral" aparecem em ambos, ou podemos forçar a categoria
    // Para simplificar a UI baseada nos botões, vamos filtrar pela propriedade gender exata
    // Mas se quiser que alguns apareçam em ambos, ajustariamos aqui.
    // Como classifiquei todos estritamente em constants.ts, o filtro simples funciona.
    return char.gender === filter; 
  });

  return (
    <div className="w-full mt-8">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 px-4 gap-4">
        <div className="flex items-center gap-3">
          <span className="bg-fun-pink text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl shadow-md">2</span>
          <h2 className="text-2xl font-bold text-purple-700">
            Escolha o Personagem
          </h2>
        </div>

        {/* Gender Filter Tabs */}
        <div className="flex bg-purple-100 p-1 rounded-2xl shadow-inner">
          <button
            onClick={() => setFilter('girl')}
            className={`
              px-6 py-2 rounded-xl font-bold text-lg transition-all duration-300 flex items-center gap-2
              ${filter === 'girl' 
                ? 'bg-white text-pink-500 shadow-md transform scale-105' 
                : 'text-gray-400 hover:text-pink-400'}
            `}
          >
            <span>👧</span> Meninas
          </button>
          <button
            onClick={() => setFilter('boy')}
            className={`
              px-6 py-2 rounded-xl font-bold text-lg transition-all duration-300 flex items-center gap-2
              ${filter === 'boy' 
                ? 'bg-white text-blue-500 shadow-md transform scale-105' 
                : 'text-gray-400 hover:text-blue-400'}
            `}
          >
            <span>👦</span> Meninos
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-2">
        {filteredCharacters.map((char) => (
          <button
            key={char.id}
            onClick={() => onSelect(char)}
            className={`
              relative overflow-hidden rounded-3xl transition-all duration-300 group
              flex flex-col items-center justify-center text-center aspect-square shadow-md hover:shadow-xl
              ${selectedId === char.id 
                ? 'ring-4 ring-fun-pink scale-105 z-10' 
                : 'hover:scale-105'}
            `}
          >
            {/* Colorful Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${char.colorFrom} ${char.colorTo} opacity-90 transition-opacity group-hover:opacity-100`}></div>
            
            {/* Decorative white shine */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full blur-2xl -translate-y-10 translate-x-10 pointer-events-none"></div>

            {/* Selected Indicator Checkmark */}
            {selectedId === char.id && (
              <div className="absolute top-3 right-3 bg-white text-fun-pink rounded-full p-1 shadow-md animate-pop z-20">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center p-2">
               <div className="text-5xl mb-2 filter drop-shadow-md transform group-hover:scale-110 transition-transform duration-300">
                 {char.icon}
               </div>
               <h3 className="font-bold text-white text-lg leading-tight drop-shadow-lg tracking-wide">
                 {char.name}
               </h3>
               <p className="text-[10px] font-bold text-white/80 uppercase tracking-widest mt-1">
                 {char.movie}
               </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CharacterSelector;