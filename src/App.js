import React from 'react';
import Provider from './context/Provider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './Components/Content';
import './App.css';

function App() {
  return (
    <Provider>
      <div className="meals">
        <Content />
      </div>
    </Provider>
  );
}

export default App;
