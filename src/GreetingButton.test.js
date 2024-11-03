import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GreetingButton from './GreetingButton';

test('calls greet with "Hello, User!" when button is clicked', () => {
    // Step 1: Create a mock function for greet
    const greetMock = jest.fn();

    // Step 2: Render the component with the mock function passed as prop
    const { getByText } = render(<GreetingButton greet={greetMock} />);

    // Step 3: Simulate a button click
    fireEvent.click(getByText('Click to Greet'));

    // Step 4: Use toHaveBeenCalledWith to verify the argument
    expect(greetMock).toHaveBeenCalledWith('Hello, User!');
});
