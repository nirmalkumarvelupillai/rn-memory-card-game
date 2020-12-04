import { FlipCardState } from './../../types/FlipCard';
import { FlipCardAction, DO_FLIP_CARD, REFRESH_FLIP_CARD, RESTART_GAME } from './actions';
import { getInitialState, getRefreshState, getFlipState } from '../../utils';

export const initialState: FlipCardState = getInitialState();

const SDKReducer = (state: FlipCardState = initialState, action: FlipCardAction): FlipCardState => {
  switch (action.type) {
    case DO_FLIP_CARD:
      return getFlipState(state, action.payload);

    case REFRESH_FLIP_CARD:
      return getRefreshState(state);

    case RESTART_GAME:
      return getInitialState();

    default:
      return state;
  }
};

export default SDKReducer;
export type { FlipCardAction };
