import React from 'react';

const EnterText = ({handleText, text}) => {
  
  return (
    <div className="field">
      <label className="field__label" for="text">Text uvnitř přáníčka</label>
      <textarea className="field__input" name="text" id="text" rows="3" maxlength="100" autocomplete="off"></textarea>
      <p className="field__description">Zbývá <strong>37</strong>/100 znaků.</p>
    </div>
  )
};

export default EnterText;