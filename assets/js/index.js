"use strict"

import { nowContentItems, contentBlocks, buttons } from "./dom.js";
import { windDirection, setWindow } from "./functions.js";

const pos = {
  lon: 35.1712728,
  lat: 47.8211498,
  apiKey: "d3538c1541797659b6c8bc5d092411b1",
  };




document.addEventListener("DOMContentLoaded", function(){

  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.lat}&lon=${pos.lon}&lang=${"ua"}&units=metric&appid=${pos.apiKey}`)
   .then((response)=>{
      if(!response.ok){
        throw new Error("response was not ok: " + response.statusText);
      }
     
      return response.json();
   })
   .then((weatherData) => {
     nowContentItems[0].textContent = weatherData.main.temp.toFixed(1);
     nowContentItems[1].textContent = weatherData.wind.speed + windDirection(weatherData.wind.deg);
     nowContentItems[2].textContent = weatherData.wind.gust.toFixed(1);
     nowContentItems[3].textContent = weatherData.main.pressure;
});

});


buttons.hour.addEventListener("click",
function(){

    buttons.hour.classList.add("active-btn");
    buttons.now.classList.remove("active-btn");
    buttons.days.classList.remove("active-btn");

    contentBlocks.hour.classList.remove("hide");
    contentBlocks.now.classList.add("hide");
    contentBlocks.days.classList.add("hide");

    console.log(contentBlocks.now);
});

buttons.now.addEventListener("click",function(){
    buttons.hour.classList.remove("active-btn");
    buttons.now.classList.add("active-btn");
    buttons.days.classList.remove("active-btn");

    contentBlocks.hour.classList.add("hide");
    contentBlocks.now.classList.remove("hide");
    contentBlocks.days.classList.add("hide");


});

buttons.days.addEventListener("click", function(){
  buttons.hour.classList.remove("active-btn");
  buttons.now.classList.remove("active-btn");
  buttons.days.classList.add("active-btn");

  contentBlocks.hour.classList.add("hide");
  contentBlocks.now.classList.add("hide");
  contentBlocks.days.classList.remove("hide");


})

