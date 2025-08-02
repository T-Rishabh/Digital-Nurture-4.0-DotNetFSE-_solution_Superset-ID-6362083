import React from 'react';

function SyntheticEventExample() {
    const handleClick = (event) => {
        alert("I was clicked");
        console.log("Synthetic Event:", event);
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <button onClick={handleClick}>Synthetic OnPress</button>
        </div>
    );
}

export default SyntheticEventExample;
