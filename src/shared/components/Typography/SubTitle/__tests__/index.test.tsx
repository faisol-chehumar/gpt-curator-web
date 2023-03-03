import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import SubTitle from '../index';

describe('SubTitle', () => {
  it('renders a SubTitle', () => {
    render(<SubTitle>Test Title</SubTitle>);

    const subTitle = screen.getByText(/Test Title/i);

    expect(subTitle).toBeInTheDocument();
  });
});
