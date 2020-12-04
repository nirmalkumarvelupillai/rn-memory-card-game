import { FlipCard, GameState } from './../../types/FlipCard';
import { RootState } from '../../store';

export const getFlipCards = (state: RootState): FlipCard[] => state.FlipCard.cards;
export const getGameStats = (state: RootState): GameState => state.FlipCard.stats;
