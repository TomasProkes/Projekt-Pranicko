import React, { useState } from 'react';
import {
    useNavigate,
    Routes,
    Route,
} from 'react-router-dom';
import NavBar from '../NavBar';
import Intro from '../Intro';
import Design from '../Design';
import CardReady from '../CardReady';
import Collect from '../Collect';


const CreateCard = () => {
    const [cardId, setCardId] = useState('');
    const navigate = useNavigate();

    const createNewCard = () => {
        setCardId(cardId => '')
        navigate('/design')
    };

    return (
        <>
            <NavBar />

            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/design" element={<Design setCardId={setCardId} />} />
                <Route path="/ready" element={<CardReady cardId={cardId} createNewCard={createNewCard} />} />
                <Route path="/collect" element={<Collect />} />
            </Routes>

        </>
    )
}

export default CreateCard