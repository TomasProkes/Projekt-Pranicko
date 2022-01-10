import React from 'react';

const TextArea = ({handleText, text, maxLength}) => (
  <>
    <label className="field__label" htmlFor="text">Text uvnitř přáníčka</label>
    {/* change maxLength back to 100 when validation tests are finished */}
    <textarea onChange={handleText} className="field__input" name="text" id="text" rows="3" maxLength={maxLength} autoComplete="off" value={text}></textarea>
  </>
);

export default TextArea;