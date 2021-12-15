import React from 'react';

const SelectCoverOption = ({theme, desc, is_checked}) => {
  return (
    <div className="field__swatch">
      <input type="radio" name="cover" id={`cover-${theme}`} checked={is_checked} />
      <label for={`cover-${theme}`} className={`swatch--cover-${theme}`} data-description={desc}></label>
    </div>
  )
};

export default SelectCoverOption;