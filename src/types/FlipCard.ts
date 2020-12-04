export interface FlipCard {
  id: string;
  value: number;
  flipped?: boolean;
  matched?: boolean;
}

export interface GameState {
  gameOver: boolean;
  hasWon: boolean;
  steps: number;
}

export type FlipCardState = {
  cards: FlipCard[];
  stats: GameState;
};
