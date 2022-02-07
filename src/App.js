import React, {useState, useEffect} from "react";
import "./App.css";


function App() {
  const [card, setCard] = useState(false);
  const [user, setUser] = useState('');


  useEffect((card) => {
    const alerta = (card)=>{
    card &&  alert ('Tansk you for visting me😄')
    return alerta
    }
  }, []);

  return <div className="App" className='container'>
    <h1>Hello User App</h1> 
    <form >
     <input type="text" placeholder="Enter your name" 
     value={user} onChange = {(e) => setUser((e).target.value)} />
     <button type="button" onClick={()=> setCard(!card)}>¡Greet me!</button>
    </form>
  <div>
    <p>
      {card ? `¡Welcome ${user}!` : 'Please enter your name 🙏'  }
   </p>
  </div>
  </div>;

}

export default App;
