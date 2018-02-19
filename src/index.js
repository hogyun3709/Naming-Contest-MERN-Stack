import React from 'react';
import ReactDOM from 'react-dom';

// const color = Math.random() > 0.5 ? 'green' : 'red';
// ReactDOM.render(
//   <h1 style={{color}}>Hello World {Math.random()}</h1>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <h2 className="text-center">Hello React -- {Math.random()}</h2>,
  document.getElementById('root')
)
