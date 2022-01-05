import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Card';

const DisplayCard = ({apiBaseUrl}) => {
  const { id } = useParams()
  const [cardData, setCardData] = useState(null)

  useEffect(() => {
    fetch(`${apiBaseUrl}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        setCardData(data.data)
      } else {
        console.log('Neplatny kod')
        // redirect to NoCardFound
      }
    })
  }, []);

  return cardData && <Card cardData={cardData} />

}

export default DisplayCard