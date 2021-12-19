import React from 'react';

const TextArea = ({handleText, text}) => (
  <>
    <label className="field__label" htmlFor="text">Text uvnitř přáníčka</label>
    <textarea onChange={handleText} className="field__input" name="text" id="text" rows="3" maxLength="100" autoComplete="off" value={text}></textarea>
  </>
);

export default TextArea;