import React from 'react';
import EnterSender from '../EnterSender';
import EnterText from '../EnterText';
import Header from '../Header';
import SelectBackground from '../SelectBackground';
import SelectColor from '../SelectColor';
import SelectImage from '../SelectImage';
import SelectMusic from '../SelectMusic';
import SelectSnow from '../SelectSnow';
import SendCard from '../SendCard';

const Design = () => {
  const title='Vytvořit přáníčko';

  return (
    <>
    	<Header title={title} />

      <main className="content">

        <div className="box">
          <div className="box__inside">

            <form className="configurator">

              {/* <!-- pozadí stránky	--> */}
              <SelectBackground />

              {/* <!-- barva přáníčka	--> */}
              <SelectColor />

              {/* <!-- obrázek na obálce	--> */}
              <SelectImage />

              {/* <!-- intenzita sněžení na pozadí	--> */}
              <SelectSnow />

              {/* <!-- hudba	--> */}
              <SelectMusic />

              {/* <!-- text	--> */}
              <EnterText />

              {/* <!-- odesílatel	--> */}
              <EnterSender />

              {/* <!-- tlačítko pro odeslání --> */}
              <SendCard />

            </form>

          </div>
        </div>

      </main>
    </>
  )   
};

export default Design;