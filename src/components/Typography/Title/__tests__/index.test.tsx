import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Title from '../index';

describe('Title', () => {
  it('renders a Title', () => {
    render(<Title>Test Title</Title>);

    const title = screen.getByRole('heading', {
      name: /Test Title/i,
    });

    expect(title).toBeInTheDocument();
  });
});
