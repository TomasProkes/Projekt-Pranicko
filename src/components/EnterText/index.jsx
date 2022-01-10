import React from 'react';
import TextArea from '../TextArea';
import TextCharCounter from '../TextCharCounter';

const EnterText = ({handleText, text, textLength, maxTextLength}) => {
  console.log('-- Inside EnterText --');
  console.log('textLength : ' + textLength);
  console.log('maxTextLength : ' + maxTextLength);

  return (
  <div className="field">
    {
      maxTextLength && <TextArea handleText={handleText} text={text} maxTextLength={maxTextLength} />
    }
    {
      maxTextLength && <TextCharCounter textLength={textLength} maxTextLength={maxTextLength} />
    }
  </div>
)};

export default EnterText;