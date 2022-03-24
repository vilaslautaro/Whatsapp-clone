import { auth, db } from '../firebase';
import ChatMessage from './ChatMessage';
import { useEffect, useRef, useState } from 'react';
import { addDoc, collection, limit, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";

const Chat = () => {
    const dummy = useRef();
    const [messages, setMessages] = useState([]);
    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;

      addDoc(collection(db, "messages"), {
        text: formValue,
        createdAt: serverTimestamp(),
        uid,
        photoURL          
      })
      .then(doc => {
        setFormValue('');
        // dummy.current.scrollIntoView({ behavior: 'smooth' }); 
      })
      .catch( err => {
        console.log(err)
      })

    }
  
    useEffect(() => {
      const q = query(collection(db, "messages"), orderBy("createdAt"), limit(100));

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const allMesagges = []
        querySnapshot.forEach(doc => {
          const message = {
            ...doc.data(),
            id: doc.id
          }
          allMesagges.push(message)          
        });
        setMessages(allMesagges);
        dummy.current.scrollIntoView({ behavior: 'smooth' }); 
      });
      

      return unsubscribe
    }, []);

    return (<>
      <main>
  
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
        <span ref={dummy}></span>
  
      </main>
  
      <form onSubmit={sendMessage}>
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Mensaje" />
  
        <button type="submit" disabled={!formValue}>Enviar</button>
  
      </form>
    </>)
}

export default Chat;