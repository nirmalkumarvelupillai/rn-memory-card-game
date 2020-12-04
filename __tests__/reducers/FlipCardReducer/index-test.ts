import FlipCardReducer, { initialState } from '../../../src/reducers/FlipCardReducer';
import { doFlipCard, refreshFlipCard, restartGame } from '../../../src/reducers/FlipCardReducer/actions';

describe('FlipCardReducer', () => {
  it('should return flip state by flipped true for given card id', () => {
    const result = FlipCardReducer({ ...initialState }, doFlipCard(initialState.cards[0].id));
    expect(result.cards[0].flipped).toBeTruthy();
  });

  it('should return refresh state by flipped true for given card id', () => {
    const updatedState = { ...initialState };
    updatedState.cards[0].flipped = true;
    updatedState.cards[1].flipped = true;
    updatedState.cards[2].flipped = true;
    const result = FlipCardReducer(updatedState, refreshFlipCard());
    const flippedCards = result.cards.filter((card) => card.flipped);
    expect(flippedCards).not.toHaveLength(3);
  });

  it('should return initialState when restart Game action called', () => {
    const updatedState = { ...initialState };
    updatedState.stats.gameOver = true;
    const result = FlipCardReducer(updatedState, restartGame());
    expect(result.stats.gameOver).toBeFalsy();
  });

  it('should return default state when no action matched', () => {
    const result = FlipCardReducer(undefined, { type: 'FLIP/NO_ACTION' });
    expect(result.cards.length).toBeGreaterThan(0);
  });
});
