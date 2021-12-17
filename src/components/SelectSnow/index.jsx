import React from 'react';
import SelectSnowOption from '../SelectSnowOption';

const SelectSnow = ({handleSnow, snowSet, selection}) => (
  <div className="field">
    <label className="field__label ">Sníh na pozadí</label>

    <div className="field__radio-group">
      {
        snowSet.map(snow => {
          const className = `radio--snow`
          const id = `snow-${Math.ceil(snow.value / 250)}`
          const isChecked = snow.value === selection
          return <SelectSnowOption key={id} handleSnow={handleSnow} desc={snow.description} className={className} id={id} isChecked={isChecked} snowVal={snow.value} />
        })
      }
    </div>
  </div>
);

export default SelectSnow;