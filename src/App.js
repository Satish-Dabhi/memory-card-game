import { Grid } from '@mui/material';
import { useState } from 'react';
import { Flippy, FrontSide, BackSide } from 'react-flippy';
import './App.css';
import cardList from "./cardList.json";
import FlipGameContainers from './components/FlipGameContainers';

export default function App() {
  return <FlipGameContainers cards={cardList} />;
}

