"use client"
import React, { useState, useEffect } from 'react';

export  const Typewriter: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['software Engineer', 'web designer' , 'Free time photographer' , 'Tech enthusiast' , 'Free time footballer'];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <span style={{ color: '#dd7732' }}>
      {text}
      <span style={{ opacity: '0.7' }}>|</span>
    </span>
  );
};

