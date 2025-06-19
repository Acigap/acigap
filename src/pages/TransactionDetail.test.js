import React from 'react';
import { render } from '@testing-library/react';
import TransactionDetail from './TransactionDetail';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '1' }),
}));

describe('TransactionDetail', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<TransactionDetail />);
    expect(asFragment()).toMatchSnapshot();
  });
});
