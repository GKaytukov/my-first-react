import { useState } from 'react'; 
import logo from './logo.svg';//It's importing logo
import './App.css'; //We are importing app.css can be found the . is saying it is in the same folder #app.css

  const names = ['Gustavo', 'Gerly', 'Cassandra', 'Corwin', 
'Jacques', 'Ainis', 'Gianna', 'Emily', 'Fanessa', 'Adi', 
'Mido', 'Carl', 'Eddie', 'Captain Ed', 'Nick', 'Tyler',
'Todd', 'Brad']
  
function App() {

  const [myName, setMyName] =useState ('Todd')
  const [counter, setCounter] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {myName} is pretty dam cool. 

        </p>
        {names.map(name => (
          <button key={name} onClick={() => setMyName(name)}>{name}</button>

        ))}
        <button onClick={() => setMyName ('Meghann')}>Meghan</button>
        <button onClick={() => setMyName ('Noah')}>Noah</button>
        <button onClick={() => setMyName ('Gerly')}>Gerly</button>
        <p>You clicked the button {counter} times</p>
        <button onClick={() => setCounter((counter > 0) ? counter -1 : 0)}>-1</button>
        <button onClick={() => setCounter(0)}>Reset</button>
        <button onClick={() => setCounter(counter +1)}>+1</button>
      </header>
    </div>
  );
}

export default App;
