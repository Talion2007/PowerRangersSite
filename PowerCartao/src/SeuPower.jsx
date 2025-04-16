import React, { useState, useEffect } from "react";
import RedRanger from "./assets/red.png";
import BlueRanger from "./assets/blue.png";
import YellowRanger from "./assets/yellow.png";
import PinkRanger from "./assets/pink.png";
import GreenRanger from "./assets/green.png";
import GoldenRanger from "./assets/golden.png";
import './Home.css'; // Reutilizando o CSS da Home

const rangers = [
    { name: "Red Ranger", image: RedRanger },
    { name: "Blue Ranger", image: BlueRanger },
    { name: "Yellow Ranger", image: YellowRanger },
    { name: "Pink Ranger", image: PinkRanger },
    { name: "Green Ranger", image: GreenRanger },
    { name: "Golden Ranger", image: GoldenRanger },
];

function SeuPower() {
    const [selectedRanger, setSelectedRanger] = useState(null);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * rangers.length);
        setSelectedRanger(rangers[randomIndex]);
    }, []);

    return (
        <div className="home-container">
            <h1 className="home-title">Qual Power Ranger Você É?</h1>
            {selectedRanger && (
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                    <img 
                        src={selectedRanger.image} 
                        alt={selectedRanger.name} 
                        style={{ width: "25em", height: "auto", borderRadius: "10px", border: "2px solid #ddd" }} 
                    />
                    <h2 style={{ color: "#fff", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>
                        Seu Ranger é: {selectedRanger.name}
                    </h2>
                </div>
            )}
        </div>
    );
}

export default SeuPower;