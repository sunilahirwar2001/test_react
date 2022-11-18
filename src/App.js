import logo from './logo.svg';
import './App.css';

function App() {
  let sampleJS='This is my sample variable'
  let sampleJS2='this is my sample variable 2'

  return (
    <div>
   <h1>This is my heading</h1>
   <p>{sampleJS2}</p>
   <span>{sampleJS}</span>
   <ul>
    <li>Li 1</li>
    <li>Li 2</li>
    <li>Li 3</li>
    <li>Li 4</li>
    <li>Li 5</li>

   </ul>
</div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
