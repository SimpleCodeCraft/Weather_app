"use strict"

import { divButtons, contentBlocks, buttons } from "./dom.js";
import { windDirection, getWeather } from "./functions.js";



document.addEventListener("DOMContentLoaded", function() {
  if(!!localStorage.getItem('coords')){

    const coords = JSON.parse(localStorage.getItem('coords'));
    
    getWeather(coords);
  }
  else{
    navigator.geolocation.getCurrentPosition(function(position){

      const coords = position.coords;
      
      getWeather(coords);

      localStorage.setItem('coords', JSON.stringify({latitude: coords.latitude, longitude: coords.longitude}));
    });
  }
});

divButtons.addEventListener('click', event => {
  
  switch (event.target.id) {
    case "btn-hour": {
      buttons.hour.classList.add("active-btn");
      buttons.now.classList.remove("active-btn");
      buttons.days.classList.remove("active-btn");

      contentBlocks.hour.classList.remove("hide");
      contentBlocks.now.classList.add("hide");
      contentBlocks.days.classList.add("hide");

      break;
    }
    case 'btn-now': {
      buttons.hour.classList.remove("active-btn");
      buttons.now.classList.add("active-btn");
      buttons.days.classList.remove("active-btn");

      contentBlocks.hour.classList.add("hide");
      contentBlocks.now.classList.remove("hide");
      contentBlocks.days.classList.add("hide");

      break;
    }
    case 'btn-days': {
      buttons.hour.classList.remove("active-btn");
      buttons.now.classList.remove("active-btn");
      buttons.days.classList.add("active-btn");

      contentBlocks.hour.classList.add("hide");
      contentBlocks.now.classList.add("hide");
      contentBlocks.days.classList.remove("hide");

      break;
    }
  }
  
});


