import React from 'react';
import SelectMusicOption from '../SelectMusicOption';

const SelectMusic = ({handleMusic, musicSet, music}) => {
  const desc_jingle_bells = 'Rolničky, rolničky'
  const desc_silent_night = 'Tichá noc'
  const desc_god_rest = 'Pokoj Vám'
  
  return (
    <div className="field">
      <label className="field__label">Hudba</label>

      <div className="field__radio-group">
        <SelectMusicOption theme='jingle-bells' desc={desc_jingle_bells} is_checked={true} />
        <SelectMusicOption theme='silent-night' desc={desc_silent_night} />
        <SelectMusicOption theme='god-rest' desc={desc_god_rest} />

      </div>
    </div>
  )
};

export default SelectMusic;