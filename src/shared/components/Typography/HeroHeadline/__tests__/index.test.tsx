import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import HeroHeadline from '../index';

describe('HeroHeadline', () => {
  it('renders a HeroHeadline', () => {
    render(<HeroHeadline>Test hero headline</HeroHeadline>);

    const heroHeadline = screen.getByRole('heading', {
      name: /Test hero headline/i,
    });

    expect(heroHeadline).toBeInTheDocument();
  });
});
