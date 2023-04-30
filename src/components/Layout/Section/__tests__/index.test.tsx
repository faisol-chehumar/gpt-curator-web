import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Section from '../Section';

describe('Section', () => {
  it('renders a children', () => {
    render(<Section>Test</Section>);

    const children = screen.getByText(/Test/i);

    expect(children).toBeInTheDocument();
  });
});
