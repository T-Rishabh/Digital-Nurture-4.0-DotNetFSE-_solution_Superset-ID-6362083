import React from 'react';

function GuestPage() {
    return (
        <div>
            <h2 style={{ color: '#34495e' }}>Welcome, Guest 👋</h2>
            <p>Please login to book your tickets.</p>
            <ul style={{ lineHeight: '1.8' }}>
                <li>✈️ Flight A - ₹5000</li>
                <li>✈️ Flight B - ₹7000</li>
            </ul>
        </div>
    );
}

export default GuestPage;
