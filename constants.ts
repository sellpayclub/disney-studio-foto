import { Character } from './types';

export const CHARACTERS: Character[] = [
  // --- MENINAS ---
  {
    id: 'elsa',
    name: 'Elsa',
    movie: 'Frozen',
    gender: 'girl',
    description: 'Vestido de alta costura azul gelo com lantejoulas reais brilhantes, capa de organza transparente e fluida, trança loira volumosa e realista.',
    environment: 'Montanha nevada realista com luz do sol refletindo no gelo, atmosfera mágica e fria.',
    colorFrom: 'from-blue-400',
    colorTo: 'to-cyan-200',
    icon: '❄️'
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
    icon: '🧜‍♀️'
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
    icon: '🌊'
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
    icon: '👱‍♀️'
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
    icon: '🦋'
  },
  {
    id: 'minnie',
    name: 'Minnie',
    movie: 'Disney',
    gender: 'girl',
    description: 'Vestido vermelho clássico com bolinhas brancas, laço grande vermelho na cabeça, orelhas redondas pretas, sapatos amarelos grandes.',
    environment: 'Parque da Disney colorido e ensolarado com balões e castelo ao fundo.',
    colorFrom: 'from-red-400',
    colorTo: 'to-pink-400',
    icon: '🎀'
  },
  {
    id: 'mulan',
    name: 'Mulan',
    movie: 'Mulan',
    gender: 'girl',
    description: 'Hanfu tradicional chinês guerreiro (armadura leve vermelha e prata), espada chinesa na mão, cabelo preto preso.',
    environment: 'Paisagem chinesa com montanhas enevoadas e flores de cerejeira caindo.',
    colorFrom: 'from-red-500',
    colorTo: 'to-green-600',
    icon: '🗡️'
  },
  {
    id: 'malevola',
    name: 'Malévola',
    movie: 'A Bela Adormecida',
    gender: 'girl',
    description: 'Chifres negros curvos icônicos, manto preto longo e dramático com gola alta, cajado mágico brilhando verde.',
    environment: 'Floresta sombria e mágica com espinhos e neblina verde fluorescente.',
    colorFrom: 'from-gray-900',
    colorTo: 'to-purple-900',
    icon: '🐉'
  },
  {
    id: 'judy',
    name: 'Judy Hopps',
    movie: 'Zootopia',
    gender: 'girl',
    description: 'Uniforme policial azul detalhado com distintivo dourado, orelhas de coelho longas e fofas, cinto de utilidades.',
    environment: 'Cidade moderna e vibrante de Zootopia com prédios coloridos e trânsito ao fundo.',
    colorFrom: 'from-blue-500',
    colorTo: 'to-indigo-300',
    icon: '🐰'
  },
  {
    id: 'cinderela',
    name: 'Cinderela',
    movie: 'Cinderela',
    gender: 'girl',
    description: 'Vestido de baile azul claro cintilante e volumoso, gargantilha preta, tiara de cristal brilhante, sapatinho de cristal.',
    environment: 'Escadaria do palácio real à noite com brilhos mágicos e relógio ao fundo.',
    colorFrom: 'from-blue-300',
    colorTo: 'to-white',
    icon: '👠'
  },
  {
    id: 'lilo',
    name: 'Lilo',
    movie: 'Lilo & Stitch',
    gender: 'girl',
    description: 'Vestido havaiano vermelho com estampas de folhas brancas grandes, cabelo preto solto, descalça ou sandálias.',
    environment: 'Praia tropical do Havaí com pranchas de surf e vegetação exuberante.',
    colorFrom: 'from-red-500',
    colorTo: 'to-orange-400',
    icon: '🌺'
  },
  {
    id: 'capita-marvel',
    name: 'Capitã Marvel',
    movie: 'Marvel',
    gender: 'girl',
    description: 'Traje de super-heroína vermelho e azul com estrela dourada no peito, aura de energia cósmica brilhante ao redor.',
    environment: 'Espaço sideral com estrelas e nebulosas coloridas ao fundo.',
    colorFrom: 'from-red-600',
    colorTo: 'to-blue-600',
    icon: '⭐'
  },

  // --- MENINOS ---
  {
    id: 'woody',
    name: 'Woody',
    movie: 'Toy Story',
    gender: 'boy',
    description: 'Camisa de tecido xadrez amarelo real, colete com textura de pelo de vaca, chapéu de cowboy de couro envelhecido, estrela de xerife de metal dourado.',
    environment: 'Quarto infantil iluminado pelo sol com papel de parede de nuvens e brinquedos em desfoque no fundo.',
    colorFrom: 'from-yellow-500',
    colorTo: 'to-orange-600',
    icon: '🤠'
  },
  {
    id: 'spiderman',
    name: 'Homem-Aranha',
    movie: 'Marvel',
    gender: 'boy',
    description: 'Traje tático de tecido spandex texturizado realista (vermelho e azul), detalhes da teia em relevo preto, lentes da máscara reflexivas.',
    environment: 'Topo de prédio em Nova York realista com luzes da cidade ao fundo e céu alaranjado.',
    colorFrom: 'from-red-600',
    colorTo: 'to-blue-700',
    icon: '🕷️'
  },
  {
    id: 'ironman',
    name: 'Homem de Ferro',
    movie: 'Marvel',
    gender: 'boy',
    description: 'Armadura tecnológica Mark 85 vermelha e dourada metálica com arranhões de batalha realistas, Reator Arc brilhando intensamente no peito.',
    environment: 'Laboratório futurista high-tech com hologramas azuis e ferramentas mecânicas ao fundo.',
    colorFrom: 'from-red-500',
    colorTo: 'to-yellow-500',
    icon: '🦾'
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
    icon: '🚀'
  },
  {
    id: 'simba',
    name: 'Simba',
    movie: 'Rei Leão',
    gender: 'boy',
    description: 'Fantasia realista de leãozinho dourado, textura de pelo macio, juba pequena começando a crescer, savana africana.',
    environment: 'Pedra do Rei na savana africana com o sol nascendo ao fundo (amanhecer laranja).',
    colorFrom: 'from-yellow-400',
    colorTo: 'to-orange-500',
    icon: '🦁'
  },
  {
    id: 'hercules',
    name: 'Hércules',
    movie: 'Hércules',
    gender: 'boy',
    description: 'Armadura peitoral dourada brilhante, capa azul longa, faixa de couro na cabeça, braceletes de couro.',
    environment: 'Olimpo grego com colunas de mármore branco e nuvens douradas.',
    colorFrom: 'from-orange-400',
    colorTo: 'to-yellow-600',
    icon: '⚡'
  },
  {
    id: 'tarzan',
    name: 'Tarzan',
    movie: 'Tarzan',
    gender: 'boy',
    description: 'Cabelo levemente bagunçado estilo selvagem, tanga de tecido rústico marrom, lança de madeira na mão.',
    environment: 'Selva densa e verde com cipós e raios de sol atravessando as árvores.',
    colorFrom: 'from-green-700',
    colorTo: 'to-green-400',
    icon: '🦍'
  },
  {
    id: 'aladdin',
    name: 'Aladdin',
    movie: 'Aladdin',
    gender: 'boy',
    description: 'Colete roxo aberto, calças brancas largas estilo harém, chapéu pequeno vermelho (fez), lâmpada mágica na mão.',
    environment: 'Ruas de Agrabah com arquitetura árabe, tapetes e potes de barro ao fundo.',
    colorFrom: 'from-purple-600',
    colorTo: 'to-yellow-400',
    icon: '🧞'
  },
  {
    id: 'pantera',
    name: 'Pantera Negra',
    movie: 'Marvel',
    gender: 'boy',
    description: 'Traje preto de vibranium com texturas tribais sutis e detalhes prateados, colar de garras.',
    environment: 'Wakanda futurista com pôr do sol roxo e tecnologia avançada ao fundo.',
    colorFrom: 'from-gray-800',
    colorTo: 'to-purple-800',
    icon: '🐾'
  },
  {
    id: 'capitao',
    name: 'Capitão América',
    movie: 'Marvel',
    gender: 'boy',
    description: 'Traje tático azul com estrela prateada no peito, escudo redondo vibrante vermelho branco e azul.',
    environment: 'Campo de batalha heróico com fumaça e bandeira americana tremulando ao fundo.',
    colorFrom: 'from-blue-700',
    colorTo: 'to-red-600',
    icon: '🛡️'
  },
  {
    id: 'deadpool',
    name: 'Deadpool',
    movie: 'Marvel',
    gender: 'boy',
    description: 'Traje tático de couro vermelho e preto com texturas realistas, katanas nas costas.',
    environment: 'Cenário urbano caótico e cômico com grafites coloridos na parede.',
    colorFrom: 'from-red-700',
    colorTo: 'to-gray-900',
    icon: '⚔️'
  },
  {
    id: 'wolverine',
    name: 'Wolverine',
    movie: 'X-Men',
    gender: 'boy',
    description: 'Traje clássico amarelo e azul texturizado, garras de adamantium metálicas saindo das mãos.',
    environment: 'Floresta de neve ou cenário industrial metálico.',
    colorFrom: 'from-yellow-500',
    colorTo: 'to-blue-800',
    icon: '🐺'
  },
  {
    id: 'strange',
    name: 'Doutor Estranho',
    movie: 'Marvel',
    gender: 'boy',
    description: 'Manto da Levitação vermelho com gola alta e detalhes dourados, túnica azul mística, Olho de Agamotto no peito.',
    environment: 'Santuário mágico com janelas circulares e mandalas de energia laranja flutuando.',
    colorFrom: 'from-blue-900',
    colorTo: 'to-red-700',
    icon: '🔮'
  },
  {
    id: 'thor',
    name: 'Thor',
    movie: 'Marvel',
    gender: 'boy',
    description: 'Armadura asgardiana prateada e preta, capa vermelha longa, segurando o martelo Mjolnir com raios.',
    environment: 'Asgard dourada ou campo de batalha com tempestade de raios no céu.',
    colorFrom: 'from-gray-500',
    colorTo: 'to-yellow-300',
    icon: '🔨'
  },
  {
    id: 'hulk',
    name: 'Hulk',
    movie: 'Marvel',
    gender: 'boy',
    description: 'Pele verde forte e texturizada, bermuda roxa rasgada, expressão forte.',
    environment: 'Cidade destruída ou laboratório com radiação gama verde.',
    colorFrom: 'from-green-600',
    colorTo: 'to-purple-700',
    icon: '👊'
  }
];