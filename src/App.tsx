import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import HomePage from './HomePage';
import PracticePlans from './PracticePlans';
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
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/practice-plans" element={<PracticePlans/>} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
