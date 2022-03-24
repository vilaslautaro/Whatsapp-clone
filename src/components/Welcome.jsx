import React from 'react';
import Lottie from 'lottie-react';
import SignIn from './SignIn';
import * as animationData from '../assets/animations/whatsapp.json';


const Welcome = () => {

    const defaultOptions = {
        loop: false,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };    

    return (
        <main>
            <Lottie options={defaultOptions}
                    height={250}
                    width={250}
                    isStopped={false}
                    isPaused={false}
                    style={{ marginTop: "10%", marginBottom: 40}}
                    />            
            <SignIn />
        </main>
    );
}

export default Welcome;
