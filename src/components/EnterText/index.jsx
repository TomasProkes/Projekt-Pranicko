import React from 'react';
import TextArea from '../TextArea';
import TextCharCounter from '../TextCharCounter';

const EnterText = ({handleText, text, textLength, maxTextLength, textError, textLengthError}) => {
  const isInvalid = textError || textLengthError

  return (
    <div className={isInvalid ? "field field--error" : "field"}>
      {
        isInvalid && <span className="field--error-text">Vyplňte prosím text přáníčka</span>
      }
      {
        maxTextLength && <TextArea handleText={handleText} text={text} maxTextLength={maxTextLength} />
      }
      {
        maxTextLength && <TextCharCounter textLength={textLength} maxTextLength={maxTextLength} />
      }
    </div>
  )
};

export default EnterText;