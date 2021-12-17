import React from 'react';
import SelectCoverOption from '../SelectCoverOption';

const SelectCover = ({handleCover, coverSet, selection}) => (
  <div className="field">
    <label className="field__label">Obrázek na obálce</label>

    <div className="field__swatch-group field__swatch-group--big">
      {
        coverSet.map(cover => {
          const className = `swatch--cover-${cover.value}`
          const id = `cover-${cover.value}`
          const isChecked = cover.value === selection
          return <SelectCoverOption key={id} handleCover={handleCover} desc={cover.description} className={className} id={id} isChecked={isChecked} coverVal={cover.value} />

        })
      }
    </div>

  </div>
);

export default SelectCover;