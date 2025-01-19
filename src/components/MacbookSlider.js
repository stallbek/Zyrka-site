import React, {useState, useEffect} from "react";
import "./MacbookSlider.css";

// Import assets
import macbook from "../assets/macbook.png";
import screenshot1 from "../assets/screenshot1.png";
import screenshot2 from "../assets/alex.JPG";
import screenshot3 from "../assets/hamza.png";

const screenshots = [
    {
        src: screenshot1,
        title: 'Alex',
        description: 'The curious fox dashed swiftly through the dense forest, seeking shelter from the impending storm. Beneath towering trees, golden leaves fluttered gracefully to the ground. Birds scattered, their calls echoing. Raindrops began to fall, creating ripples in hidden ponds. Adventure awaited, yet serenity lingered, blending chaos and beauty seamlessly together.'
    },
    {
        src: screenshot2,
        title: 'Alex Intelligence',
        description: "The curious fox dashed swiftly through the dense forest, seeking shelter from the impending storm. Beneath towering trees, golden leaves fluttered gracefully to the ground. Birds scattered, their calls echoing. Raindrops began to fall, creating ripples in hidden ponds. Adventure awaited, yet serenity lingered, blending chaos and beauty seamlessly together."
    },
    {
        src: screenshot3,
        title: 'Alex',
        description: "The curious fox dashed swiftly through the dense forest, seeking shelter from the impending storm. Beneath towering trees, golden leaves fluttered gracefully to the ground. Birds scattered, their calls echoing. Raindrops began to fall, creating ripples in hidden ponds. Adventure awaited, yet serenity lingered, blending chaos and beauty seamlessly together."
    },
];

function MacbookSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically change slides every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
        }, 5000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    // Navigate to a specific slide
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className={'macbook-wrapper'}>
            <div className="macbook-frame">
                <img src={macbook} alt="MacBook Frame" className="macbook-image"/>
                <div className="screenshot-container">
                    <img
                        src={screenshots[currentIndex].src}
                        alt={`Slide ${currentIndex + 1}`}
                        className="screenshot"
                    />
                </div>
            </div>

            <div className="descriptions">
                {screenshots.map((screenshot, index) => (
                    <div
                        key={index}
                        className={`description-container ${
                            currentIndex === index ? "highlighted" : ""
                        }`}
                        onClick={() => goToSlide(index)}
                    >
                        <h3 className="description-title">{screenshot.title}</h3>
                        <p className="description-text">{screenshot.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MacbookSlider;
