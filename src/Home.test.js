import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
