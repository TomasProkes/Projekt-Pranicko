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
import NoCardFound from '../NoCardFound';

//  TODO rename  CreateCard => ManageCard
const CreateCard = ({apiBaseUrl}) => {
    const [cardId, setCardId] = useState('')
    const navigate = useNavigate()

    const createNewCard = () => {
        setCardId(cardId => '')
        navigate('/design')
    }

    return (
        <>
            <NavBar />
            <Routes>
                <Route path="*" element={<Intro />} />
                <Route path="/design" element={<Design setCardId={setCardId} apiBaseUrl={apiBaseUrl} />} />
                <Route path="/ready" element={<CardReady cardId={cardId} createNewCard={createNewCard} />} />
                <Route path="/collect" element={<Collect apiBaseUrl={apiBaseUrl} />} />
                <Route path="/notfound" element={<NoCardFound />} />
            </Routes>
        </>
    )
}

export default CreateCard