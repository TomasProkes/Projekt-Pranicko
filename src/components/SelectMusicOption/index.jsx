import React from 'react';

const SelectMusicOption = ({handleMusic, desc, id, className, isChecked, musicVal}) => (
  <div className="field__radio">
    <input onChange={(e) => handleMusic(e, musicVal)} type="radio" name="music" id={id} checked={isChecked} />
    <label htmlFor={id} className={className}>{desc}</label>
  </div>
);

export default SelectMusicOption;