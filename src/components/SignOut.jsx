import React from 'react';
import { auth } from '../firebase';

const SignOut = () => {
    return auth.currentUser && (
        <button className='sign-out' onClick={auth.signOut} >Salir</button>
    )
}

export default SignOut;
