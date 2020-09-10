import React,{useState,useEffect} from 'react';
import './Weather.css';
import Form from './form';



const apiRequiredData = {
    temp : undefined,
    city : undefined,
    country:undefined,
    sunrise:undefined,
    sunset: undefined  
}

let styles = {
  background : 'rgb(126, 53, 53)',
  color : 'tomato'
}
function timeDefinder(undefinedTime){
      let time = undefinedTime;
      let date = new Date();
      date.setTime(time);
  return  date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(); 
}

function temperatureDefinder(kelvin){
  return (kelvin - 273.15).toFixed(2) + ' Celsius';
}

function Weather(props){

const [weatherData,setWeatherData] = useState(apiRequiredData);
const [error,setError] = useState(false);

useEffect(() =>{
  if(parseInt(weatherData.temp) >= 10){
   
  } else;
},[weatherData]);

  let handleError = () =>{
    if(error){
      return <p className = "danger">Put the city dickhead</p>;
    }
  }

  let getter = async event =>{
    event.preventDefault();
    let city = event.target.elements.city.value;  
         setError(false);
      try {
        if(city){
          let api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${props.api}`);
          let req = await api.json();  
     
          setWeatherData({temp : temperatureDefinder(req.main.temp),
                          city : req.name,
                          country: req.sys.country,
                          sunrise: timeDefinder(req.sys.sunrise),
                          sunset: timeDefinder(req.sys.sunset)
          });
        }else{
          setError(true);
        }
      } catch (error) {
        throw error;
      }
  }

return (
  <React.Fragment>
  <div>
      <Form api_getter = {getter}/>
      {handleError()}
        <p> Temperature : {weatherData.temp}</p>
        <p> Sunrise:{weatherData.sunrise} </p>
        <p> City:{weatherData.city} </p>
  </div>
  </React.Fragment>
)
 
}
export default Weather;






