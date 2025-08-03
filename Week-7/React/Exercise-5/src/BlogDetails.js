import React from 'react';

function BlogDetails() {
    const blogs = [
        { id: 1, title: 'React Tips', date: '2025-08-01' },
        { id: 2, title: 'JavaScript Tricks', date: '2025-07-20' },
    ];

    return (
        <div>
            <h3>📝 Blog Posts</h3>
            <ul>
                {blogs.map(({ id, title, date }) => (
                    <li key={id}>
                        <strong>{title}</strong> - <em>{date}</em>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BlogDetails;
