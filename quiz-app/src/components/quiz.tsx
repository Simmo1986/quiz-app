import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import { Stack } from '@mui/material';
import { useState } from 'react';
import Results from './results';

function Quiz () {
    const questionBank = [

        {
            question: "Which one of these is a core React concept?",
            options: ["Components", "State and Props", "Hooks", "All of the above"],
            answer: "All of the above",
        },

        {
            question: "What is a useState?",
            options: ["Hook", "Prop", "Component", "JSX"],
            answer: "Hook",
        },

        {
            question: "What does JSX stand for?",
            options: ["JavaScript XML", "JavaScript Extension", "JavaScript Example", "None of the above"],
            answer: "JavaScript XML",
        },
    ];

    const initialAnswers = [null, null, null];

    const [userAnswers, setUserAnswers] = useState(initialAnswers);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const selectedAnswer = userAnswers[currentQuestion];

    function handleSelectOption(option) {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;

        setUserAnswers(newUserAnswers);
    }

    function goToNext() {
        if (currentQuestion === questionBank.length - 1) {
            setIsQuizFinished(true);
        } else {
            setCurrentQuestion(currentQuestion + 1)
        }
    }
    
    function goToPrev() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
        }
    }

    function restartQuiz() {
        setUserAnswers(initialAnswers);
        setCurrentQuestion(0);
        setIsQuizFinished(false);
    }

    if (isQuizFinished) {
        return <Results 
        userAnswers={userAnswers} 
        questionBank={questionBank}
        restartQuiz={restartQuiz}
        />;
    }

    return (

    <div> 
        

        <Divider><Typography variant="h4" component="div" sx={{ my: 4 }}>Question {currentQuestion + 1}</Typography></Divider>

        <p className="question">{questionBank[currentQuestion].question}</p>

        {questionBank[currentQuestion].options.map((option) => (
            <Button
                key={option}
                variant="contained"
                color="secondary"
                fullWidth
                onClick={() => handleSelectOption(option)}
                sx={{
                    mt: 2,
                    backgroundColor: selectedAnswer === option ? 'primary.main' : 'secondary.main',
                    color: selectedAnswer === option ? 'white' : 'black',
                    '&:hover': {
                        backgroundColor: selectedAnswer === option ? 'primary.dark' : 'secondary.dark',
                    },
                }}
            >
                {option}
            </Button>
        ))}

        <Stack direction="row" justifyContent="space-between" spacing={2} sx={ {mt: 4} }>
            <Button onClick={goToPrev} disabled={currentQuestion === 0} variant="contained" startIcon={<ChevronLeftIcon />} color="primary">
                Prev
            </Button>
            <Button onClick={goToNext} disabled={!selectedAnswer} variant="contained" endIcon={<ChevronRightIcon />} color="primary">
                {currentQuestion === questionBank.length - 1 ? "Finsh Quiz" : "Next"}
            </Button>
        </Stack>

    </div>

    );
}

export default Quiz;