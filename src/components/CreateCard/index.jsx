import React from 'react';
import {
    Routes,
    Route,
} from 'react-router-dom';
import NavBar from '../NavBar';
import Intro from '../Intro';
import Design from '../Design';
import Collect from '../Collect';


const CreateCard = () => {
    return (
        <>
            <NavBar />

            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/design" element={<Design />} />
                <Route path="/collect" element={<Collect />} />
            </Routes>

        </>
    )
}

export default CreateCard