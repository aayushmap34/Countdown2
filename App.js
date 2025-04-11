import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Button, CircularProgress } from '@mui/material';
import QuestionCard from './QuestionCard';

function App() {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [answered, setAnswered] = useState(0);

}