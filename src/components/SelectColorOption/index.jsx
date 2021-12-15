import React from 'react';

const SelectColorOption = ({theme, desc, is_checked}) => {
  return (
    <div className="field__swatch">
      <input type="radio" name="color" id={`color-${theme}`} checked={is_checked} />
      <label for={`color-${theme}`} className={`swatch--${theme}`} data-description={desc}></label>
    </div>
  )
};

export default SelectColorOption;