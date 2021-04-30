import react from 'react'
import React, {useState, useEffect} from 'react';
import EachDog from './DogList';
import './owners.css'
import EachOwner from './EachOwner'
import {Link} from 'react-router-dom';

const Owners = ({dogData, setEachDog}) => {
    const [clickedIndex, setCklickedIndex] = useState(null);



    return (
        <div className="cardContainer">

                <div className="dog-info">
                    {dogData && dogData.map((dog, index) => {
                        return (
                            <div className="dog" key={index} onClick={() => {setEachDog(dog) ; console.log('diggie set: ' + dog)}}>
                                <Link to="/eachDog">
                                <EachOwner
                                setIndex={() => setCklickedIndex(index)}
                                index={index}
                                dogList={dogData}
                                owner={dog.owner} />
                                </Link>
                            </div>
                        );
                
                    })}
                </div>

        </div>
    );
}




export default Owners;

