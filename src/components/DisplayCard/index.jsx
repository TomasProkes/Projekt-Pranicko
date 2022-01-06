import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Card';

const DisplayCard = ({apiBaseUrl}) => {
  const { id } = useParams()
  console.log('api base url : ' + apiBaseUrl)
  console.log('ID : ' + id)
  const [cardData, setCardData] = useState({})

  console.log('Fetching data now....')
  useEffect(() => {
    fetch(`${apiBaseUrl}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        setCardData(data.data)
      } else {
        console.log('Neplatny kod!!')
        // redirect to NoCardFound
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