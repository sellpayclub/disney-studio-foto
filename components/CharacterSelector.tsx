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
          Quem você quer ser?
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-2">
        {CHARACTERS.map((char) => (
          <button
            key={char.id}
            onClick={() => onSelect(char)}
            className={`
              relative overflow-hidden rounded-3xl transition-all duration-300 group
              flex flex-col
              ${selectedId === char.id 
                ? 'ring-4 ring-fun-pink scale-105 shadow-2xl rotate-1 z-10' 
                : 'hover:scale-105 hover:shadow-xl hover:-rotate-1 shadow-md bg-white'}
            `}
          >
            <div className={`h-28 w-full bg-gradient-to-br ${char.colorFrom} ${char.colorTo} flex items-center justify-center relative overflow-hidden`}>
               {/* Background decoration bubbles */}
               <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-full -mr-8 -mt-8"></div>
               <div className="absolute bottom-0 left-0 w-10 h-10 bg-white/20 rounded-full -ml-5 -mb-5"></div>
               
               <span className="text-6xl drop-shadow-lg transform transition-transform group-hover:scale-125 duration-500">
                 {char.icon}
               </span>
            </div>
            
            <div className="p-4 bg-white w-full border-b-4 border-r-4 border-gray-100 rounded-b-3xl">
              <h3 className="font-bold text-gray-800 text-lg leading-tight">{char.name}</h3>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-1">{char.movie}</p>
            </div>

            {selectedId === char.id && (
              <div className="absolute top-2 right-2 bg-white text-fun-pink rounded-full p-2 shadow-lg animate-pop">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CharacterSelector;