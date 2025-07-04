import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

function Results({questionBank, userAnswers, restartQuiz}) {

    function getScore() {
        let finalScore = 0;

        userAnswers.forEach((answer, index) => {
            if (answer === questionBank[index].answer) {
                finalScore++
            }
    
        });

        return finalScore;
    }

    const score = getScore();

    return (
    
        <div>

            <Typography variant="h2" textAlign="center" sx={{ my: 4 }}>
                Quiz Completed!
            </Typography>
            <p>Your Score: {score}/{questionBank.length}</p>
            <Button onClick={restartQuiz} variant="contained" startIcon={<RestartAltIcon />} sx={{ my: 4 }} color="primary">
                Restart Quiz!
            </Button>
            
        </div>
    )
}

export default Results;