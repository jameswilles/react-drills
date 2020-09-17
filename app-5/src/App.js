import React from 'react';
import logo from './logo.svg';
import './App.css';

import Image from './Image'

function App() {
  return (
    <div className="App">
      <Image url={'https://images.unsplash.com/photo-1600190187082-b812d4793be8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'} />
    </div>
  );
}

export default App;
