import React, { useState, useEffect } from 'react';
import Tienda from './Tienda';

function RandomCard() {
    const { data } = Tienda(); // Context-dən data alırıq
    const [randomCards, setRandomCards] = useState([]); // Təsadüfi kartlar üçün state

    useEffect(() => {
        // Data daxilində 3 təsadüfi kart seçirik
        const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

        // Təsadüfi kartları seçirik
        const randomSelectedCards = [];
        for (let i = 0; i < 3; i++) {
            const randomIndex = getRandomIndex(data); // Təsadüfi indeks seçirik
            const randomCard = data[randomIndex]; // Təsadüfi kartı alırıq
            randomSelectedCards.push(randomCard); // Kartı əlavə edirik
        }

        setRandomCards(randomSelectedCards); // Seçilmiş kartları state-də saxlayırıq
    }, [data]); // 'data' dəyişdikdə təsadüfi kartları yeniləyirik

    return (
        <div className="random-cards-container">
            <h2>Productos Relacionados</h2>
            <div className="random-cards">
                {randomCards.length > 0 ? (
                    randomCards.map((card, index) => (
                        <div key={index} className="random-card">
                            {/* Kartın şəkli və adı */}
                            <img className="card-image" src={card.image} alt={card.name} />
                            <h3>{card.name}</h3>
                            <p>{card.description}</p>
                        </div>
                    ))
                ) : (
                    <p>Yüklənir...</p>
                )}
            </div>
        </div>
    );
}

export default RandomCard;
