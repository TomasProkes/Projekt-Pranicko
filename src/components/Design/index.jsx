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

  const [background, setBackground] = useState('');
  const [color, setColor] = useState('');
  const [cover, setCover] = useState('');
  const [snow, setSnow] = useState('');
  const [music, setMusic] = useState('');
  const [text, setText] = useState('');
  const [sender, setSender] = useState('');

  const cardData = {};  // object 

  const handleBackground = (e) => {
    console.log('e.target.id : ' + e.target.id)
    setBackground(e.target.id)
  }
  const handleColor = (e) => {
    console.log(e.target.id)
    setColor(e.target.id)
  }
  const handleCover = (e) => {
    console.log(e.target.value)
    setCover(e.target.value)
  }
  const handleSnow = (e) => {
    console.log(e.target.value)
    setSnow(e.target.value)
  }
  const handleMusic = (e) => {
    console.log(e.target.value)
    setMusic(e.target.value)
  }
  const handleText = (e) => {
    console.log(e.target.value)
    setText(e.target.value)
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
              <SelectColor handleColor={handleColor} colorSet={configuration.colors} color={color} />

              {/* <!-- obrázek na obálce	--> */}
              <SelectCover handleCover={handleCover} coverSet={configuration.covers} cover={cover} />

              {/* <!-- intenzita sněžení na pozadí	--> */}
              <SelectSnow handleSnow={handleSnow} snowSet={configuration.snow} snow={snow} />

              {/* <!-- hudba	--> */}
              <SelectMusic handleMusic={handleMusic} musicSet={configuration.music} music={music} />

              {/* <!-- text	--> */}
              <EnterText handleText={handleText} text={text}/>

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