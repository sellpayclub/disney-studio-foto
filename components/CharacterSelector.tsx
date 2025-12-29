import React from 'react';
import { Character } from '../types';
import { CHARACTERS } from '../constants';

interface CharacterSelectorProps {
  selectedId: string | null;
  onSelect: (character: Character) => void;
}

const CharacterSelector: React.FC<CharacterSelectorProps> = ({ selectedId, onSelect }) => {
  return (
    <div className="w-full mt-8">
      <div className="flex items-center gap-3 mb-6 px-4">
        <span className="bg-fun-pink text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl shadow-md">2</span>
        <h2 className="text-2xl font-bold text-purple-700">
          Escolha o Personagem
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-2">
        {CHARACTERS.map((char) => (
          <button
            key={char.id}
            onClick={() => onSelect(char)}
            className={`
              relative overflow-hidden rounded-2xl transition-all duration-300 group
              flex flex-col aspect-[3/4] text-left
              ${selectedId === char.id 
                ? 'ring-4 ring-fun-pink scale-105 shadow-2xl z-10' 
                : 'hover:scale-105 hover:shadow-xl shadow-md'}
            `}
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-gray-200">
                <img 
                    src={char.imageUrl} 
                    alt={char.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />
            </div>

            {/* Gradient Overlay for Text Readability */}
            <div className={`absolute inset-0 bg-gradient-to-t ${char.colorFrom.replace('from-', 'from-black/10 ')} to-transparent opacity-60 group-hover:opacity-40 transition-opacity`}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

            {/* Selected Indicator */}
            {selectedId === char.id && (
              <div className="absolute top-2 right-2 bg-fun-pink text-white rounded-full p-1.5 shadow-lg animate-pop z-20">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}

            {/* Content */}
            <div className="absolute bottom-0 w-full p-4 z-10">
               <div className="text-3xl mb-1 drop-shadow-md">{char.icon}</div>
               <h3 className="font-bold text-white text-lg leading-tight drop-shadow-lg">{char.name}</h3>
               <p className="text-xs font-medium text-gray-200 uppercase tracking-wider mt-1 drop-shadow-md">{char.movie}</p>
            </div>

            {/* Hover Shine Effect */}
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none"></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CharacterSelector;