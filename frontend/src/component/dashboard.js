import React, { useEffect, useState, Component } from 'react'
import { NavLink, useHistory } from 'react-router-dom';


const Dashboard = () => {
    
    const history = useHistory();
    const [userData, setUserData] = useState({name:"", email:"", phone:""});

    const callSecret = async () => {
        try {
            // constructor
            function Gauge (elem, options) {
              var options = options || {},
                canvas = document.createElement('canvas'),
                value = options.value || 0;
              
              this.options = options;
              
              console.log(options.radius);
              
              this.ctx = canvas.getContext("2d");
              this.width = options.width || 100;
              this.height = options.height || this.width;
              
              // readjust lineWidth based on radius
              if (options.radius) {
                this.lineWidth = (this.width / 2 - options.radius);
              } else {
                this.lineWidth = options.lineWidth || 25;
              }
              this.radius = (this.width - this.lineWidth) / 2;
              
              this.color = options.color || '#333';
              this.background = options.background || '#ccc';

              this.range = [0, 100];
              
              this.interpolate = linearInterpolate.bind(this, this.range, [Math.PI, 2*Math.PI]);
              
              canvas.width = this.width;
              canvas.height = this.height / 2;
              
              this.set( value );
                
              elem.appendChild( canvas );
            }

            // get/set methods
            Gauge.prototype.get = function () {
              return this.value || 0;
            };

            Gauge.prototype.set = function (value) {
              var ctx = this.ctx,
                range = this.range,
                value = clamp(value, range[0], range[1]),
                drawArc = function () {
                  ctx.beginPath();
                  ctx.arc.apply(ctx, arguments);
                  ctx.stroke();
                  // bind all arguments except the end value
                }.bind(this, this.width / 2, this.height / 2, 
                    this.radius,
                    Math.PI);

              this.value = value;
              
              ctx.clearRect(0,0,this.width,this.height / 2);
              
              ctx.lineWidth = this.lineWidth;
              
              // background
              ctx.strokeStyle = this.background;
              drawArc( 2 * Math.PI );
              
              // foreground
              ctx.strokeStyle = this.color;
              drawArc( this.interpolate( value ) );
              
              // optional display value
              if (this.options.displayvalue && 
                this.options.displayvalue !== 'false') {
                ctx.font = "bold " + this.lineWidth + "px Arial, sans-serif";
                ctx.fillStyle = "black";
                ctx.textAlign = "center";
                ctx.textBaseline = "top";
                ctx.fillText(value, this.width / 2, 0);
              }
            };

            // create instances/handlers

            var gauges = document.getElementsByClassName('gauge');

            for (var i = 0, len = gauges.length; i < len; i++) {
              var elem = gauges[i],
                gauge = new Gauge(elem, elem.dataset),
                inputs = elem.getElementsByTagName('input');
              for (var j = 0, lenJ = inputs.length; j < lenJ; j++) {
                (function (_gauge) {
                  inputs[j].addEventListener('input', function (e) {
                    _gauge.set(this.value);
                  });
                })(gauge);
              }
            }

            // helper functions

            function linearInterpolate (from_range, to_range, val) {
                var minX = from_range[0],
                    minY = to_range[0],
                    rangeX = from_range[1] - from_range[0],
                    rangeY = to_range[1] - to_range[0];

                return (val - minX) * rangeY / rangeX + minY;
            }

            function clamp (x, min, max) {
                if (x < min) {
                return min;
              }
              if (x > max) {
                return max;
              }
              return x;
            }
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
            {/* <h1 classNameName="mt-5">Hello my Secret Page </h1> */}

  <div id="main">
  
  <div className="box" id="test">

    <div id="chartdiv"></div>
    <h1>Engine RPM</h1>
  </div>
  
  <div className="box" id="test1">
    <h2>20&#xb0;C</h2>
      <div className="gauge" data-width="300" data-value="50"></div>
    <h1>Coolent Temp</h1>
  </div>
  
  <div className="box" id="test2">
    <h2>10.00 Volts</h2>
    <div className="gauge" data-width="300" data-value="30"></div>
    <h1>Battery Voltage</h1>
  </div>
  
  <div className="box" id="test3">
    
    <div className="gauge" data-width="300" data-value="50"></div>
    <h1>Engine Load</h1>
  </div>
  
  <div className="box" id="test4">
    
    <div id="chartdiv1"></div>
    <h1>Fuel Consumed</h1>
  </div>
  
  <div className="box" id="test5">
    <h2>80 %</h2>
        <div className="gauge" data-width="300" data-value="50"></div>
    <h1>Fuel Level</h1>
  </div>
  
  <div className="box" id="test6">
    <h2>25<br/>KMPH</h2>
    <div className="gauge" data-width="300" data-value="50"></div>
    <h1>Vehicle Speed</h1>
  </div>
  
  <div className="box" id="test7">
    
    <div id="chartdiv2"></div>
    <h1>MAF Sensor Air Flow Rate</h1>
  </div>
  
  <div className="box" id="test8">
    <h2>Idle<br/>Position</h2>
    <div className="gauge" data-width="300" data-value="50"></div>
    <h1>Throttle Position</h1>
  </div>

  <div className="box" id="test9">
    <h2>2.5 Hours</h2>
    <div className="gauge" data-width="300" data-value="50"></div>
    <h1>Time Run with MIL on</h1>
  </div>

  <div className="box" id="test10">
    <h2>20&#xb0;C</h2>
    <div className="gauge-wrap" data-value="90"></div>
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
