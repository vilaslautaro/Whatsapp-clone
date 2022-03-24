import React from 'react';
import { auth } from '../firebase';

const SignOut = () => {

    const eventSignOut = () =>{
        auth.signOut()
    }

    return auth.currentUser && (
        <button className='sign-out' onClick={eventSignOut} >Salir</button>
    )
}

export default SignOut;
