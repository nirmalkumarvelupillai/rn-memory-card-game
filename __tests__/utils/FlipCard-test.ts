import { getCardList, getInitialState, getFlipState, getRefreshState } from '../../src/utils';

describe('utils/FlipCard', () => {
  it('should return 2 * pair count of card list', () => {
    const cardList = getCardList(6);
    expect(cardList).toHaveLength(12);
  });

  it('should return initial state with cards and stats', () => {
    const cardState = getInitialState();
    expect(cardState.cards).toHaveLength(12);
    expect(cardState.stats.steps).toEqual(0);
    expect(cardState.stats.gameOver).toBeFalsy();
  });

  it('should change the flipped to true for given card id', () => {
    const cardState = getInitialState(1);
    const flipState = getFlipState(cardState, cardState.cards[0].id);
    expect(flipState.cards[0].flipped).toBeTruthy();
    expect(flipState.stats.steps).toBeGreaterThan(0);
  });

  it('should change the matched to true for given two same value card', () => {
    const cardState = getInitialState(1);
    const flip1State = getFlipState(cardState, cardState.cards[0].id);
    const flip2State = getFlipState(flip1State, cardState.cards[1].id);
    const refreshState = getRefreshState(flip2State);
    const matched = refreshState.cards.filter((card) => card.matched);
    expect(matched).toHaveLength(2);
  });

  it('should change the flipped to false for given flipped cards not matched', () => {
    const cardState = getInitialState(1);
    const flip1State = getFlipState(cardState, cardState.cards[0].id);
    const flip2State = getFlipState(flip1State, '-');
    const refreshState = getRefreshState(flip2State);
    const matched = refreshState.cards.filter((card) => card.matched);
    expect(refreshState.cards[1].flipped).toBeFalsy();
    expect(matched).toHaveLength(0);
  });

  it('should change the gameOver to true when no cards other than matched', () => {
    const cardState = getInitialState(1);
    const flip1State = getFlipState(cardState, cardState.cards[0].id);
    const flip2State = getFlipState(flip1State, cardState.cards[1].id);
    const refreshState = getRefreshState(flip2State);
    const gameOverState = getRefreshState(refreshState);

    expect(gameOverState.stats.gameOver).toBeTruthy();
    expect(gameOverState.stats.hasWon).toBeTruthy();
  });
});
