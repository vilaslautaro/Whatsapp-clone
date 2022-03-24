import './App.css';
import { useEffect, useState } from 'react';
// import ChatMessage from 'components/ChatMessage'
import Welcome from './components/Welcome'
import SignOut from './components/SingOut';
import UserLoggedIn from './components/UserLoggedIn';
import WebFont from 'webfontloader'
import { auth } from './firebase'

const App = () => {

  const [user, setUser] = useState(() => auth.currentUser)
  const [init, setInit] = useState(true)


  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Open Sans']
      }
    })
  },[])

  useEffect(() => {
    const userListener = auth.onAuthStateChanged( user => {
      if(user){
        setUser(user)
      } else{
        setUser(false)
      }
    })

    if(init){
      setInit(false)
    }

    return userListener
  }, [init])

  return (
    <div className="container">
      <header className="header">
        <h1>{ user ? <UserLoggedIn /> : 'Whatsapp Lite' } </h1>
        <SignOut />
      </header>
      <section>
        { user ? "Aca va el chat" : <Welcome />}
      </section>
    </div>
  );
}

export default App;
