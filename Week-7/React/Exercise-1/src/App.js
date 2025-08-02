import React, { useState } from 'react';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
    const [flag, setFlag] = useState(true); 

    const toggleFlag = () => {
        setFlag(prevFlag => !prevFlag);
    };

    return (
        <div style={{ margin: '20px', fontFamily: 'Arial' }}>
            <button
                onClick={toggleFlag}
                style={{
                    marginBottom: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                {flag ? "Show Indian Players" : "Show List of Players"}
            </button>

            {flag ? <ListofPlayers /> : <IndianPlayers />}
        </div>
    );
}

export default App;
