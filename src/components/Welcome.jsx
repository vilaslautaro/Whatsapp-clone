import React from 'react';
import Lottie from 'lottie-react';
import SingIn from './SignIn';
import configWhatsapp from '../lotties/lotties.js';


const Welcome = () => { 

    return (
        <main>
            <Lottie className="lottie" { ...configWhatsapp } />            
            <SingIn />
        </main>
    );
}

export default Welcome;
