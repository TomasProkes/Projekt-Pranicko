import React from 'react';
import SelectBackgroundOption from '../SelectBackgroundOption';

const SelectBackground = ({handleBackground, backgroundSet, selection, isInvalid}) => (
  <div className={isInvalid ? "field field--error" : "field"}>
    {
      isInvalid && <span className="field--error-text">Vyberte prosím barvu pozadí</span>
    }
    <label className="field__label">Pozadí stránky</label>

    <div className="field__swatch-group field__swatch-group--round">
      {
        backgroundSet.map(background => {
          const className = `swatch--${background.value}`
          const id = `background-${background.value}`
          const isChecked = background.value === selection
          return <SelectBackgroundOption key={id} handleBackground={handleBackground} desc={background.description} className={className} id={id} isChecked={isChecked} backgroundVal={background.value} />
        })
      }
    </div>

  </div>
);

export default SelectBackground;