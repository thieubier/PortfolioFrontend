import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProjectList from './components/ProjectList';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/projects" element={<ProjectList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
