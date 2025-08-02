import React from 'react';

function OfficeSpace() {
    const heading = <h1 style={{ textAlign: 'center' }}>Office Space Rental</h1>;

    const imageURL = "https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg";

    const office = {
        name: "Workspace One",
        rent: 55000,
        address: "123 Business Park, Mumbai"
    };

    const offices = [
        { name: "Skyline Hub", rent: 55000, address: "Bangalore" },
        { name: "Ocean View Workzone", rent: 75000, address: "Chennai" },
        { name: "TechNest", rent: 65000, address: "Hyderabad" },
        { name: "The Hive", rent: 40000, address: "Delhi" }
    ];

    const rentStyle = (rent) => ({
        color: rent < 60000 ? 'red' : 'green',
        fontWeight: 'bold'
    });

    return (
        <div style={{ fontFamily: 'Arial', padding: '20px' }}>
            {heading}

            <img src={imageURL} alt="Office" style={{ display: 'block', margin: '0 auto', width: '80%', borderRadius: '10px' }} />

            <h2>Featured Office</h2>
            <p><strong>Name:</strong> {office.name}</p>
            <p><strong>Rent:</strong> <span style={rentStyle(office.rent)}>₹{office.rent}</span></p>
            <p><strong>Address:</strong> {office.address}</p>

            <h2>Available Offices</h2>
            <ul>
                {offices.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        <p><strong>Name:</strong> {item.name}</p>
                        <p><strong>Rent:</strong> <span style={rentStyle(item.rent)}>₹{item.rent}</span></p>
                        <p><strong>Address:</strong> {item.address}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default OfficeSpace;
