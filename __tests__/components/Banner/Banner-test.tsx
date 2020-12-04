import React from 'react';
import { render } from 'react-native-testing-library';

import Banner from '../../../src/components/Banner';

describe('Banner', () => {
  it('should display success banner when game won', () => {
    const { getByText } = render(<Banner hasWon={true} />);
    expect(getByText('YOU WON')).toBeDefined();
  });

  it('should display try again banner when game won', () => {
    const { getByText } = render(<Banner hasWon={false} />);
    expect(getByText('TRY AGAIN')).toBeDefined();
  });
});
