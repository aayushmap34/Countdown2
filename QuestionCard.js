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
}