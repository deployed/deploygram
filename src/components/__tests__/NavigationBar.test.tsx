import React from 'react'

import { render } from '@testing-library/react';

import NavigationBar from 'components/NavigationBar';

jest.mock('react-router-dom', () => ({
  useNavigate() {},
}));


describe('<NavigationBar />', () => {
  test('Should correctly render component', () => {
    const {getByAltText, getAllByRole} = render(<NavigationBar />);

    const logo = getByAltText('logo');
    const buttons = getAllByRole('button');

    expect(logo).toBeDefined();
    expect(buttons.length).toBe(3);
  })
});
