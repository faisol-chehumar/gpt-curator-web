import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Container from '../index';

describe('Container', () => {
  it('renders a children', () => {
    render(<Container>Test</Container>);

    const children = screen.getByText(/Test/i);

    expect(children).toBeInTheDocument();
  });
});
