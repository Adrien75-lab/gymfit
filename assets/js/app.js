import React from "react";
import ReactDOM from 'react-dom';

// any CSS you import will output into a single css file (app.css in this case)
require("../styles/app.css");

console.log("Hello Adrien");

const App = () => {
  return <h1>Bonjour à tous</h1>;
};

const rootElement = document.querySelector('#app');
ReactDOM.render(<App />, rootElement);
