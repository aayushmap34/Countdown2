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
  
}