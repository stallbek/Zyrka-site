import React, { useState } from "react";
import Style from './Questions.css'

const questionsData = [
    {
        question: "Who is Nathan?",
        answer: "Nathan"
    },
    {
        question: "Why Zyrka",
        answer: "Because"
    },
    {
        question: "How do I use it",
        answer: "Use it"
    },{
        question: "How do I use it",
        answer: "Use it"
    },{
        question: "How do I use it",
        answer: "Use it"
    },{
        question: "How do I use it",
        answer: "Use it"
    }
];

function Questions() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleQuestion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="question-parent">
            <div className={'black'}>
                <h2>
                    Frequently Asked Questions
                </h2>
            </div>
            <div className="questions-container">
                {questionsData.map((item, index) => (
                    <div key={index} className="question-item">
                        <button
                            onClick={() => toggleQuestion(index)}
                            className={`question-button ${activeIndex === index ? "active" : ""}`}
                        >
                            {item.question}
                        </button>
                        {activeIndex === index && <p className="question-answer">{item.answer}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Questions;
