import React, { useState, useEffect } from 'react';
import EnterSender from '../EnterSender';
import EnterText from '../EnterText';
import Header from '../Header';
import SelectBackground from '../SelectBackground';
import SelectColor from '../SelectColor';
import SelectCover from '../SelectCover';
import SelectMusic from '../SelectMusic';
import SelectSnow from '../SelectSnow';
import SendCard from '../SendCard';

import configuration from '../../configuration';

const Design = () => {
  const title='Vytvořit přáníčko';
  const maxTextLength = 100;

  const [background, setBackground] = useState('');
  const [color, setColor] = useState('');
  const [cover, setCover] = useState('');
  const [snow, setSnow] = useState('');
  const [music, setMusic] = useState('');
  const [text, setText] = useState('');
  const [textLength, setTextLength] = useState(0);
  const [sender, setSender] = useState('');
  const [cardData, setCardData] = useState({});

  const handleBackground = (e, backgroundVal) => {
    console.log('---------------------------------')
    const newData = {background: backgroundVal}
    setCardData({...cardData, ...newData})  // TODO move to Submit btn handler

    console.log('backgroundVal : ' + backgroundVal) // TODO remove after debug
    console.log('e.target.id : ' + e.target.id)  // TODO remove after debug

    setBackground(background => backgroundVal)
    console.log('background : ')  // TODO remove after debug
    console.log(background)  // TODO remove after debug
    console.log('cardData : ')  // TODO remove after debug
    console.log(cardData)  // TODO remove after debug
    console.log('---------------------------------')
  }

  const handleColor = (e, colorVal) => {
    console.log('---------------------------------')
    const newData = {color: colorVal}
    setCardData({...cardData, ...newData})  // TODO move to Submit btn handler  ???

    console.log('colorVal : ' + colorVal)  // TODO remove after debug
    console.log('e.target.id : ' + e.target.id)  // TODO remove after debug

    setColor(color => colorVal)
    console.log('color : ')  // TODO remove after debug
    console.log(color)  // TODO remove after debug
    console.log('cardData : ')  // TODO remove after debug
    console.log(cardData)  // TODO remove after debug
    console.log('---------------------------------')
  }

  const handleCover = (e, coverVal) => {
    console.log('---------------------------------')
    const newData = {cover: coverVal}
    setCardData({...cardData, ...newData})  // TODO move to Submit btn handler  ???

    console.log('coverVal : ' + coverVal)  // TODO remove after debug
    console.log('e.target.id : ' + e.target.id)  // TODO remove after debug

    setCover(cover => coverVal)
    console.log('cover : ')  // TODO remove after debug
    console.log(cover)  // TODO remove after debug
    console.log('cardData : ')  // TODO remove after debug
    console.log(cardData)  // TODO remove after debug
    console.log('---------------------------------')
  }

  const handleSnow = (e, snowVal) => {
    console.log('---------------------------------')
    const newData = {snow: snowVal}
    setCardData({...cardData, ...newData})  // TODO move to Submit btn handler  ???

    console.log('snowVal : ' + snowVal)  // TODO remove after debug
    console.log('e.target.id : ' + e.target.id)  // TODO remove after debug

    setSnow(snow => snowVal)
    console.log('snow : ')  // TODO remove after debug
    console.log(snow)  // TODO remove after debug
    console.log('cardData : ')  // TODO remove after debug
    console.log(cardData)  // TODO remove after debug
    console.log('---------------------------------')
  }

  const handleMusic = (e, musicVal) => {
    console.log('---------------------------------')
    const newData = {music: musicVal}
    setCardData({...cardData, ...newData})  // TODO move to Submit btn handler  ???

    console.log('musicVal : ' + musicVal)  // TODO remove after debug
    console.log('e.target.id : ' + e.target.id)  // TODO remove after debug

    setMusic(music => musicVal)
    console.log('music : ')  // TODO remove after debug
    console.log(music)  // TODO remove after debug
    console.log('cardData : ')  // TODO remove after debug
    console.log(cardData)  // TODO remove after debug
    console.log('---------------------------------')
  }

  const handleText = (e) => {
    const textVal = e.target.value
    console.log('-------------- text -------------')
    console.log('e.target.value : ' + textVal)
    console.log('textVal.length : ' + textVal.length)
    console.log('maxTextLength : ' + maxTextLength)
    if (textVal.length <= maxTextLength) {
      const newData = {text: textVal}
      setCardData({...cardData, ...newData})  // TODO move to Submit btn handler  ???
      setText(text => textVal)
      setTextLength(textLength => textVal.length)
    } else {
      console.log('Byla dosažena maximální délka zprávy!!')
      // TODO add validation warning msg
    }
    console.log('text : ' + text)
  }

  const handleSender = (e) => {
    const senderVal = e.target.value
    console.log('-------------- text -------------')
    console.log('senderVal (e.target.value) : ' + senderVal)
    console.log(e.target.value)

    const newData = {sender: senderVal}
    setCardData(...cardData, ...newData)
    setSender(sender => senderVal)
    console.log('sender : ')  // TODO remove after debug
    console.log(sender)  // TODO remove after debug
    console.log('cardData : ')  // TODO remove after debug
    console.log(cardData)  // TODO remove after debug
    console.log('---------------------------------')
  }

  const handleSubmitBtn = (e) => {
    console.log(e.target.value)
  }

  return (
    <>
    	<Header title={title} />

      <main className="content">

        <div className="box">
          <div className="box__inside">

            <form className="configurator">

              {/* <!-- pozadí stránky	--> */}
              <SelectBackground handleBackground={handleBackground} backgroundSet={configuration.backgrounds} selection={background} />

              {/* <!-- barva přáníčka	--> */}
              <SelectColor handleColor={handleColor} colorSet={configuration.colors} selection={color} />

              {/* <!-- obrázek na obálce	--> */}
              <SelectCover handleCover={handleCover} coverSet={configuration.covers} selection={cover} />

              {/* <!-- intenzita sněžení na pozadí	--> */}
              <SelectSnow handleSnow={handleSnow} snowSet={configuration.snow} selection={snow} />

              {/* <!-- hudba	--> */}
              <SelectMusic handleMusic={handleMusic} musicSet={configuration.music} selection={music} />

              {/* <!-- text	--> */}
              <EnterText handleText={handleText} text={text} textLength={textLength} maxTextLength={maxTextLength}/>

              {/* <!-- odesílatel	--> */}
              <EnterSender handleSender={handleSender} sender={sender} />

              {/* <!-- tlačítko pro odeslání --> */}
              <SendCard handleSubmitBtn={handleSubmitBtn} cardData={cardData} />

            </form>

          </div>
        </div>

      </main>
    </>
  )   
};

export default Design;