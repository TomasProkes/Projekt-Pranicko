import React from 'react';
import TextArea from '../TextArea';
import TextCharCounter from '../TextCharCounter';

const EnterText = ({handleText, text, textLength, maxTextLength}) => {
  console.log('-- Inside EnterText --');
  console.log('textLength : ' + textLength);
  console.log('maxTextLength : ' + maxTextLength);

  return (
  <div className="field">
    <TextArea handleText={handleText} text={text} />
    {
      textLength && maxTextLength && <TextCharCounter textLength={textLength} maxTextLength={maxTextLength} />
    }
  </div>
)};

export default EnterText;