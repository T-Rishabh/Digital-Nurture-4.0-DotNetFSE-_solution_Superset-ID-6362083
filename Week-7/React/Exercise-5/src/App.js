import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
    const [view, setView] = useState('books');

    const renderView = () => {
        switch (view) {
            case 'books':
                return <BookDetails />;
            case 'blogs':
                return <BlogDetails />;
            case 'courses':
                return <CourseDetails />;
            default:
                return <p>Select a valid view</p>;
        }
    };

    return (
        <div style={styles.app}>
            <div style={styles.card}>
                <h1 style={styles.title}>📚 Blogger App</h1>

                <div style={styles.buttonGroup}>
                    <button onClick={() => setView('books')} style={styles.button}>
                        📘 Books
                    </button>
                    <button onClick={() => setView('blogs')} style={styles.button}>
                        📝 Blogs
                    </button>
                    <button onClick={() => setView('courses')} style={styles.button}>
                        🎓 Courses
                    </button>
                </div>

                <div style={styles.content}>
                    {renderView()}
                </div>
            </div>
        </div>
    );
}

const styles = {
    app: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e3f2fd, #ffffff)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Segoe UI, sans-serif',
        padding: '20px'
    },
    card: {
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        width: '600px',
        maxWidth: '95%',
    },
    title: {
        textAlign: 'center',
        color: '#2c3e50',
        marginBottom: '30px',
    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '25px',
        gap: '10px',
        flexWrap: 'wrap',
    },
    button: {
        padding: '12px 20px',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: '#1976d2',
        color: '#fff',
        fontSize: '15px',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
    },
    content: {
        fontSize: '16px',
        lineHeight: '1.7',
        color: '#34495e',
    }
};

export default App;
