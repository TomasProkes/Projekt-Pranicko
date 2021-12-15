import React from 'react';

const SelectBackgroundOption = ({handleBackground, desc, id, className, selection}) => (
  <div className="field__swatch">
    <input onChange={handleBackground} type="radio" name="background" id={id} checked={id === selection} />
    <label for={id} className={className} data-description={desc}></label>
  </div>
);

export default SelectBackgroundOption;