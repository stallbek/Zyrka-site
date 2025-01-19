import React, { useState, useEffect } from "react";
import "./Slider.css";
import pic1 from '../assets/story/img.png'
import pic2 from '../assets/story/IMG_3395.JPG'
import pic3 from'../assets/story/IMG_3370.JPG'
import pic4 from '../assets/story/IMG_3402.JPG'

const images = [pic1, pic2, pic3, pic4];

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // 3 seconds for each slide
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="slider-container">
            <div
                className="slides"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="slide"
                    />
                ))}
            </div>

            <div className="dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex === index ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Slider;
