import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import EnterSender from '../EnterSender';
import EnterText from '../EnterText';
import Header from '../Header';
import SelectBackground from '../SelectBackground';
import SelectColor from '../SelectColor';
import SelectCover from '../SelectCover';
import SelectMusic from '../SelectMusic';
import SelectSnow from '../SelectSnow';
import configuration from '../../configuration';

//  TODO :  Design -> CardDesign
const Design = ({setCardId, apiBaseUrl}) => {
  const title='Vytvořit přáníčko';
  const maxTextLength = 100;

  const [background, setBackground] = useState('');
  const [backgroundError, setBackgroundError] = useState(false);
  const [color, setColor] = useState('');
  const [colorError, setColorError] = useState(false);
  const [cover, setCover] = useState('');
  const [coverError, setCoverError] = useState(false);
  const [snow, setSnow] = useState('');
  const [snowError, setSnowError] = useState(false);
  const [music, setMusic] = useState('');
  const [musicError, setMusicError] = useState(false);
  const [text, setText] = useState('');
  const [textError, setTextError] = useState(false);
  const [textLength, setTextLength] = useState(0);
  const [textLengthError, setTextLengthError] = useState(false);
  const [sender, setSender] = useState('');
  const [senderError, setSenderError] = useState(false);
  const [cardData, setCardData] = useState({});
  const navigate = useNavigate();

  const handleBackground = (e, backgroundVal) => {
    setCardData({...cardData, background: backgroundVal})
    setBackground(background => backgroundVal)
    // clear the error flag for this option because a new value has just been specified
    setBackgroundError(backgroundError => false)
  }
  
  const handleColor = (e, colorVal) => {
    setCardData({...cardData, color: colorVal})
    setColor(color => colorVal)
    // clear the error flag for this option because a new value has just been specified
    setColorError(colorError => false)
  }
  
  const handleCover = (e, coverVal) => {
    setCardData({...cardData, cover: coverVal})
    setCover(cover => coverVal)
    // clear the error flag for this option because a new value has just been specified
    setCoverError(coverError => false)
  }
  
  const handleSnow = (e, snowVal) => {
    console.log('---------------------------------')
    const newData = {snow: snowVal}
    setCardData({...cardData, ...newData})
    
    console.log('snowVal : ' + snowVal)  // TODO remove after debug
    console.log('e.target.id : ' + e.target.id)  // TODO remove after debug
    
    setSnow(snow => snowVal)
    console.log('snow : ')  // TODO remove after debug
    console.log(snow)  // TODO remove after debug
    console.log('cardData : ')  // TODO remove after debug
    console.log(cardData)  // TODO remove after debug
    console.log('---------------------------------')
    // clear the error flag for this option because a new value has just been specified
    setSnowError(snowError => false)
  }
  
  const handleMusic = (e, musicVal) => {
    console.log('---------------------------------')
    const newData = {music: musicVal}
    setCardData({...cardData, ...newData})
    
    console.log('musicVal : ' + musicVal)  // TODO remove after debug
    console.log('e.target.id : ' + e.target.id)  // TODO remove after debug
    
    setMusic(music => musicVal)
    console.log('music : ')  // TODO remove after debug
    console.log(music)  // TODO remove after debug
    console.log('cardData : ')  // TODO remove after debug
    console.log(cardData)  // TODO remove after debug
    console.log('---------------------------------')
    // clear the error flag for this option because a new value has just been specified
    setMusicError(musicError => false)
  }
  
  const handleText = (e) => {
    const textVal = e.target.value
    if (textVal.length <= maxTextLength) {
      const newData = {text: textVal}
      setCardData({...cardData, ...newData})
      setText(text => textVal)
      setTextLength(textLength => textVal.length)
      // clear the error flag for this option because a new value has just been specified
      setTextError(textError => false)
      setTextLengthError(textLengthError => false)
    } else {
      console.log('Byla dosažena maximální délka zprávy!!')
      setTextLengthError(textLengthError => true)
    }
    console.log('text : ' + text)
  }
  
  const handleSender = (e) => {
    const senderVal = e.target.value
    const newData = {sender: senderVal}
    setCardData({...cardData, ...newData})
    setSender(sender => senderVal)
    console.log('sender : ')  // TODO remove after debug
    console.log(sender)  // TODO remove after debug
    console.log('cardData : ')  // TODO remove after debug
    console.log(cardData)  // TODO remove after debug
    console.log('---------------------------------')
    // clear the error flag for this option because a new value has just been specified
    setSenderError(senderError => false)
  }

  const handleSubmitBtn = (e) => {
    e.preventDefault()
    console.log(e.target)
    console.log('Na server posilam tato data:')
    console.log(cardData)
    console.log('... po prevodu na String :')
    console.log(JSON.stringify( {...cardData} ))

    fetch(`${apiBaseUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {...cardData} )
    })
    .then(response => response.json())
    .then(data => {

      if (data.success) {
        console.log('Response data:')
        console.log(data);
        console.log('Card ID:')
        console.log(data.data.id);
        setCardId(data.data.id)
        navigate('/ready')
        
      } else {
        console.log('Validacni chyby vracene ze serveru:')
        console.log(data.errors)
        // TODO highlight the unfilled fields in the form
        for (let error of data.errors) {
          // TODO remove after debug
          console.log(error)
          if (error.includes('background')) {
            console.log('Setting the backgroundError flag to TRUE')  // TODO remove when not needed anymore
            setBackgroundError(backgroundError => true)
          } else if (error.includes('color')) {
            console.log('Setting the colorError flag to TRUE')  // TODO remove when not needed anymore
            setColorError(colorError => true)
          } else if (error.includes('cover')) {
            console.log('Setting the coverError flag to TRUE')  // TODO remove when not needed anymore
            setCoverError(coverError => true)
          } else if (error.includes('snow')) {
            console.log('Setting the snowError flag to TRUE')  // TODO remove when not needed anymore
            setSnowError(snowError => true)
          } else if (error.includes('music')) {
            console.log('Setting the musicError flag to TRUE')  // TODO remove when not needed anymore
            setMusicError(musicError => true)
          } else if (error.includes('text')) {
            console.log('Setting the textError flag to TRUE')  // TODO remove when not needed anymore
            setTextError(textError => true)
          } else if (error.includes('sender')) {
            console.log('Setting the senderError flag to TRUE')  // TODO remove when not needed anymore
            setSenderError(senderError => true)
            
          }
        }
      }
    })
  }

  return (
    <>
    	<Header title={title} />

      <main className="content">

        <div className="box">
          <div className="box__inside">

            <form className="configurator">

              {/* <!-- pozadí stránky	--> */}
              <SelectBackground handleBackground={handleBackground} backgroundSet={configuration.backgrounds} selection={background} isInvalid={backgroundError} />

              {/* <!-- barva přáníčka	--> */}
              <SelectColor handleColor={handleColor} colorSet={configuration.colors} selection={color} isInvalid={colorError} />

              {/* <!-- obrázek na obálce	--> */}
              <SelectCover handleCover={handleCover} coverSet={configuration.covers} selection={cover} isInvalid={coverError} />

              {/* <!-- intenzita sněžení na pozadí	--> */}
              <SelectSnow handleSnow={handleSnow} snowSet={configuration.snow} selection={snow} isInvalid={snowError} />

              {/* <!-- hudba	--> */}
              <SelectMusic handleMusic={handleMusic} musicSet={configuration.music} selection={music} isInvalid={musicError} />

              {/* <!-- text	--> */}
              <EnterText handleText={handleText} text={text} textLength={textLength} maxTextLength={maxTextLength} isInvalid={textError} />

              {/* <!-- odesílatel	--> */}
              <EnterSender handleSender={handleSender} sender={sender} isInvalid={senderError} />

              {/* <!-- tlačítko pro odeslání --> */}
              <button onClick={handleSubmitBtn} type="submit" className="button button--big mt-30">Uložit přáníčko</button>

            </form>

          </div>
        </div>

      </main>
    </>
  )   
};

export default Design;