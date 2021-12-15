import React from 'react';
import SelectBackgroundOption from '../SelectBackgroundOption';

const SelectBackground = ({handleBackground, backgroundSet, selection}) => (
  <div className="field">
    <label className="field__label">Pozadí stránky</label>

    <div className="field__swatch-group field__swatch-group--round">
      {
        backgroundSet.map(background => {
          const className = `swatch--${background.value}`;
          const id = `background-${background.value}`;
          return <SelectBackgroundOption handleBackground={handleBackground} desc={background.description} className={className} id={id} selection={selection} />
        })
      }
    </div>

  </div>
);

export default SelectBackground;