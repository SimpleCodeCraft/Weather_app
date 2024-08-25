"use strict";

const pos = {
  lon: 35.1712728,
  lat: 47.8211498,
  apiKey: "d3538c1541797659b6c8bc5d092411b1",
};


function getWeather(){
  let data;
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.lat}&lon=${pos.lon}&lang=${"ua"}&units=metric&appid=${pos.apiKey}`)
   .then((response)=>{
      if(!response.ok){
        throw new Error("response was not ok: " + response.statusText);
      }
      return response.json();
   })
   .then((weatherData) => {
      data = weatherData;
      console.log(data);
  });

  return data;
}

export {getWeather};