import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

function Results() {

    return (
    
        <div>

            <Typography variant="h2" textAlign="center" sx={{ my: 4 }}>
                Quiz Completed!
            </Typography>
            <p>Your Score: 2/3</p>
            <Button variant="contained" startIcon={<RestartAltIcon />} color="primary">
                Restart Quiz!
            </Button>
            
        </div>
    )
}

export default Results;