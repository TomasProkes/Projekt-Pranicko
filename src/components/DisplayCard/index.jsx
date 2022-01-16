import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../Card';

const DisplayCard = ({apiBaseUrl}) => {

  const { cardId } = useParams()
  console.log('api base url : ' + apiBaseUrl)
  console.log('ID : ' + cardId)
  const [cardData, setCardData] = useState({})
  const navigate = useNavigate()

  console.log('Fetching data now....')
  useEffect(() => {
    fetch(`${apiBaseUrl}/${cardId}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        setCardData(data.data)
      } else {
        console.log('Neplatny kod!!')
        navigate('/notfound')
      }
    })
  }, []);

  return (
    <>
      {
        cardData.cover && cardData.snow && cardData.music && <Card cardData={cardData} />
      }
    </>
  ) 

}

export default DisplayCard