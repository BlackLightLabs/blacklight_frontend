import React, { useState, useEffect } from 'react';
import './css/RotatingText.css';

const RotatingText = ({ words, duration }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState(-1);

    useEffect(() => {
        const interval = setInterval(() => {
            setPreviousIndex(currentIndex);
            setCurrentIndex((currentIndex + 1) % words.length);
        }, duration);

        return () => clearInterval(interval);
    }, [currentIndex, words, duration]);

    return (
        <div className="rotating-text">
            {words.map((word, index) => (
                <div
                    key={word}
                    className={`rotating-text__item ${
                        index === currentIndex ? 'rotating-text__item--active' : ''
                    }${index === previousIndex ? ' rotating-text__item--leaving' : ''}`}
                >
                    {word}
                </div>
            ))}
        </div>
    );
};

export default RotatingText;