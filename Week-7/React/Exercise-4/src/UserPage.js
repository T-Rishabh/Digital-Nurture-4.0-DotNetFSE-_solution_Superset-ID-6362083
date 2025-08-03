import React from 'react';

function UserPage() {
    return (
        <div>
            <h2 style={{ color: '#2c3e50' }}>Hello, User! ✅</h2>
            <p>You can now book your flights below:</p>
            <ul style={{ lineHeight: '1.8' }}>
                <li>✈️ Flight A - ₹5000</li>
                <li>✈️ Flight B - ₹7000</li>
            </ul>
            <button
                style={{
                    backgroundColor: '#3498db',
                    color: '#fff',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginTop: '10px',
                }}
            >
                Book Ticket
            </button>
        </div>
    );
}

export default UserPage;
