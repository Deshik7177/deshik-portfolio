"use client";

import { useState, useEffect } from 'react';

const headlines = ['Fullstack Developer', 'Techie', 'AI Enthusiast'];

export function AnimatedHeadline() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % headlines.length);
        setFade(true); // Start fade in
      }, 500); // Duration of fade out
    }, 3000); // Time each headline is displayed + fade out time

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`transition-opacity duration-500 ease-in-out ${
        fade ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {headlines[index]}
    </span>
  );
}
