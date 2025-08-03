import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => {
        setIsLoggedIn(prev => !prev);
    };

    return (
        <div style={styles.app}>
            <div style={styles.card}>
                <h1 style={styles.heading}>✈️ Ticket Booking App</h1>

                <button
                    onClick={toggleLogin}
                    style={{
                        ...styles.button,
                        backgroundColor: isLoggedIn ? '#e74c3c' : '#2ecc71',
                    }}
                >
                    {isLoggedIn ? 'Logout' : 'Login'}
                </button>

                <div style={styles.content}>
                    {isLoggedIn ? <UserPage /> : <GuestPage />}
                </div>
            </div>
        </div>
    );
}

const styles = {
    app: {
        fontFamily: 'Segoe UI, sans-serif',
        background: 'linear-gradient(135deg, #e0f7fa, #fff)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#ffffff',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        padding: '40px',
        borderRadius: '15px',
        width: '450px',
        transition: 'all 0.3s ease-in-out',
    },
    heading: {
        textAlign: 'center',
        color: '#2c3e50',
        marginBottom: '30px',
    },
    button: {
        padding: '12px 24px',
        border: 'none',
        borderRadius: '6px',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
        marginBottom: '30px',
        width: '100%',
    },
    content: {
        textAlign: 'left',
    }
};

export default App;
