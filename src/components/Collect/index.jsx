import React from 'react';

import Header from '../Header';

//  TODO :  Collect ->  CardPickup
const Collect = () => {
  const title = 'Vyzvednout přáníčko';
  const labelText = 'Zadej šestimístný kód přáníčka';

  return (
    <>
    	<Header title={title} />

      <main class="content">

        <form class="pickup" autocomplete="off">
          <label for="pickup-code" class="pickup__label">{labelText}</label>

          <div class="box shadow mb-30">
            <div class="box__inside pt-0 pb-0">

              <input id="pickup-code" class="pickup__code" type="text" maxlength="6" autocomplete="off" />

            </div>
          </div>

          <button class="button button--big">{title}</button>

        </form>

      </main>
    </>
  )   
};

export default Collect;