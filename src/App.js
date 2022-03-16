import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';



function App() {

const counter = useSelector((state) => state.counter)
const dispatch = useDispatch();
const incrementNumber = () => {
  dispatch({ type: 'BTTN' });
}

const decrementNumber = () => {
  dispatch({ type: 'DEC' });
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {counter}
        </p>
        <button onClick={incrementNumber}>Increment number</button>
        <button onClick={decrementNumber} className={'dec'}>Decrement number</button>
        
      </header>
    </div>
  );
}

export default App;
