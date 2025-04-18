import React from 'react';

const SelectCoverOption = ({handleCover, desc, id, className, isChecked, coverVal}) => (
  <div className="field__swatch">
    <input onChange={(e) => handleCover(e, coverVal)} type="radio" name="cover" id={id} checked={isChecked} />
    <label htmlFor={id} className={className} data-description={desc}></label>
  </div>
);

export default SelectCoverOption;