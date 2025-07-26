import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore() {
    const name = "Rishabh Shukla";
    const school = "Kiit University";
    const total = 450;
    const goal = 500;

    const average = (total / goal) * 100;

    return (
        <div className="score-box">
            <h1>Student Details :</h1>
            <p1><strong>Name:</strong> {name} </p1>
            <br></br>
            <p2><strong>School:</strong> {school}</p2>
                <br></br>
                <p3><strong>Total Marks:</strong> {total}</p3>
                <br></br>
                <p5><strong>Score:</strong> {average.toFixed(2)}%</p5>
        </div>
    );
}

export default CalculateScore;
