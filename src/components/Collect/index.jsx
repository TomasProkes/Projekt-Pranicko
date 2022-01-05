import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';

//  TODO :  Collect ->  CardPickup
const Collect = () => {
  const title = 'Vyzvednout přáníčko'
  const labelText = 'Zadej šestimístný kód přáníčka'
  const [pickupId, setPickupId] = useState('')
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setPickupId(pickupId => e.target.value)
  }

  const handleCollectBtn = (e) => {
    e.preventDefault()

    if (pickupId.length === 6) {
      navigate(`/card/${pickupId}`)
    } else {
      console.log(pickupId)
      // TODO add validation msg about insufficient card id length
    }
  }

  return (
    <>
    	<Header title={title} />

      <main className="content">

        <form className="pickup" autoComplete="off">
          <label htmlFor="pickup-code" className="pickup__label">{labelText}</label>

          <div className="box shadow mb-30">
            <div className="box__inside pt-0 pb-0">

              <input onChange={handleInputChange} id="pickup-code" className="pickup__code" type="text" maxLength="6" autoComplete="off" value={pickupId}/>

            </div>
          </div>

          <button onClick={handleCollectBtn} className="button button--big">{title}</button>

        </form>

      </main>
    </>
  )   
}

export default Collect