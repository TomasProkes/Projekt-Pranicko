import React from 'react';
import SelectColorOption from '../SelectColorOption';

const SelectColor = ({handleColor, colorSet, selection, isInvalid}) => (
  <div className={isInvalid ? "field field--error" : "field"}>
    {
      isInvalid && <span className="field--error-text">Vyberte prosím barvu přáníčka</span>
    }
    <label className="field__label">Barva přáníčka</label>
    <div className="field__swatch-group field__swatch-group--round">
      {
        colorSet.map(color => {
          const className = `swatch--${color.value}`
          const id = `color-${color.value}`
          const isChecked = color.value === selection
          return <SelectColorOption key={id} handleColor={handleColor} desc={color.description} className={className} id={id} isChecked={isChecked} colorVal={color.value} />
        })
      }
    </div>
  </div>
);

export default SelectColor;