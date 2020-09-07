import React from 'react';
import { AppProvider } from './AppContext';
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Counter />
      </div>
    </AppProvider>
  );
}

export default App;
