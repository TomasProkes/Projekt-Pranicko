import React from 'react';

const TextCharCounter = ({textLength, maxTextLength}) => {
  console.log('-- Inside TextCharCounter --')
  console.log('textLength : '+ textLength)
  console.log('maxTextLength : '+ maxTextLength)
  const charsRemaining = parseInt(maxTextLength) - parseInt(textLength)
  console.log('charsRemaining : ' + charsRemaining)
  return (
    <p className="field__description">Zbývá <strong>{charsRemaining}</strong>/{maxTextLength} znaků.</p>
  )
};

export default TextCharCounter;