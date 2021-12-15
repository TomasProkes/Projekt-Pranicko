import React from 'react';

const SendCard = ({handleSubmitBtn, cardData}) => {

  // const handleClick = (e) => {
  //   console.log(e.target.value);
  // }
  
  return (
    <button onClick={handleSubmitBtn} type="submit" className="button button--big mt-30">Uložit přáníčko</button>    
  )
};

export default SendCard;