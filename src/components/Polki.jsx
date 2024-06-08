import { useState, useEffect } from 'react';
import '../App.css'
export const Polki = () => {
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        fetchShoes();
    }, []);

    const fetchShoes = async () => {
        try {
            const response = await fetch('http://localhost:3000/shoes/szafa');
            if (!response.ok) {
                throw new Error('Nie udało się pobrać danych o butach');
            }
            const data = await response.json();

            setShoes(data.shoes);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className={"polki"}>
            <h2>Moje buty:</h2>
            <div className={"produkt-wrapper"}>
                {shoes.map((shoe, index) => (
                    <a href={shoe.odnosnik} className={"produkt"} key={index}>
                    <div className={"produkt-div"} >
                        <div className={"img-wrapper"}>
                            <img src={shoe.img} alt={shoe.name}/>
                        </div>
                        <br/>
                        Nazwa: {shoe.name}
                        <br/>
                        Kolor: {shoe.color}
                    </div>
                    </a>
                ))}
            </div>
        </div>
    );
};
