import React from 'react';

const SelectBackgroundOption = ({theme, desc, is_checked}) => {
  return (
    <div className="field__swatch">
      <input type="radio" name="background" id={`background-${theme}`} checked={is_checked} />
      <label for={`background-${theme}`} className={`swatch--${theme}`} data-description={desc}></label>
    </div>
  )
};

export default SelectBackgroundOption;