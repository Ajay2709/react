//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import MyApp from './App'; //App component renamed into MyApp

//Create a reference to the div with ID 'root'
const ele = document.getElementById('root');

//Tell React to take control of the root element
const root = ReactDOM.createRoot(ele);

//Show that component on screen
root.render(<MyApp />);
