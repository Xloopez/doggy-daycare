import react from 'react'
import React, {useState, useEffect} from 'react';
import EachDog from './EachDog';

const DogList = () => {
    const [dogData, setDogData] = useState(null);
    const fetchData = async () => {
        fetch('https://api.jsonbin.io/b/60872168c7df3422f7fe6eb8')
            .then(response => response.json())
            .then((jsonData) => {

                setDogData(jsonData);
                console.log('Datan med fetch' + jsonData)
            })
    }


    return (
        <div className="container">
            <button onClick={fetchData}>Fetch doggie data</button>
            
            <div className="dogInfo">
                {dogData && dogData.map((dog, index) => {
                    return (
                        <div className="dog" key={index}>
                            <EachDog dog={dog}   /> 
                        </div>
                    );
                
                })}
            </div>

        </div>
    );
}




export default DogList;