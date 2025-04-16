import React, { useState } from "react";
import RedRanger from "./assets/red.png"
import BlueRanger from "./assets/blue.png"
import YellowRanger from "./assets/yellow.png"
import PinkRanger from "./assets/pink.png"
import GreenRanger from "./assets/green.png"
import GoldenRanger from "./assets/golden.png"


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

    const sortearRanger = () => {
        const randomIndex = Math.floor(Math.random() * rangers.length);
        setSelectedRanger(rangers[randomIndex]);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Sortear um Power Ranger</h1>
            <button onClick={sortearRanger} style={{ padding: "10px 20px", fontSize: "16px" }}>
                Sortear
            </button>
            {selectedRanger && (
                <div style={{ marginTop: "20px" }}>
                    <h2>Seu Ranger é: {selectedRanger.name}</h2>
                    <img src={selectedRanger.image} alt={selectedRanger.name} style={{ width: "200px", height: "auto" }} />
                </div>
            )}
        </div>
    );
}

export default SeuPower;