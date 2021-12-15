import React from 'react';

const SelectColorOption = ({handleColor, desc, id, className, isChecked, colorVal}) => (
  <div className="field__swatch">
    <input onChange={(e) => handleColor(e, colorVal)} type="radio" name="color" id={id} checked={isChecked} />
    <label for={id} className={className} data-description={desc}></label>
  </div>
);

export default SelectColorOption;