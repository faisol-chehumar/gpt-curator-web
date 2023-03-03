import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '../page';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Unlock your creativity with PromptCraft./i,
    });

    expect(heading).toBeInTheDocument();
  });
});
