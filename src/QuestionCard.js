import React, { useState } from 'react';
import { Card, Typography, Button, Stack } from '@mui/material';
import he from 'he';

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

export default function QuestionCard({ question, onAnswered }) {
    const [selected, setSelected] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
  
    const allAnswers = shuffleArray([...question.incorrectAnswers, question.correctAnswer]);
  
    const handleClick = (answer) => {
      if (isAnswered) return;
      setSelected(answer);
      setIsAnswered(true);
      onAnswered(answer === question.correctAnswer);
    };
    
    return (
        <Card style={{ padding: 20, marginBottom: 20 }}>
          <Typography variant="h6" gutterBottom>
            {he.decode(question.question.text)}
          </Typography>
    
          <Stack spacing={1}>
            {allAnswers.map((ans, i) => {
              const isCorrect = ans === question.correctAnswer;
              const isSelected = ans === selected;
    
              let color = "primary";
              if (isAnswered) {
                color = isCorrect ? "success" : isSelected ? "error" : "primary";
              }
    
              return (
                <Button
                  key={i}
                  variant="contained"
                  color={color}
                  onClick={() => handleClick(ans)}
                  disabled={isAnswered}
                  style={{ textTransform: 'none', justifyContent: 'left' }}
                >
                  • {he.decode(ans)}
                </Button>
              );
            })}
          </Stack>
        </Card>
      );
    }