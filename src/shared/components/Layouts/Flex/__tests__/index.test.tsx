import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Flex from '../index';

describe('Box', () => {
  it('renders a children', () => {
    render(<Flex>Test</Flex>);

    const children = screen.getByText(/Test/i);

    expect(children).toBeInTheDocument();
  });
});
