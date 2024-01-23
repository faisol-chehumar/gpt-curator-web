import { render, screen } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';

const renderWithUtils = (ui: React.ReactElement, options?: RenderOptions) => {
  const renderResult = render(ui, options);

  return {
    ...renderResult,
    screen,
    // getByText: (text: string) => renderResult.getByText(text),
    // add other query methods here
  };
};

export * from '@testing-library/react';
export { renderWithUtils as render };
