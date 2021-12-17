import React from 'react';
import SelectMusicOption from '../SelectMusicOption';

const SelectMusic = ({handleMusic, musicSet, selection}) => {
  const desc_jingle_bells = 'Rolničky, rolničky'
  const desc_silent_night = 'Tichá noc'
  const desc_god_rest = 'Pokoj Vám'
  
  return (
    <div className="field">
      <label className="field__label">Hudba</label>

      <div className="field__radio-group">
        {
          musicSet.map(music => {
            const className = `radio--music`
            const id = `music-${music.value}`
            const isChecked = music.value === selection
            return <SelectMusicOption handleMusic={handleMusic} desc={music.description} className={className} id={id} isChecked={isChecked} musicVal={music.value} />
          })

        }
      </div>
    </div>
  )
};

export default SelectMusic;