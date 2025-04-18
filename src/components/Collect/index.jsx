import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';

//  TODO :  Collect ->  CardPickup
const Collect = ({apiBaseUrl}) => {
  const title = 'Vyzvednout přáníčko'
  const labelText = 'Zadej šestimístný kód přáníčka'
  const [pickupId, setPickupId] = useState('')
  const [pickupIdTooShort, setPickupIdTooShort] = useState(false)
  // TODO pickupIdInvalid => pickupIdNotFound !!  (to make the code clear)
  const [pickupIdInvalid, setPickupIdInvalid] = useState(false)
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setPickupId(pickupId => e.target.value)
  }

  const handleCollectBtn = (e) => {
    e.preventDefault()

    if (pickupId.length === 6) {
      fetch(`${apiBaseUrl}/${pickupId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // setCardData(data.data)
          navigate(`/card/${pickupId}`)
        } else {
          setPickupIdTooShort(false)
          console.log('Code not found :')
          console.log(pickupId)
          setPickupIdInvalid(true)
        }
      })

    } else {
      setPickupIdInvalid(false)
      console.log('Code too short :')
      console.log(pickupId)
      setPickupIdTooShort(true)
    }
  }

  return (
    <>
    	<Header title={title} />

      <main className="content">

        <form className="pickup" autoComplete="off">
          <label htmlFor="pickup-code" className="pickup__label">{labelText}</label>

          <div className="box shadow mb-30">
            <div className={pickupIdTooShort || pickupIdInvalid ? "box__inside pt-0 pb-0 box__inside--error" : "box__inside pt-0 pb-0"}>
              {
                pickupIdTooShort && <span className='box__inside--error-text'>Kód musí být šestimístný, překontrolujte jej prosím</span>
              }
              {
                pickupIdInvalid && <span className='box__inside--error-text'>Kód nebyl nalezen, překontrolujte jej prosím</span>
              }
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