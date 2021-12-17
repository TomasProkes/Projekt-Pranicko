import React from 'react';

const EnterSender = ({handleSender, sender}) => {
  
  return (
    <div className="field">
      <label className="field__label" htmlFor="sender">Odesílatel (podpis)</label>
      <input className="field__input" type="text" name="sender" id="sender" rows="3" maxLength="20" autoComplete="off" />
    </div>
  )
};

export default EnterSender;