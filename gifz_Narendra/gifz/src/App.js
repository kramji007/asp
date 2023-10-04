import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import TrendingsPage from './TrendingsPage';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-blue-500 py-4">
          <div className="container mx-auto">
            <h1 className="text-white text-3xl font-bold">GIFz</h1>
            <nav className="mt-2">
              <ul className="flex space-x-4 text-white">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/trendings">Trendings</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <Routes>
          <Route exact path='/' element={< HomePage />}></Route>

          <Route exact path='/trendings' element={< TrendingsPage />}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
