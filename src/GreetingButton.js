import React from 'react';

const GreetingButton = ({ greet }) => {
    return (
        <button onClick={() => greet('Hello, User!')}>
            Click to Greet
        </button>
    );
};

export default GreetingButton;
