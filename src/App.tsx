import React from 'react';
import './App.css';
import Scatter from "./pages/Scatter/Scatter";
import Bar from "./pages/Bar/Bar";

function App() {
  return (
    <div style={{padding: '20px'}} className="App">
        <h2>Manufac Data Visualization Task</h2>

          {/*HTML to show Scatter graph*/}
      <Scatter/>

        {/*HTML to show Bar graph*/}
      <Bar/>
    </div>
  );
}

export default App;
