import React from 'react';
import './App.css';
import { TodoProvider } from './contexts/TodoContext';
import Home from './components/Home';


function App() {
  return (
    <>
      <TodoProvider>
        <Home />
        
      </TodoProvider>
      {/* <Home /> */}
    </>
  );
}

export default App;
