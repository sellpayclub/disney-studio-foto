import { Character } from './types';

// Nota: As URLs abaixo são imagens temáticas do Unsplash para representar os personagens.
// Você pode substituir por URLs de imagens oficiais se desejar.

export const CHARACTERS: Character[] = [
  {
    id: 'elsa',
    name: 'Elsa',
    movie: 'Frozen',
    gender: 'girl',
    description: 'Vestido de alta costura azul gelo com lantejoulas reais brilhantes, capa de organza transparente e fluida, trança loira volumosa e realista.',
    environment: 'Montanha nevada realista com luz do sol refletindo no gelo, atmosfera mágica e fria.',
    colorFrom: 'from-blue-400',
    colorTo: 'to-cyan-200',
    icon: '❄️',
    imageUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'woody',
    name: 'Woody',
    movie: 'Toy Story',
    gender: 'boy',
    description: 'Camisa de tecido xadrez amarelo real, colete com textura de pelo de vaca, chapéu de cowboy de couro envelhecido, estrela de xerife de metal dourado.',
    environment: 'Quarto infantil iluminado pelo sol com papel de parede de nuvens e brinquedos em desfoque no fundo.',
    colorFrom: 'from-yellow-600',
    colorTo: 'to-red-400',
    icon: '🤠',
    imageUrl: 'https://images.unsplash.com/photo-1559563458-52c69c8e34ff?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'ariel',
    name: 'Ariel',
    movie: 'A Pequena Sereia',
    gender: 'girl',
    description: 'Cabelo vermelho vibrante e realista molhado, cauda de sereia com escamas iridescentes brilhantes (verde e esmeralda), top de conchas roxas realistas.',
    environment: 'Fundo do mar realista com corais coloridos, peixes tropicais e raios de sol atravessando a água.',
    colorFrom: 'from-teal-400',
    colorTo: 'to-purple-400',
    icon: '🧜‍♀️',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'spiderman',
    name: 'Homem-Aranha',
    movie: 'Marvel',
    gender: 'neutral',
    description: 'Traje tático de tecido spandex texturizado realista (vermelho e azul), detalhes da teia em relevo preto, lentes da máscara reflexivas.',
    environment: 'Topo de prédio em Nova York realista com luzes da cidade ao fundo e céu alaranjado.',
    colorFrom: 'from-red-600',
    colorTo: 'to-blue-600',
    icon: '🕷️',
    imageUrl: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'ironman',
    name: 'Homem de Ferro',
    movie: 'Marvel',
    gender: 'neutral',
    description: 'Armadura tecnológica Mark 85 vermelha e dourada metálica com arranhões de batalha realistas, Reator Arc brilhando intensamente no peito.',
    environment: 'Laboratório futurista high-tech com hologramas azuis e ferramentas mecânicas ao fundo.',
    colorFrom: 'from-red-500',
    colorTo: 'to-yellow-500',
    icon: '🦾',
    imageUrl: 'https://images.unsplash.com/photo-1623939044391-1fa1a48c6837?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'moana',
    name: 'Moana',
    movie: 'Moana',
    gender: 'girl',
    description: 'Top com textura de tecido tribal rústico, saia de palha e tecido bege realista, colar de pedra azul brilhante translúcida.',
    environment: 'Praia do Havaí realista com areia dourada, água do mar cristalina e luz do pôr do sol.',
    colorFrom: 'from-orange-400',
    colorTo: 'to-teal-400',
    icon: '🌊',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'rapunzel',
    name: 'Rapunzel',
    movie: 'Enrolados',
    gender: 'girl',
    description: 'Cabelo loiro extremamente longo e brilhante com flores reais entrelaçadas, vestido lilás de cetim e espartilho detalhado.',
    environment: 'Floresta encantada com lanternas flutuantes brilhantes (vagalumes) ao fundo e grama verdejante.',
    colorFrom: 'from-purple-400',
    colorTo: 'to-pink-300',
    icon: '👱‍♀️',
    imageUrl: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'buzz',
    name: 'Buzz Lightyear',
    movie: 'Toy Story',
    gender: 'boy',
    description: 'Armadura espacial de plástico rígido brilhante e metal, botões com luzes LED reais, capacete de vidro reflexivo.',
    environment: 'Superfície lunar realista com crateras e céu estrelado profundo.',
    colorFrom: 'from-green-500',
    colorTo: 'to-purple-600',
    icon: '🚀',
    imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'mirabel',
    name: 'Mirabel',
    movie: 'Encanto',
    gender: 'girl',
    description: 'Blusa branca de algodão com bordados coloridos feitos a mão, saia longa turquesa com texturas de tecido real, óculos verdes de armação grossa.',
    environment: 'Pátio de casarão colombiano colonial cheio de flores buganvílias reais e luz tropical.',
    colorFrom: 'from-teal-500',
    colorTo: 'to-pink-500',
    icon: '🦋',
    imageUrl: 'https://images.unsplash.com/photo-1590073242678-cfe2f792d3c6?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'mickey',
    name: 'Mickey Feiticeiro',
    movie: 'Fantasia',
    gender: 'neutral',
    description: 'Túnica de veludo vermelho pesado e realista, chapéu azul cônico com estrelas prateadas costuradas, cordão de ouro na cintura.',
    environment: 'Caverna mística escura com reflexos de água no chão e brilhos mágicos flutuando no ar.',
    colorFrom: 'from-red-500',
    colorTo: 'to-blue-800',
    icon: '🪄',
    imageUrl: 'https://images.unsplash.com/photo-1541689221361-ad95003448dc?auto=format&fit=crop&w=400&q=80'
  }
];