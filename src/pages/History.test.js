import React from 'react';
import { render } from '@testing-library/react';
import History from './History';

describe('History', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<History />);
    expect(asFragment()).toMatchSnapshot();
  });
});
