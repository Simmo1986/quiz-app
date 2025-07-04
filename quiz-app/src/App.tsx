import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Quiz from './components/quiz';
import './App.css';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm" className="drop-in" sx={{
            backgroundColor: theme.palette.background.paper,
            padding: 4,
            borderRadius: 2,
            boxShadow: 2,
            mt: 4,
          }}>
          <Typography variant="h1" textAlign="center">
            Quiz App
          </Typography>
          <Quiz />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;