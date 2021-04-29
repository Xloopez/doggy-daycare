import React, {useState, useEffect} from 'react';




const Dog = () => {
    //const dogs = async () => {getApi()};
    //const dogs = getApi();
    const [dogInfo, setDogInfo] = useState(null);
    
    useEffect(async () => {
        let dogs = await getApi();

        setDogInfo(dogs);

        console.log('Dogs: ' + dogs);
    

        
    }, []);

    useEffect(() => {
        setDogInfo(dogInfo)
        console.log('Hundarna: ' + dogInfo);
    }, [dogInfo]);


    return (
        <div>
            <img src="" alt="" height=""></img>
            <span>
                <p>Hej</p>
                <p>Hellos</p>
            </span>
        </div>
    )
}

async function getApi() {
    const baseUrl = 'https://api.jsonbin.io/b/60872168c7df3422f7fe6eb8';
    const apiKey = '$2b$10$aMoBnLnWoLU0puLfiBRHi.bUJ.SPlYoOm8uo6ZY6lUUaiF2ovwBjK';

    let url = `${baseUrl}`


    fetch(url)
        .then(response => response.json())
        .then((jsonData) => {
    // jsonData is parsed json object received from url
    
    //JSON.stringify(jsonData);
    console.log('Datan med fetch' + JSON.stringify(jsonData));

    return jsonData
  })
  .catch((error) => {
    // handle your errors here
    console.error(error)
  })




  

/*
    const baseUrl = 'https://api.jsonbin.io/b/607eb43024143e5df089b745';

    let url = `${baseUrl}`;

    try {
        let resp = await fetch(url);
        let data = await resp.json();

        return data
    }
    catch (error) {
        console.log('Error in fetching Doggie data:', error);
    }*/
}





export default Dog;