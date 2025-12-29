import { Character } from './types';

// O prefixo https://images.weserv.nl/?url= serve para garantir que a imagem carregue
// e não seja bloqueada pelo site original (CORS/Hotlink protection).
const PROXY = 'https://images.weserv.nl/?url=';
const OPT = '&w=500&h=500&fit=cover&a=top'; // Otimização de tamanho e corte

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
    // Imagem oficial Frozen 2
    imageUrl: `${PROXY}lumiere-a.akamaihd.net/v1/images/6d7454cea6644379adc7e529c5790a28078a2823.jpeg${OPT}`
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
    // Poster Toy Story 4
    imageUrl: `${PROXY}lumiere-a.akamaihd.net/v1/images/p_toystory4_19639_55272a05.jpeg${OPT}`
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
    // Live Action Art
    imageUrl: `${PROXY}lumiere-a.akamaihd.net/v1/images/p_thelittlemermaid_2023_7df938fc.jpeg${OPT}`
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
    // No Way Home Suit
    imageUrl: `${PROXY}terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg${OPT}`
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
    // Endgame Armor
    imageUrl: `${PROXY}terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_mas_mob_01_0.jpg${OPT}`
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
    // Official Moana Art
    imageUrl: `${PROXY}lumiere-a.akamaihd.net/v1/images/p_moana_20530_214883e3.jpeg${OPT}`
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
    // Tangled Poster Art
    imageUrl: `${PROXY}lumiere-a.akamaihd.net/v1/images/p_tangled_20503_68616a22.jpeg${OPT}`
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
    // Lightyear (Movie) or Toy Story Realistic
    imageUrl: `${PROXY}lumiere-a.akamaihd.net/v1/images/p_lightyear_disneyplus_21960_619098c7.jpeg${OPT}`
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
    // Encanto Poster
    imageUrl: `${PROXY}lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg${OPT}`
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
    // Fantasia Sorcerer
    imageUrl: `${PROXY}lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-10n7kwa_96109316.jpeg${OPT}`
  }
];