import React, { useState } from 'react';
import { Card, Typography, Button, Stack } from '@mui/material';
import he from 'he';

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}