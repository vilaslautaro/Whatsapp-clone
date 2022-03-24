import React from 'react';
import Lottie from 'lottie-react';
import SingIn from './SingIn';
import configWhatsapp from '../lotties/lotties.js';


const Welcome = () => { 

    return (
        <main>
            <Lottie { ...configWhatsapp } />            
            <SingIn />
        </main>
    );
}

export default Welcome;
