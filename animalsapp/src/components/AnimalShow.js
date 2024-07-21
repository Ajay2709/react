import '../styles/App.css'
import { useState } from 'react';

import dog from '../images/dog.svg';
import cat from '../images/cat.svg';
import bird from '../images/bird.svg';
import horse from '../images/horse.svg';
import heart from '../images/heart.svg';

//{bird} is the same as {bird: bird} 
const svgMap = { bird, dog, cat, horse}; 

function AnimalShow({type}){
    const [clicks, setClicks] = useState(0);

    const handleClicks = () => {
        setClicks(clicks+1);
    }
    return (
    <p onClick={handleClicks} className='animal-show'>
        <img alt="animal image" src={svgMap[type]} width={100} height={100} />
        <img alt="heart" src={heart} style={{width: 10+10*clicks + 'px'}} />
    </p>
    );
}

export default AnimalShow