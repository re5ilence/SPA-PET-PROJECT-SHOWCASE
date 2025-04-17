import { useState, useEffect } from "react";
import styles from "./questions.module.css";

const questions = [
    {
        question: "Want to see how close our views are?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
    },
    {
        question: "What we see with our eyes is always true?",
        options: [
            "Yes, our eyes show us what is real.",
            "No, sometimes our eyes can trick us, like with illusions.",
        ],
        correctAnswer: "No, sometimes our eyes can trick us, like with illusions.",
    },
    {
        question: "Can we trust everything we hear?",
        options: [
            "Yes, if we hear something from a reliable source, it’s true",
            "No, people sometimes lie or make mistakes when they talk.",
        ],
        correctAnswer: "No, people sometimes lie or make mistakes when they talk.",
    },
    {
        question: "Do you think we can trust everything we read?",
        options: [
            "Yes, if it’s in a book or on the internet, it must be true",
            "No, some things we read can be wrong or made up.",
        ],
        correctAnswer: "No, some things we read can be wrong or made up.",
    },
    {
        question: "Do you think people are always honest?",
        options: [
            "Yes, most people are honest and tell the truth",
            "No, some people lie or hide the truth.",
        ],
        correctAnswer: "No, some people lie or hide the truth.",
    },
];

function Questions() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); //
    const [answer, setAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);

    const handleAnswer = (selectedAnswer) => {
        setAnswer(selectedAnswer);
        const correct = selectedAnswer === questions[currentQuestionIndex].correctAnswer;
        setIsCorrect(correct);
        setIsAnswered(true);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setAnswer(null);
            setIsAnswered(false);
            setIsCorrect(null);
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    useEffect(() => {
        if (isAnswered && currentQuestionIndex < questions.length - 1) {
            const timer = setTimeout(() => {
                handleNextQuestion();
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isAnswered, currentQuestionIndex]);

    return (
        <div className={styles.container}>
            <h2>{currentQuestion.question}</h2>
            <div>
                {currentQuestion.options.map((option, index) => (
                    <button
                        className={styles.button}
                        key={index}
                        onClick={() => handleAnswer(option)}
                        disabled={isAnswered}
                        style={{
                            backgroundColor:
                                isAnswered
                                    ? option === currentQuestion.correctAnswer
                                        ? "green"
                                        : option === answer
                                            ? "red"
                                            : "#ccc"
                                    : "",
                        }}
                    >
                        {option}
                    </button>
                ))}
            </div>

            {currentQuestionIndex === questions.length - 1 && isAnswered && (
                <>
                    <h2 className={styles.space}>End of Test</h2>
                    <h2>If your answers were colored <span>green</span>, it means our versions of reality are close.</h2>
                </>
            )}
        </div>
    );
}

export default Questions;
