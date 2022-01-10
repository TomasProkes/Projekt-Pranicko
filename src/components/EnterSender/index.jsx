import React from 'react';

const EnterSender = ({handleSender, sender, isInvalid}) => {
  
  return (
    <div className={isInvalid ? "field field--error" : "field"}>
      <label className="field__label" htmlFor="sender">Odesílatel (podpis)</label>
      {
        <input onChange={handleSender} className="field__input" type="text" name="sender" id="sender" rows="3" maxLength="20" autoComplete="off" value={sender} />
      }
    </div>
  )
};

export default EnterSender;