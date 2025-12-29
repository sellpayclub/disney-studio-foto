export interface Character {
  id: string;
  name: string;
  movie: string;
  gender: 'boy' | 'girl' | 'neutral';
  description: string;
  environment: string;
  colorFrom: string;
  colorTo: string;
  icon: string; // Emoji or simple representation
}

export enum AppState {
  IDLE = 'IDLE',
  UPLOADING = 'UPLOADING',
  SELECTING = 'SELECTING',
  GENERATING = 'GENERATING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface GeneratedResult {
  imageUrl: string;
  promptUsed: string;
}