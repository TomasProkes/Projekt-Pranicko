import React from 'react';

const TextCharCounter = ({textLength, maxTextLength}) => {
  const charsRemaining = parseInt(maxTextLength) - parseInt(textLength)
  return (
    <p className="field__description">Zbývá <strong>{charsRemaining}</strong>/{maxTextLength} znaků.</p>
  )
};

export default TextCharCounter;