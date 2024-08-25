"use strict"

import { nowContentItems, nowBtn } from "./dom.js";
// import { getWeather } from "./functions.js";

const pos = {
  lon: 35.1712728,
  lat: 47.8211498,
  apiKey: "d3538c1541797659b6c8bc5d092411b1",
  };


// block.textContent = wea.weather.description;

document.addEventListener("DOMContentLoaded", function(){

  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.lat}&lon=${pos.lon}&lang=${"ua"}&units=metric&appid=${pos.apiKey}`)
   .then((response)=>{
      if(!response.ok){
        throw new Error("response was not ok: " + response.statusText);
      }
      return response.json();
   })
   .then((weatherData) => {
     nowContentItems[0].textContent = weatherData.main.temp;
     nowContentItems[1].textContent = weatherData.wind.speed;
     nowContentItems[2].textContent = weatherData.weather[0].description;
  });

});


nowBtn.addEventListener("click",
function(){
  // const data = getWeather();
  
  // if(nowBlock.classList.contains("hide")){
  //   nowBlock.classList.remove("hide");
  // }

  // if(this.classList.contains("active-btn")){
  
  // }

  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.lat}&lon=${pos.lon}&lang=${"ua"}&units=metric&appid=${pos.apiKey}`)
   .then((response)=>{
      if(!response.ok){
        throw new Error("response was not ok: " + response.statusText);
      }
      return response.json();
   })
   .then((data) => {

     // nowContentItems[0].textContent = "okkey";

     //wea = data;
     console.log(data);
  });

   // nowContentItems[0].textContent = "okkey";


});



