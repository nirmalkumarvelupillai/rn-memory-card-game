import { doFlipCard, restartGame, refreshFlipCard } from './../../reducers/FlipCardReducer/actions';
import { getFlipCards, getGameStats } from './../../reducers/FlipCardReducer/selectors';

import { connect } from 'react-redux';
import { RootState } from '../../store';
import CardGame from './CardGame';

export default connect(
  (state: RootState) => ({
    cards: getFlipCards(state),
    stats: getGameStats(state),
  }),
  {
    doFlipCard,
    refreshFlipCard,
    restartGame,
  }
)(CardGame);
