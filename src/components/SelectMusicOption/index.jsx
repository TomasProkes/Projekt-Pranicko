import React from 'react';

const SelectMusicOption = ({theme, desc, is_checked}) => {
  return (
    <div className="field__radio">
      <input type="radio" name="music" id={`music-${theme}`} checked={is_checked} />
      <label for={`music-${theme}`}>{desc}</label>
    </div>
  )
};

export default SelectMusicOption;