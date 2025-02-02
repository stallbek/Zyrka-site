import React, { useState } from "react";
import "./FeaturePhoneSlider.css";


import phone1 from "../assets/iphone.png";
import phone2 from "../assets/iphone.png";
import phone3 from "../assets/iphone.png";
import phone1Image1 from "../assets/qr.png";
import phone1Image2 from "../assets/menu.png";
import phone2Image1 from "../assets/cars.png";
import phone2Image2 from "../assets/02-Car Tracking.png";
import phone3Image1 from "../assets/03-Service List.png";



const featureData = [
    {
        phone: phone1,
        title: "Instantly locate the vehicles your clients want",
        description1: "• Pinpoint vehicle locations with precision",
        description2: "• Avoid wasted trips with real-time availability",
        description3: "• Focus on customers, not car hunts",
        images: [phone1Image2, phone1Image1, phone2Image1],
    },
    {
        phone: phone2,
        title: "Track and manage vehicles with confidence",
        description1: "• Track each vehicle from inspection to delivery",
        description2: "• Request essential services with ease",
        description3: "• Stay updated in real time",
        images: [phone2Image2],
    },
    {
        phone: phone3,
        title: "Simplify your service workflow",
        description1: "• Simplify service scheduling",
        description2: "• Stay organized",
        description3: "• Boost efficiency",
        images: [phone3Image1],
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
                <img src={phone} alt={title} className="phone-image" />
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
