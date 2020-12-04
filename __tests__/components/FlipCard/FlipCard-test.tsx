import React from 'react';
import { fireEvent, render, RenderAPI } from 'react-native-testing-library';
import { initialState } from '../../../src/reducers/FlipCardReducer';
import { FlipCard as FlipCardType } from '../../../src/types/FlipCard';

import FlipCard from '../../../src/components/FlipCard';

const onFlip = jest.fn();

const renderComponent = (data: FlipCardType = initialState.cards[0]): RenderAPI =>
  render(<FlipCard data={data} onFlip={onFlip} />);

describe('FlipCard', () => {
  it('should call onRestart when restart clicked', () => {
    const { getByText } = renderComponent({
      ...initialState.cards[0],
      value: 99,
    });
    fireEvent.press(getByText('99'));
    expect(onFlip).toHaveBeenCalledTimes(1);
  });
});
