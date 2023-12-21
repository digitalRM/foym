'use client'
import React, { useState, useEffect } from 'react';

function WordChanger() {
  const words = [
    'Mission', 'Quest', 'Calling', 'Target', 'Purpose', 'Goals', 'Ambition', 'Mission',
  ];
  // Quest, Passion, Calling, Target, Endeavor

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [intervalDuration, setIntervalDuration] = useState(300); // Initial interval duration in milliseconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentWordIndex < words.length - 1) {
        setCurrentWordIndex(currentWordIndex + 1);
        setCurrentWord(words[currentWordIndex + 1]);
        // Increase the interval duration as it progresses
        if(intervalDuration > 151){
            setIntervalDuration(intervalDuration - 40);
        }
      } else {
        clearInterval(intervalId);
      }
    }, intervalDuration);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentWordIndex, intervalDuration]);

  return <span id="change">{currentWord}</span>;
}

export default WordChanger;
