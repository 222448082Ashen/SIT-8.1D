import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import Login from './pages/Login';
import Register from './pages/Register';
import FindQuestions from './pages/FindQuestions';

const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/new-post" element={<Post />} />
        <Route path="/find-questions" element={<FindQuestions />} />
      </Routes>
    </div>
  </Router>
);

export default App;
