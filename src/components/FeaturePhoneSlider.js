
import React, { useState } from "react";
import "./FeaturePhoneSlider.css";


import image1 from "../assets/01.png";
import image2 from "../assets/02.png";
import image3 from "../assets/03.png";
import image4 from "../assets/04.png";
import image5 from "../assets/05.png";
import image6 from "../assets/06.png";



const featureData = [
    {
        title: "Instantly locate the vehicles your clients want",
        description1: "• Know before you go—find the right car instantly",
        description2: "• No more surprises with our blocked car detection",
        description3: "• Focus on customers, not car hunts",
        images: [image1, image2, image3, image4],
    },
    {
        title: "Simplify your key management",
        description1: "• Easily find keys no matter what box or board they are placed on",
        description2: "• Keep track of keys traded between your staff",
        description3: "• Integrated with KEYper and KeyTrak",
        images: [image5],
    },
    {
        title: "Track and manage vehicles with confidence",
        description1: "• Track each vehicle from inspection to delivery",
        description2: "• Request dealership services with ease",
        description3: "• Stay updated in real time with notifications",
        images: [image6],
    },

];

function FeaturePhoneSlider() {
    const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const { phone, title, description, images } =
        featureData[currentFeatureIndex];

    const handleFeatureClick = (index) => {
        setCurrentFeatureIndex(index);
        setCurrentImageIndex(0);
    };

    const handleImageClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };


    const handleDotClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="feature-phone-slider">
            <div className="phone-frame">
                {/*<img src={phone} alt={title} className="phone-image" />*/}
                <div
                    className="phone-screen-container"
                    onClick={handleImageClick}
                >
                    <img
                        src={images[currentImageIndex]}
                        alt={`Slide ${currentImageIndex + 1}`}
                        className="phone-screen"
                    />
                    <div className="phone-progress-dots">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`phone-dot ${
                                    currentImageIndex === index ? "active" : ""
                                }`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDotClick(index);
                                }}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="feature-description-section">
                {featureData.map((feature, index) => (
                    <div
                        key={index}
                        className={`feature-description ${
                            currentFeatureIndex === index ? "active" : ""
                        }`}
                        onClick={() => handleFeatureClick(index)}
                    >
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-text">{feature.description1}</p>
                        <p className="feature-text">{feature.description2}</p>
                        <p className="feature-text">{feature.description3}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeaturePhoneSlider;
