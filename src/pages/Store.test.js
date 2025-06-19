import React from 'react';
import { render } from '@testing-library/react';
import Store from './Store';

describe('Store', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Store />);
    expect(asFragment()).toMatchSnapshot();
  });
});
