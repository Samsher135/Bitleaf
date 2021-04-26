import React, { useEffect, useState, Component } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import GaugeChart from 'react-gauge-chart'

var p_value = 50;
var p1_value = 10;  

const Dashboard = () => {
       
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
            // const Coolent_temp_value = userData.Coolent_temp_value;
            // const str1 = Coolent_temp_value;
            // const str = Coolent_temp_value/100;

            console.log(data.name);
            p_value = data.Coolent_temp_value;
            p1_value = data.Battery_Voltage;

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

    // const Coolent_temp_value = userData.Coolent_temp_value;
    // const str1 = Coolent_temp_value;
    // const str = Coolent_temp_value/100;
    
    // const str = ""+Coolent_temp_value+"";
    
    return (
        <>
            {/* <h1 classNameName="mt-5">Hello my Secret Page </h1> */}

  <div id="main">
  
  <div className="box" id="test">

    <div id="chartdiv"></div>
    <h1>Engine RPM</h1>
  </div>
  
  <div className="box" id="test1">
  <GaugeChart id="gauge-chart2" 
      nrOfLevels={20} 
      percent={p_value/100}
      formatTextValue={ value => p_value+'^C'} 
    />
    <h1>Coolent Temp</h1>
  </div>
  
  <div className="box" id="test2">
  <GaugeChart id="gauge-chart2" 
      nrOfLevels={20} 
      percent={p1_value/100}
      formatTextValue={ value => p1_value+'V'} 
    />
    <h1>Battery Voltage</h1>
  </div>
  
  <div className="box" id="test3">
  <GaugeChart id="gauge-chart2" 
      nrOfLevels={20} 
      percent={0.86}
      formatTextValue={ value => 86+'^C'} 
    />
    <h1>Engine Load</h1>
  </div>
  
  <div className="box" id="test4">
    
    <div id="chartdiv1"></div>
    <h1>Fuel Consumed</h1>
  </div>
  
  <div className="box" id="test5">
  <GaugeChart id="gauge-chart2" 
      nrOfLevels={20} 
      percent={0.86}
      formatTextValue={ value => 86+'^C'} 
    />
  </div>
  
  <div className="box" id="test6">
  <GaugeChart id="gauge-chart2" 
      nrOfLevels={20} 
      percent={0.86}
      formatTextValue={ value => 86+'^C'} 
    />
    <h1>Vehicle Speed</h1>
  </div>
  
  <div className="box" id="test7">
    
    <div id="chartdiv2"></div>
    <h1>MAF Sensor Air Flow Rate</h1>
  </div>
  
  <div className="box" id="test8">
  <GaugeChart id="gauge-chart2" 
      nrOfLevels={20} 
      percent={0.86}
      formatTextValue={ value => 86+'^C'} 
    />
    <h1>Throttle Position</h1>
  </div>

  <div className="box" id="test9">
  <GaugeChart id="gauge-chart2" 
      nrOfLevels={20} 
      percent={0.86}
      formatTextValue={ value => 86+'^C'} 
    />
    <h1>Time Run with MIL on</h1>
  </div>

  <div className="box" id="test10">
    <GaugeChart id="gauge-chart2" 
      nrOfLevels={20} 
      percent={0.86}
      formatTextValue={ value => 86+'^C'} 
    />
    <h1>Intake Air Temperature</h1>
  </div>

  <div className="box" id="test11">
    <h2>45 psi</h2>
    <div className="gauge-wrap" data-value="90"></div>
    <h1>Fuel Pressure</h1>
  </div>

  <div className="box" id="test12">
    
    <div className="gauge-wrap" data-value="90"></div>
    <h1>Commanded EGR</h1>
  </div>

  <div className="box" id="test13">
    <h2>2 %</h2>
    <div className="gauge-wrap" data-value="90"></div>
    <h1>EGR Error</h1>
  </div>

  <div className="box" id="test14">
    
    <div className="gauge-wrap" data-value="90"></div>
    <h1>Commanded Evaporative Purge</h1>
  </div>

  <div className="box" id="test15">
    <h2>22<br/>Warmups</h2>
    <div className="gauge-wrap" data-value="90"></div>
    <h1>Number of Warmups since<br/>DTC Cleared</h1>
  </div>

  <div className="box" id="test16">
    <h2>220 Kms</h2>
    <div className="gauge-wrap" data-value="90"></div>
    <h1>Distance traveled since DTC Cleared</h1>
  </div>

  <div className="box" id="test17">
    <h2></h2>
    <div className="gauge-wrap" data-value="90"></div>
    <h1>Evap. System Vapor Pressure</h1>
  </div>

  <div className="box" id="test18">
    <h2>22 in. Hg</h2>
    <div className="gauge-wrap" data-value="90"></div>
    <h1>Barometric Pressure</h1>
  </div>

  <div className="box" id="test19">
    <h2>13.1 Volts</h2>
    <div className="gauge-wrap" data-value="90"></div>
    <h1>Control Module Voltage</h1>
  </div>

  <div className="box" id="test20">
    
    <div className="gauge-wrap" data-value="90"></div>
    <h1>Monitor Status This Drive Cycle</h1>
  </div>

  <div className="box" id="test21">
    
    <div className="gauge-wrap" data-value="90"></div>
    <h1>Absolute Load Value</h1>
  </div>

  <div className="box" id="test22">
    
    <div className="gauge-wrap" data-value="90"></div>
    <h1>Commanded Equivalence Ratio</h1>
  </div>

  <div className="box" id="test23">
    
    <div className="gauge-wrap" data-value="90"></div>
    <h1>Relative Throttle Position</h1>
  </div>

  <div className="box" id="test24">
    
    <div className="gauge-wrap" data-value="90"></div>
    <h1>Ambient Air Temperature</h1>
  </div>

  <div className="box" id="test25">
    
    <div className="gauge-wrap" data-value="90"></div>
    <h1>Commanded Throttle Actuator</h1>
  </div>

  <div className="box" id="test26">
    
    <div className="gauge-wrap" data-value="90"></div>
    <h1>Time Run with MIL on</h1>
  </div>

  <div className="box" id="test27">
    
    <div className="gauge-wrap" data-value="90"></div>
    <h1>Time Since DTC Cleared</h1>
  </div>

  <div className="box" id="test28">
    
    <div className="gauge-wrap" data-value="90"></div>
    <h1>Maximum MAF Airflow Value</h1>
  </div>

  <div className="box" id="test29">
    
    <div className="gauge-wrap" data-value="90"></div>
    <h1>Fuel Type</h1>
  </div>

  <div className="box" id="test30">
    
    <div className="gauge-wrap" data-value="90"></div>
    <h1>Ethanol fuel %</h1>
  </div>

  <div className="box" id="test31">
    
    <div className="gauge-wrap" data-value="90"></div>
    <h1>Engine Oil Temperature</h1>
  </div>

  <div className="box" id="test32">
    
    <div className="gauge-wrap" data-value="90"></div>
    <h1>Fuel Injection Timing</h1>
  </div>

  <div className="box" id="test32">
    
    <div className="gauge-wrap" data-value="90"></div>
    <h1>Engine Fuel Rate</h1>
  </div>

  <div className="box" id="test33">
    
    <div className="gauge-wrap" data-value="90"></div>
    <h1>Actual Engine Torque - Percent</h1>
  </div>

  <div className="box" id="test34">
    
    <div className="gauge-wrap" data-value="90"></div>
    <h1>EGR Temperature</h1>
  </div>
  </div>
        </>
    )
}
export default Dashboard
