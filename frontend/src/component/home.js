import React, { useState, useEffect} from 'react'
import { NavLink } from "react-router-dom";
import diag from "../images/diagnostic.png";
import map from "../images/map.png";
import speed from "../images/speedometer.png";

const Home = () => {
    const [name, setName] = useState('');
    const [show, setShow] = useState(false);
    
    const getUserName = async () => {
        try {
            const response = await fetch('/getUserDetails', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            }); 
            console.log(response);
            const data = await response.json();
            console.log(`My Home data `+data.name);
            if (data) {
                setName(data.name);
                setShow(true);
            }
        } catch (error) {
            console.log(`My Home page error `+error);
          }
    }

    useEffect(() => {
        getUserName();
    }, []);
    return (
        <>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <NavLink to="/dashboard"><div className="img1"><img src={speed} alt="Dash" /><h1>Dashboard</h1></div></NavLink>
                    </div>
                    </div>
                    <div className="column">
                    <div className="card">
                        <NavLink to="/warnings"><div className="img1">
                            <img src={diag} alt="Diagnosis" />
                            <h1>Vehicle Diagnosis</h1>
                        </div></NavLink>
                    </div>  
                    </div>
                    <div className="column">
                    <div className="card">
                        <NavLink to="/navigation"><div className="img1">
                            <img src={map} alt="Diagnosis" />
                            <h1>Navigation</h1>
                        </div></NavLink>
                    </div>  
                </div>
            </div>
        </>
    )
}

export default Home
