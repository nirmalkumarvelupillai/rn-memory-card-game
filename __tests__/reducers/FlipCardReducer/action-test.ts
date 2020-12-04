import {
  DO_FLIP_CARD,
  REFRESH_FLIP_CARD,
  RESTART_GAME,
  doFlipCard,
  refreshFlipCard,
  restartGame,
} from '../../../src/reducers/FlipCardReducer/actions';

describe('FlipCardReducer actions', () => {
  it('should return payload with type DO_FLIP_CARD', () => {
    const doFlipPayload = doFlipCard('123');
    expect(doFlipPayload.type).toEqual(DO_FLIP_CARD);
    expect(doFlipPayload.payload).toEqual('123');
  });

  it('should return payload with type REFRESH_FLIP_CARD', () => {
    const refreshFlipCardPayload = refreshFlipCard();
    expect(refreshFlipCardPayload.type).toEqual(REFRESH_FLIP_CARD);
  });

  it('should return payload with type RESTART_GAME', () => {
    const restartGamePayload = restartGame();
    expect(restartGamePayload.type).toEqual(RESTART_GAME);
  });
});
