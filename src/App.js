import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Button, CircularProgress } from '@mui/material';
import QuestionCard from './QuestionCard';

function App() {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [answered, setAnswered] = useState(0);


  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://the-trivia-api.com/v2/questions?limit=5');
      setQuestions(res.data);
      setScore(0);
      setAnswered(0);
    } catch (err) {
      console.error("Failed to load questions:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleAnswered = (isCorrect) => {
    if (isCorrect) setScore(prev => prev + 1);
    setAnswered(prev => prev + 1);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      {/* Title */}
      <Typography variant="h4" gutterBottom><b>Trivia Game</b></Typography>

      {/* Button to generate a new set of questions */}
      <Button
        variant="contained"
        onClick={fetchQuestions}
        style={{ marginBottom: '1.5rem' }}
      >
        Generate New Questions
      </Button>

      {/* Show loading spinner while questions are being fetched */}
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          {/* Display each question using the QuestionCard component */}
          {questions.map((q, idx) => (
            <QuestionCard
              key={idx}
              question={q}
              onAnswered={handleAnswered}
            />
          ))}

          {/* Show current score once questions are displayed */}
          <Typography variant="h6" style={{ marginTop: '1.5rem' }}>
            Score: {score} / {questions.length}
          </Typography>
        </>
      )}
    </Container>
  );
}

export default App;