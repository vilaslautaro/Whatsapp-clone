import React from 'react';
import Lottie from 'lottie-react';
import SignIn from './SignIn';
import configWhatsapp from '../lotties/lotties.js';


const Welcome = () => { 

    return (
        <main>
            <Lottie { ...configWhatsapp } />            
            <SignIn />
        </main>
    );
}

export default Welcome;
