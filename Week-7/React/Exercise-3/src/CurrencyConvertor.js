import React, { useState } from 'react';

function CurrencyConvertor() {
    const [rupees, setRupees] = useState('');
    const [euros, setEuros] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const euroRate = 0.011; 
        setEuros((rupees * euroRate).toFixed(2));
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <form onSubmit={handleSubmit}>
                <label>Enter Amount in Rupees:</label><br />
                <input
                    type="number"
                    value={rupees}
                    onChange={(e) => setRupees(e.target.value)}
                    required
                /><br /><br />
                <button type="submit">Convert</button>
            </form>

            {euros && (
                <p>Equivalent Euros: �{euros}</p>
            )}
        </div>
    );
}

export default CurrencyConvertor;
