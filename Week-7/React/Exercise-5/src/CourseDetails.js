import React from 'react';

function CourseDetails() {
    const courses = [
        { id: 'r1', name: 'ReactJS Fundamentals', duration: '4 weeks' },
        { id: 'j1', name: 'JavaScript Essentials', duration: '6 weeks' },
    ];

    return (
        <div>
            <h3>🎓 Courses Offered</h3>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        {course.name} - {course.duration}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CourseDetails;
