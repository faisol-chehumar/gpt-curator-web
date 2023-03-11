import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '../page';

describe('Home', () => {
  it('renders hero section', () => {
    render(<Home />);

    const title = screen.getByRole('heading', {
      name: /Unlock your creativity with PromptCraft./i,
    });
    const subTitle = screen.getByText(
      /Unleash your imagination with our curated prompts/i
    );

    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
  });

  it('renders recent prompt section', () => {
    render(<Home />);

    const recentPromptSection = screen.getByTestId('recently-added-section');

    expect(recentPromptSection).toBeInTheDocument();
  });
});
