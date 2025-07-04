import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import { Stack } from '@mui/material';
import { useState } from 'react';
import Results from './results';

// Declaring the main functional component named Quiz
function Quiz () {

    // Static list of quiz questions, each with options and a correct answer
    const questionBank = [
        {
            question: "Which one of these is a core React concept?", // First question
            options: ["Components", "State and Props", "Hooks", "All of the above"], // Options to choose from
            answer: "All of the above", // Correct answer
        },
        {
            question: "What is a useState?", // Second question
            options: ["Hook", "Prop", "Component", "JSX"],
            answer: "Hook",
        },
        {
            question: "What does JSX stand for?", // Third question
            options: ["JavaScript XML", "JavaScript Extension", "JavaScript Example", "None of the above"],
            answer: "JavaScript XML",
        },
    ];

    // Initial state representing no answers selected yet (null for each question)
    const initialAnswers = [null, null, null];

    // State to track user's selected answers across all questions
    const [userAnswers, setUserAnswers] = useState(initialAnswers);

    // State to track which question is currently being displayed
    const [currentQuestion, setCurrentQuestion] = useState(0);

    // State to determine if the quiz has been completed
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    // Store the selected answer for the currently displayed question
    const selectedAnswer = userAnswers[currentQuestion];

    // Function called when a user selects an answer option
    function handleSelectOption(option) {
        const newUserAnswers = [...userAnswers]; // Create a copy of current answers
        newUserAnswers[currentQuestion] = option; // Update the current question's answer
        setUserAnswers(newUserAnswers); // Update the state with new answers
    }

    // Function to move to the next question or finish the quiz
    function goToNext() {
        if (currentQuestion === questionBank.length - 1) {
            // If on the last question, set quiz as finished
            setIsQuizFinished(true);
        } else {
            // Otherwise, go to the next question
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    // Function to go back to the previous question (if not on the first one)
    function goToPrev() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    // Function to reset the quiz back to its initial state
    function restartQuiz() {
        setUserAnswers(initialAnswers); // Clear user answers
        setCurrentQuestion(0); // Set current question back to the first
        setIsQuizFinished(false); // Set quiz as not finished
    }

    // If quiz is finished, render the Results component instead of the quiz
    if (isQuizFinished) {
        return <Results 
            userAnswers={userAnswers} // Pass user's answers
            questionBank={questionBank} // Pass questions for scoring
            restartQuiz={restartQuiz} // Pass reset handler
        />;
    }

    // Render the main quiz interface
    return (
        <div> 
            {/* Show current question number in a divider with heading style */}
            <Divider>
                <Typography variant="h4" component="div" sx={{ my: 4 }}>
                    Question {currentQuestion + 1}
                </Typography>
            </Divider>

            {/* Render the question text */}
            <p className="question">
                {questionBank[currentQuestion].question}
            </p>

            {/* Render all answer options as buttons */}
            {questionBank[currentQuestion].options.map((option) => (
                <Button
                    key={option} // Unique key for React list rendering
                    variant="contained"
                    color="secondary"
                    fullWidth // Make button stretch to full container width
                    onClick={() => handleSelectOption(option)} // Handle selection
                    sx={{
                        mt: 2, // Margin top
                        backgroundColor: selectedAnswer === option ? 'primary.main' : 'secondary.main', // Highlight selected
                        color: selectedAnswer === option ? 'white' : 'black', // Adjust text color based on selection
                        '&:hover': {
                            backgroundColor: selectedAnswer === option ? 'primary.dark' : 'secondary.dark', // Hover color
                        },
                    }}
                >
                    {option} {/* Button label */}
                </Button>
            ))}

            {/* Stack for Prev/Next buttons, spaced apart horizontally */}
            <Stack direction="row" justifyContent="space-between" spacing={2} sx={{ mt: 4 }}>
                {/* Prev button, disabled on first question */}
                <Button 
                    onClick={goToPrev} 
                    disabled={currentQuestion === 0} 
                    variant="contained" 
                    startIcon={<ChevronLeftIcon />} 
                    color="primary"
                >
                    Prev
                </Button>

                {/* Next button, disabled unless an option is selected */}
                <Button 
                    onClick={goToNext} 
                    disabled={!selectedAnswer} 
                    variant="contained" 
                    endIcon={<ChevronRightIcon />} 
                    color="primary"
                >
                    {/* Show "Finish Quiz" on last question, otherwise "Next" */}
                    {currentQuestion === questionBank.length - 1 ? "Finsh Quiz" : "Next"}
                </Button>
            </Stack>
        </div>
    );
}

// Export the Quiz component so it can be used in App.tsx
export default Quiz;
