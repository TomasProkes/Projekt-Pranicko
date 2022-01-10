import React from 'react';

const TextArea = ({handleText, text, maxTextLength}) => (
  <>
    <label className="field__label" htmlFor="text">Text uvnitř přáníčka</label>
    <textarea onChange={handleText} className="field__input" name="text" id="text" rows="3" maxLength={maxTextLength.toString()} autoComplete="off" value={text}></textarea>
  </>
);

export default TextArea;