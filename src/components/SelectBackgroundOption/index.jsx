import React from 'react';

const SelectBackgroundOption = ({handleBackground, desc, id, className, isChecked, backgroundVal}) => (
  <div className="field__swatch">
    <input onChange={(e) => handleBackground(e, backgroundVal)} type="radio" name="background" id={id} checked={isChecked} />
    <label htmlFor={id} className={className} data-description={desc}></label>
  </div>
);

export default SelectBackgroundOption;