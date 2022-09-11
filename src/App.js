// import React from 'react'
// import { useState } from 'react'

// OR 
import React, { useState } from 'react'

function App(){
    let [ counter, changeCounter ] = useState(1)
    window.changeCounter = changeCounter
    return (
      <div>
        <h1>The counter is {counter}</h1>
        <h4>The counter is {counter}</h4>
      </div>
    )
}

export default App;






// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
