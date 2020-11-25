// https://www.digitalocean.com/community/tutorials/react-tabs-component
// Source: https://www.digitalocean.com/community/tutorials/react-tabs-component
import React from 'react';
import './App.css';
import Tabs from './components/Tabs';


function App() {
  return (
    <div>
      <h1>Tabs Demo</h1>

      <Tabs>
        <div label="Gator">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Croc">
          After 'while, <em>Crocodile</em>!
        </div>
        <div label="Sarcosuchus">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>
    </div>
  );
}

export default App;