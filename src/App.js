import logo from './logo.svg';
import './App.css';
import GreetingButton from './GreetingButton';

const sendGreeting = (message) => {
  alert(`Hello, ${message}!`)
}

function App() {
  return (
    <div className="App">
     <GreetingButton greet={sendGreeting}/>
    </div>
  );
}

export default App;
