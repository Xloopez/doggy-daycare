import './welcomeScreen.css'
import react from 'react'
import logo from '../img/logo.png';
import {Link} from 'react-router-dom';




const Welcome = ({fetchData}) => {



    return (
        <div className="welcomeScreen">
            <img src={logo} alt="LOGO" className="logo"/>

            <br></br>

            <button className="welcomeScreenBtns">Check in doggie</button>
            <button className="welcomeScreenBtns">Check out doggie</button>
            <Link to="/owners">
                <button className="welcomeScreenBtns" onClick={fetchData}>Current guests</button>
            </Link>
        </div>
    );
}

export default Welcome
;