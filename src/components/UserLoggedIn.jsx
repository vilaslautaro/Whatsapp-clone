import React from 'react';
import { auth } from '../firebase';

const UserLoggedIn = () => {
    const {displayName, photoURL } = auth.currentUser;
    return (
        <>
           <img src={photoURL} alt="avatar" className='imgLoggedIn' /> <span className='nameLoggedIn'>{displayName}</span> 
        </>
    );
}

export default UserLoggedIn;
