import React from 'react';

const SelectCoverOption = ({handleCover, desc, id, className, isChecked, coverVal}) => {
  return (
    <div className="field__swatch">
      <input onChange={(e) => handleCover(e, coverVal)} type="radio" name="cover" id={id} checked={isChecked} />
      <label for={id} className={className} data-description={desc}></label>
    </div>
  )
};

export default SelectCoverOption;