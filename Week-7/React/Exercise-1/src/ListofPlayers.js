import React from 'react';

function ListofPlayers() {
    const players = [
        { name: 'Virat Kohli', score: 95 },
        { name: 'Rohit Sharma', score: 88 },
        { name: 'Shikhar Dhawan', score: 65 },
        { name: 'KL Rahul', score: 72 },
        { name: 'Rishabh Pant', score: 55 },
        { name: 'Hardik Pandya', score: 82 },
        { name: 'Ravindra Jadeja', score: 68 },
        { name: 'Jasprit Bumrah', score: 90 },
        { name: 'Bhuvneshwar Kumar', score: 45 },
        { name: 'Yuzvendra Chahal', score: 78 },
        { name: 'Shreyas Iyer', score: 62 }
    ];

 
    const lowScorers = players.filter(player => player.score < 70);

    return (
        <div>
            <h2>All Players</h2>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>{player.name}: {player.score}</li>
                ))}
            </ul>

            <h3>Players with Score Below 70</h3>
            <ul>
                {lowScorers.map((player, index) => (
                    <li key={index}>{player.name}: {player.score}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListofPlayers;
