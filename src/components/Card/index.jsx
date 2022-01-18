import React, { useState } from 'react';
import Snowfall from 'react-snowfall';
import { useAudio } from '../../hooks/useAudio';

const Card = ({cardData}) => {
  const [isPlaying, play, pause] = useAudio(`/assets/audio/${cardData.music}.mp3`)
  const [isOpen, setOpen] = useState(false)

  const toggleAppearance = () => {
    if (isOpen) {
      pause()
      setOpen(false)
    } else {
      play()
      setOpen(true)
    }
  }

  return (
    <>
      {/* <!--
        Div element for the background theme of the greeting card. The class can be any of:
        .background--red, .background--green, .background--blue, .background--gold
        .background--tree, .background--decorations, .background--snow

        E.g. golden background will be specified as:
        <div className="background background--gold">
      --> */}
      <div className={`background background--${cardData.background}`}>

        <div className="snow">
          {/* <!--
            Display the snowflakes falling in the background, using the react-snowfall library:

            https://www.npmjs.com/package/react-snowfall

            Usage example:
            <Snowfall snowflakeCount={200} />
          --> */}
          <Snowfall snowflakeCount={cardData.snow} />
        </div>


        {/* <!-- Clicking this div opens or closes the greeting card --> */}
        <div onClick={toggleAppearance} className={isOpen ? `card card--open card--${cardData.color}` : `card card--${cardData.color}`}>

          {/* <!-- Outside cover --> */}
          <div className="cover">
            <img className="cover__image" src={`/assets/images/covers/${cardData.cover}.svg`} />
          </div>

          {/* <!-- Inner left page of the card, containing the text and the sender's name --> */}
          <div className="inside-left">
            <div className="inside-left__content">
              <div className="inside-left__text">{cardData.text}</div>
              <div className="inside-left__sender">{cardData.sender}</div>
            </div>
            <img className="inside-left__logo" src="/assets/images/czechitas.svg" alt="Czechitas" />
          </div>

          {/* <!--
            Inner right page of the card, contaning the photos.
            The size and the 2:3 ratio of the photos needs to be preserved at the moment 
            since the CSS does not expect different ones.
          --> */}
          <div className="inside-right">
            <div className="photo photo1"><img src="/assets/images/photos/photo1.jpg" /></div>
            <div className="photo photo2"><img src="/assets/images/photos/photo2.jpg" /></div>
            <div className="photo photo3"><img src="/assets/images/photos/photo3.jpg" /></div>
            <div className="photo photo4"><img src="/assets/images/photos/photo4.jpg" /></div>
          </div>

          <p className="instructions">Kliknutím {isOpen ? "zavřete" : "otevřete"}</p>

          {/* </div><!-- end of the .card --> */}
        </div>

        {/* <!-- konec .background --> */}
      </div>
    </>
  )
}

export default Card