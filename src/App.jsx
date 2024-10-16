import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import { GlobalContextProvider } from './context/context';
import Login from './components/Auth/Login';
import Header from './components/Header';
import TaskContainer from './components/TaskContainer';

import { useState, useEffect } from 'react';
import { auth } from './firebase';
import Signup from './components/Auth/signup';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); 
    });
    return () => unsubscribe(); 
  }, []);

  return (
    <GlobalContextProvider>
      <Router>

        {user && <Header />}
        <Routes>
        
          <Route path="/" element={user ? <TaskContainer /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </GlobalContextProvider>
  );
}

export default App;
