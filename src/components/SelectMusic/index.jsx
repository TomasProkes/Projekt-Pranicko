import React from 'react';
import SelectMusicOption from '../SelectMusicOption';

const SelectMusic = ({handleMusic, musicSet, selection, isInvalid}) => {
  const className = `radio--music`
  
  return (
    <div className={isInvalid ? "field field--error" : "field"}>
      <label className="field__label">Hudba</label>
      <div className="field__radio-group">
        {
          musicSet.map(music => {
            const id = `music-${music.value}`
            const isChecked = music.value === selection
            return <SelectMusicOption key={id} handleMusic={handleMusic} desc={music.description} className={className} id={id} isChecked={isChecked} musicVal={music.value} />
          })

        }
      </div>
    </div>
  )
};

export default SelectMusic;