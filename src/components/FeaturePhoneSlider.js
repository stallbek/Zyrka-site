
import React, { useState } from "react";
import "./FeaturePhoneSlider.css";

import phone1 from "../assets/iphone.png";
import phone2 from "../assets/iphone.png";
import phone3 from "../assets/iphone.png";
import image1 from "../assets/01.svg";
import image2 from "../assets/02.svg";
import image3 from "../assets/03.svg";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";



const featureData = [
    {
        title: "Instantly locate the vehicles your clients want",
        description1: "• Know before you go—find the right car instantly",
        description2: "• No more surprises with our blocked car detection",
        description3: "• Focus on customers, not car hunts",
        images: [image1, image2, image3, image4],
    },
    {
        title: "Track and manage vehicles with confidence",
        description1: "• Track each vehicle from inspection to delivery",
        description2: "• Request dealership services with ease",
        description3: "• Stay updated in real time with notifications",
        images: [image5],
    },
    {
        title: "Simplify your service workflow",
        description1: "• Easily book services like VDIs, PDIs, detailing, and more",
        description2: "• Keep track of all pre-sales service appointments in one place",
        description3: "• Ensure on-time vehicle delivery",
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
