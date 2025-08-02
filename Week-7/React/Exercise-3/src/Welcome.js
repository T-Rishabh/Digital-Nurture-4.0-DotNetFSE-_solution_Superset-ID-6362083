import React from 'react';

function Welcome() {
    const sayWelcome = (msg) => {
        alert(`Welcome Message: ${msg}`);
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <button onClick={() => sayWelcome("Welcome to React Events!")}>Say Welcome</button>
        </div>
    );
}

export default Welcome;
