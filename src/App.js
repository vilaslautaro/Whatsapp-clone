import './App.css';
import { auth } from './firebase';
import { useState, useEffect } from 'react';
import UserLoggedIn from './components/UserLoggedIn';
import SignOut from './components/SignOut';
import Chat from './components/Chat';
import Welcome from './components/Welcome';
import WebFont from 'webfontloader';


const App = () => {

  const [user, setUser] = useState(() => auth.currentUser)
  const [init, setInit] = useState(true);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Open Sans']
      }
    });
   }, []);
   
   
  useEffect(() => {
    
    const userListener = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user)
      } else {
        setUser(false)
      }

      if (init) {
        setInit(false)
      }
    })

    return userListener
  }, [init]);

  return (
    <div className="App">
      <header>
        <h1>{user ? <UserLoggedIn /> : "ChatApp Lite"}</h1>
        <SignOut />
      </header>
      <section>
        {user ? <Chat /> : <Welcome /> }
      </section>
    </div>
  );
}

export default App;