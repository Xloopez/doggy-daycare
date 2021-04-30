import react from 'react'
import {Link} from 'react-router-dom';
import './eachDog.css'
import React, {useState, useEffect} from 'react';

const EachDog = ({dog}) => {
    /*const [presentDog, setPresentDog] = useState(null);

    if (dog.present != null) {
        setPresentDog(dog.present)
    }*/

    console.log('hunden: ' +  dog);

    let content = null;
    if(dog != null) {
        content = 
            <div className="doggieCard">

            <img className="img" src={dog.img}
                alt={"The dog " + dog.name + "img goes here"}
                width="190vw"
                height="200vw">
            </img>

            <span className="titles">
            <h1><strong>{dog.name}</strong></h1>
            </span>
                <div className="dogInfo">
                    <p>Sex: {dog.sex}</p>
                    <p>Age: {dog.age}</p>
                    <p>Present: {dog.present}</p>
                    <p>Chip number: {dog.chipNumber}</p>
                </div>

            </div>
        
    }

    return (
        <div>
            {content}
        </div>
    );
}

export default EachDog;