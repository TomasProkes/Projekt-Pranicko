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
  const [cardData, setCardData] = useState({});  // empty object TODO remove

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

  const handleText = (e, textVal, maxTextLength) => {
    console.log('-------------- text -------------')
    console.log('e.target.value : ' + e.target.value)
    if (length(textVal) > maxTextLength) {
      setText(text => textVal)
      setTextLength(textLength => length(textVal))
    } else {
      console.log('Byla dosazena maximalni delka zpravy!!')
    }
    console.log('text : ' + text)
  }

  const handleSender = (e) => {
    console.log(e.target.value)
    setSender(e.target.value)
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