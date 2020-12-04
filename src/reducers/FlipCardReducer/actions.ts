import { Action } from 'redux';

export const DO_FLIP_CARD = 'FLIP/DO_FLIP_CARD';
export const REFRESH_FLIP_CARD = 'FLIP/REFRESH_FLIP_CARD';
export const RESTART_GAME = 'FLIP/RESTART_GAME';

interface DoFlipCard extends Action {
  type: typeof DO_FLIP_CARD;
  payload: string;
}

interface RefreshFlipCard extends Action {
  type: typeof REFRESH_FLIP_CARD;
}

interface RestartGame extends Action {
  type: typeof RESTART_GAME;
}

export type FlipCardAction = DoFlipCard | RefreshFlipCard | RestartGame;

export const restartGame = (): RestartGame => ({
  type: RESTART_GAME,
});

export const doFlipCard = (payload: string): DoFlipCard => ({
  type: DO_FLIP_CARD,
  payload,
});

export const refreshFlipCard = (): RefreshFlipCard => ({
  type: REFRESH_FLIP_CARD,
});
