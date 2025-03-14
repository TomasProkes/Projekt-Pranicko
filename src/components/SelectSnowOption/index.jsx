import React from 'react';

const SelectSnowOption = ({handleSnow, desc, id, className, isChecked, snowVal}) => (
  <div className="field__radio">
    <input onChange={(e) => handleSnow(e, snowVal)} type="radio" name="snow" id={id} checked={isChecked} />
    <label htmlFor={id} className={className}>{desc}</label>
  </div>
);

export default SelectSnowOption;