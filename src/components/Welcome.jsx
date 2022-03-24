import React from 'react';
import Lottie from 'lottie-react';
import SignIn from './SignIn';
import configWhatsapp from '../assets/Lotties/lotties';


const Welcome = () => { 

    return (
        <main>
            <Lottie { ...configWhatsapp } />            
            <SignIn />
        </main>
    );
}

export default Welcome;
