import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import HeroTagLine from '../index';

describe('HeroTagLine', () => {
  it('renders a HeroTagLine', () => {
    render(<HeroTagLine>Test hero tagline</HeroTagLine>);

    const heroTagLine = screen.getByText('Test hero tagline');

    expect(heroTagLine).toBeInTheDocument();
  });
});
