import React from 'react';
import Form from './forms';
import Weather from './Weather';

const Api_Key = '6c141c2f3eabea919c566b0f5ba8480d';

const getWeather = async (e) => {
    e.preventDefault();
    
    const city = e.target.elements.city.value;

    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
    
    const response = await api_call.json();
    
    console.log(response);
    
  }

function App() {
  return (
    <div>
        <Form loadWeather= {getWeather}/>
        <Weather  />
        <p>
          Edit and save to reload.
        </p>
    </div>
  );
}

export default App;
