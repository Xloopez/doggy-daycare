import react, { useState } from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Welcome from './components/Welcome';
import Owners from './components/Owners';
import EachOwner from './components/EachOwner';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import EachDog from './components/EachDog';

function App() {


 



  const [dogData, setDogData] = useState(null);
  const [eachDog, setEachDog] = useState(null);

    const fetchData = async () => {
        fetch('https://api.jsonbin.io/b/60872168c7df3422f7fe6eb8/1')
            .then(response => response.json())
            .then((jsonData) => {

                setDogData(jsonData);
                console.log('Datan med fetch' + jsonData)
            })
    }


  return (
    <div className="App">
      <header className="App-header">
      <main className="main">
        <Router>
            <Switch>

            <Route exact path="/">
                <Welcome fetchData={() => fetchData()}/>
              </Route>

              <Route path="/owners">
                <Owners dogData={dogData} setEachDog={setEachDog}/>
              </Route>

              <Route path="/eachDog">
                <EachDog dog={eachDog}/>
              </Route>

            </Switch>
        </Router>

      </main>
        
      </header>


    </div>
  );

  
}

export default App;
