import React from 'react';
import SelectCoverOption from '../SelectCoverOption';

const SelectCover = ({handleCover, coverSet, cover}) => {
  const desc_gifts = 'dárečky'
  const desc_decorations = 'ozdoby'
  const desc_snowflakes = 'vločky'
  const desc_trees = 'stromečky'
  
  return (
    <div className="field">
      <label className="field__label">Obrázek na obálce</label>

      <div className="field__swatch-group field__swatch-group--big">

        <SelectCoverOption theme='gifts' desc={desc_gifts} is_checked={true} />
        <SelectCoverOption theme='decorations' desc={desc_decorations} />
        <SelectCoverOption theme='snowflakes' desc={desc_snowflakes} />
        <SelectCoverOption theme='trees' desc={desc_trees} />

      </div>

    </div>
  )
};

export default SelectCover;