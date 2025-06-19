import React from 'react';
import { render } from '@testing-library/react';
import Transfer from './Transfer';

describe('Transfer', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Transfer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
