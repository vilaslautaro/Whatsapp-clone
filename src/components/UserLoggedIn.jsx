import React from 'react';
import { auth } from '../firebase';

const UserLoggedIn = () => {
    const {displayName, photoURL } = auth.currentUser;
    return (
        <>
           <img src={photoURL} alt="avatar" /> {displayName} 
        </>
    );
}

export default UserLoggedIn;
