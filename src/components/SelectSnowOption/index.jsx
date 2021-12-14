import React from 'react';

const SelectSnowOption = ({intensity, desc, is_checked}) => {
  const theme = `snow-${Math.ceil(intensity / 250)}`

  return (
    <div className="field__radio">
      <input type="radio" name="snow" id={theme} checked={is_checked} />
      <label for={theme}>{desc}</label>
    </div>
  )
};

export default SelectSnowOption;