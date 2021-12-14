import React from 'react';
import SelectColorOption from '../SelectColorOption';

const SelectColor = () => {
  const desc_red = 'červená'
  const desc_green = 'zelená'
  const desc_blue = 'modrá'
  const desc_gold = 'zlatá'
  
  return (
    <div className="field">
      <label className="field__label">Barva přáníčka</label>

      <div className="field__swatch-group field__swatch-group--round">

        <SelectColorOption theme='red' desc={desc_red} is_checked={true} />
        <SelectColorOption theme='green' desc={desc_green} />
        <SelectColorOption theme='blue' desc={desc_blue} />
        <SelectColorOption theme='gold' desc={desc_gold} />

      </div>

    </div>
  )
};

export default SelectColor;