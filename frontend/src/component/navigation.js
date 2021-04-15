import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom';

const Navigation = () => {
    
    const history = useHistory();
    const [userData, setUserData] = useState({name:"", email:"", phone:""});

    const callSecret = async () => {
        try {
            const res = await fetch("/secret", {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
                }, credentials: 'include'
            });

            const data = await res.json();
            setUserData(data);

            console.log(data.name);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
            
        } catch (error) {
             console.log('Not login user..!');
             history.push('/logout', { replace: true });
        }
    };

    useEffect(() => { 
        callSecret();
    }, []);
     

    return (
        <>
            {/* <h1 className="mt-5">Hello my Secret Page </h1> */}

            <h1>My First Google Map</h1>

            <div id="googleMap" style="width:100%;height:800px;"></div>
        </>
    )
}

export default Navigation
