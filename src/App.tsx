import React from 'react';
import HomePage from './HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Coaching Resources</h1>
      </header>
      <div className="App-main">
        <nav className="App-menu-bar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/practice-plans">Practice Plans</a></li>
          </ul>
        </nav>
        <div className="App-content">
          <HomePage/>
        </div>
      </div>
    </div>
  );
}

export default App;
