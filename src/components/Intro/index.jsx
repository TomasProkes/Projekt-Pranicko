import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';

const Intro = () => {
  return (
    <>
      <Header title={'Vánoční přání'} />

      <main className="actions">

        <Link className="action shadow" to="/design">
          <div className="action__inside">
            <div className="action__decoration"></div>
            <div className="action__content">
              <h2 className="action__title">
                <span className="laurels">Vytvořit</span>
                vánoční přáníčko
              </h2>
              <p className="action__description">Vytvoř si přáníčko na míru a&nbsp;pošli ho svým blízkým.</p>
            </div>
          </div>
        </Link>

        <Link className="action shadow" to="/collect">
          <div className="action__inside">
            <div className="action__decoration"></div>
            <div className="action__content">
              <h2 className="action__title">
                <span className="laurels">Vyzvednout</span>
                vánoční přáníčko
              </h2>
              <p className="action__description">Zadej kód a vyzvedni si svoje vánoční přáníčko.</p>
            </div>
          </div>
        </Link>

      </main>
    </>
  )
};

export default Intro;