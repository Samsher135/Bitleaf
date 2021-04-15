import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom';

const Warnings = () => {
    
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

            <div class="DTC">
                <table id="DTC">
                <tr>
                    <th>ERROR CODE<br/>(DTC)</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>P0782</td>
                    <td>Powertrain, Generic, Transmission, 2-3 shift malfunction</td>
                </tr>
                <tr>
                    <td>Berglunds snabbköp</td>
                    <td>Christina Berglund</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                </tr>
                </table>
                </div>
        </>
    )
}

export default Warnings