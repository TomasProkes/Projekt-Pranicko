import React from 'react';
import SelectSnowOption from '../SelectSnowOption';

const SelectSnow = ({handleSnow, snowSet, snow}) => {
  const desc_snow_0 = 'bez sněhu'
  const desc_snow_1 = 'málo'
  const desc_snow_2 = 'hodně'
  
  return (
    <div className="field">
      <label className="field__label ">Sníh na pozadí</label>

      <SelectSnowOption intensity={0} desc='bez sněhu' is_checked={true} />
      <SelectSnowOption intensity={100} desc='málo' />
      <SelectSnowOption intensity={500} desc='hodně' />

    </div>
  )
};

export default SelectSnow;