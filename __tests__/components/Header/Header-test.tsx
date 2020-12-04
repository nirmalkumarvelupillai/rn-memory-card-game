import React from 'react';
import { fireEvent, render, RenderAPI } from 'react-native-testing-library';

import Header from '../../../src/components/Header';

const onRestart = jest.fn();

const renderComponent = (steps?: number): RenderAPI =>
  render(<Header title="Game" onRestart={onRestart} steps={steps} />);

describe('Chip', () => {
  it('should call onRestart when restart clicked', () => {
    const { getByText } = renderComponent(5);
    fireEvent.press(getByText('Restart'));
    expect(onRestart).toHaveBeenCalledTimes(1);
  });

  it('should display title given as prop', () => {
    const { getByText } = renderComponent();

    expect(getByText('Game')).toBeDefined();
  });
});
