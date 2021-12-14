import React from 'react';

const EnterSender = () => {
  
  return (
    <div className="field">
      <label className="field__label" for="sender">Odesílatel (podpis)</label>
      <input className="field__input" type="text" name="sender" id="sender" rows="3" maxlength="20" autocomplete="off" />
    </div>
  )
};

export default EnterSender;