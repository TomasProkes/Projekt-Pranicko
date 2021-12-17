import React from 'react';

const SelectMusicOption = ({handleMusic, desc, id, className, isChecked, musicVal}) => {
  return (
    <div className="field__radio">
      <input onChange={(e) => handleMusic(e, musicVal)} type="radio" name="music" id={id} checked={isChecked} />
      <label htmlFor={id}>{desc}</label>
    </div>
  )
};

export default SelectMusicOption;