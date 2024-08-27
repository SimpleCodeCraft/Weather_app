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

function windDirection(direction){
  if(direction > 337 || direction < 23){
    return ' 🡩';
    // return ' півн';
}
  else if(direction >= 23 && direction < 68){
    return ' 🡭'
    // return ' пів-схід';
  }
  else if(direction >= 68 && direction < 113){
    return ' 🡪';
  }
  else if(direction >= 113 && direction < 158){
    return ' 🡮';
  }
  else if(direction >= 158 && direction < 203){
    return ' 🡫';
  }
  else if(direction >= 203 && direction < 248){
    return ' 🡯';
  }
  else if(direction >= 248 && direction < 293){
    return ' 🡨';
  }
  else if(direction >= 293 && direction < 338){
    return ' 🡬';
  }
}


export {getWeather, windDirection};