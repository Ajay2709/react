import { useState } from 'react';
import 'bulma/css/bulma.css';
import searchImages from './api';

import SearchBar from './components/SearchBar';
import ImagesList from './components/ImagesList';
import AnimalShow from './components/AnimalShow';




//Create a component - component name must begin with an uppercase letter
/*
  The line <h1> Hey bro!!!</h1> is converted by the library "Babel" into the below statement (ref: https://babeljs.io/repl)
  React.createElement("h1", null, "Hey bro!!!");
  which will in turn return the below object:
  {
    $$typeof: Symbol(react.element),
    key: null,
    props: { children: 'Hey bro!!!'},
    ref: null,
    type: 'h1'
  } 
*/

/*
Rules for JSX vs HTML
1. In JSX, all prop names follow camelCase
2. Number should be enclosed with {} and strings with ""
3. For boolean props, default value is true value and they need not be explicit. False should be mentioned explicitly.
4. 'class' attribute goes with the name 'className'
5. Inline styles are provided as objects, instead of semi-colon separate strings;
*/ 

/**
 * count - piece of state(data)
 * setCount - setter to update the piece of state
 * The return type of the useState hook is also an array with two elements, 
 *  first element: the current state value, 
 *  second element: a function that allows you to update the state.
 * Assigning value to a state property is not allowed, because state updates in React are asynchronous and batched together for performance reasons. 
 * React may merge multiple state updates into a single update for better performance, and this can lead to unexpected results when '=' is used.
 * The setter provided by the useState() updated the state value and also triggers a re-render of the component with the new state value.
 */

/**
-----ARRAY DESCTRUCTURING------
    function makeArray(){
        return [1, 10, 32, 40];
    }
    const myArray = makeArray();
    const firstEle = myArray[0];
    const secondEle = myArray[1]; 
    //The above three lines can be merged into a single line as below
    const [firstEle, secondEle] = makeArray();
*/

function getRandomAnimal(){
    const animals = ['bird', 'cat', 'dog', 'horse'];
    return animals[Math.floor(Math.random()*animals.length)];
}

function App(){

    const [animals, setAnimals] = useState([]);
    const [images, setImages] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()] );
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />;
    })
    return (
        <div className='app'>
            <SearchBar onSubmit={searchImages} callback={setImages}/>
            <ImagesList images={images}/>
            <div>
                Show Animals
                <button onClick={handleClick}>Add Animal</button>
                <div className='animal-list'> Animals to show: {renderedAnimals} </div>
            </div>
        </div>
    )
}


export default App;

// function App(){
//     let name = "King"; // JSX works only for Strings and numbers and not for boolean, objects, null, undefined, arrays, etc...
//     return (
//       <div>
//         <h1>Hey {name}!!! </h1>
//         <p>The time is {new Date().toLocaleString()}</p>
//         Enter your age: 
//         <input type="number" min={1} max={120} style={{color: 'red', minWidth: '120px'}} placeholder="Enter your age"></input>
//       </div>
     
//     ); 
// }
