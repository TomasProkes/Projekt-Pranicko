import React from 'react';
import SelectBackgroundOption from '../SelectBackgroundOption';

const SelectBackground = () => {
  const desc_red = 'červená'
  const desc_green = 'zelená'
  const desc_blue = 'modrá'
  const desc_gold = 'zlatá'
  const desc_tree = 'stromeček'
  const desc_decorations = 'ozdoby'
  const desc_snow = 'sníh'

  return (
    <div className="field">
      <label className="field__label">Pozadí stránky</label>

      <div className="field__swatch-group field__swatch-group--round">

        <SelectBackgroundOption theme='red' desc={desc_red} is_checked={true} />
        <SelectBackgroundOption theme='green' desc={desc_green} />
        <SelectBackgroundOption theme='blue' desc={desc_blue} />
        <SelectBackgroundOption theme='gold' desc={desc_gold} />
        <SelectBackgroundOption theme='tree' desc={desc_tree} />
        <SelectBackgroundOption theme='decorations' desc={desc_decorations} />
        <SelectBackgroundOption theme='snow' desc={desc_snow} />

      </div>

    </div>
  )
};

export default SelectBackground;