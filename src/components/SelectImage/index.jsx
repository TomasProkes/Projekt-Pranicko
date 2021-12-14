import React from 'react';
import SelectImageOption from '../SelectImageOption';

const SelectImage = () => {
  const desc_gifts = 'dárečky'
  const desc_decorations = 'ozdoby'
  const desc_snowflakes = 'vločky'
  const desc_trees = 'stromečky'
  
  return (
    <div className="field">
      <label className="field__label">Obrázek na obálce</label>

      <div className="field__swatch-group field__swatch-group--big">

        <SelectImageOption theme='gifts' desc={desc_gifts} is_checked={true} />
        <SelectImageOption theme='decorations' desc={desc_decorations} />
        <SelectImageOption theme='snowflakes' desc={desc_snowflakes} />
        <SelectImageOption theme='trees' desc={desc_trees} />

      </div>

    </div>
  )
};

export default SelectImage;