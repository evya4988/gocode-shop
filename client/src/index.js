import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routing from './Routing';

const root = ReactDOM.createRoot(document.getElementById('root'));

/** replace console.* for disable log on production  */
// if (process.env.NODE_ENV === 'production') {
//   console.log = () => { }
//   console.error = () => { }
//   console.debug = () => { }
// }

// console.log = () => { }
// console.error = () => { }
// console.debug = () => { }

root.render(
  <React.StrictMode>
      <Routing />
  </React.StrictMode>
);


