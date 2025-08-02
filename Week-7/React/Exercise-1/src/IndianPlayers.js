import React from 'react';

function IndianPlayers() {
    const T20players = ['Virat', 'Rohit', 'Rishabh', 'Hardik'];
    const RanjiTrophy = ['Pujara', 'Rahane', 'Karun Nair', 'Saha'];

   
    const allPlayers = [...T20players, ...RanjiTrophy];

   
    const [player1, player2, player3, player4, ...rest] = allPlayers;

  
    const oddPlayers = [player2, player4]; 
    const evenPlayers = [player1, player3]; 

    return (
        <div style={{ padding: "20px" }}>
            <h2>Odd Team Players (Destructured)</h2>
            <ul>
                {oddPlayers.map((p, i) => <li key={i}>{p}</li>)}
            </ul>

            <h2>Even Team Players (Destructured)</h2>
            <ul>
                {evenPlayers.map((p, i) => <li key={i}>{p}</li>)}
            </ul>

            <h2>Merged Players</h2>
            <ul>
                {allPlayers.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
        </div>
    );
}

export default IndianPlayers;
