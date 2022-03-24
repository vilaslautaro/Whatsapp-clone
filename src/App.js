import './App.css';
import { useEffect } from 'react';
// import ChatMessage from 'components/ChatMessagex'
import Welcome from './components/Welcome'
import WebFont from 'webfontloader'

const App = () => {



  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Open Sans']
      }
    })
  })

  return (
    <div className="container">
      <header className="header">
        <h1>Whatsapp Lite</h1>
      </header>
      <section>
        <Welcome />
      </section>
    </div>
  );
}

export default App;
