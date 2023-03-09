import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Box from '../index';

describe('Box', () => {
  it('renders a children', () => {
    render(<Box>Test</Box>);

    const children = screen.getByText(/Test/i);

    expect(children).toBeInTheDocument();
  });
});
