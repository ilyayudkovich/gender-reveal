import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          CONGRATULATIONS
        </p>
        {/* <a
          className="App-link"
          href="https://media.giphy.com/media/pZWz3alofcJmE/giphy.mp4"
          target="_blank"
          rel="noopener noreferrer"
        >
          IT'S A BOY!
        </a> */}
        <iframe src="https://giphy.com/embed/pZWz3alofcJmE" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/pZWz3alofcJmE"></a></p>
      </header>
    </div>
  );
}

export default App;
