import React from 'react';
import { fireEvent, render, RenderAPI } from 'react-native-testing-library';
import { initialState } from '../../src/reducers/FlipCardReducer';

import CardGame from '../../src/containers/CardGame/CardGame';
import { Props } from '../../src/containers/CardGame/CardGame';

const doFlipCard = jest.fn();
const refreshFlipCard = jest.fn();
const restartGame = jest.fn();

const renderComponent = (
  props: Props = {
    cards: initialState.cards,
    stats: initialState.stats,
    doFlipCard,
    refreshFlipCard,
    restartGame,
  }
): RenderAPI => render(<CardGame {...props} />);

describe('Card Game', () => {
  it('should render Card Game', () => {
    const { getByText } = renderComponent();
    expect(getByText('Flip Match')).toBeDefined();
  });

  it('should call doFlipCard when tap on card', () => {
    const { getAllByText } = renderComponent();
    fireEvent.press(getAllByText(initialState.cards[0].value.toString())[0]);
    expect(doFlipCard).toHaveBeenCalledTimes(1);
  });
});
