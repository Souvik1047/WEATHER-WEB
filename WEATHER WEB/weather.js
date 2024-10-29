const api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey= "6fd935ee70e19f2b1ca20124a346acee";

async function checkweather(city){
    const response=  await fetch(api+city+ `&appid=${apikey}`);
     var data = await response.json();
//hendel output when data not found

    console.log(data);
    if(data.name==undefined){document.querySelector(".city-name").innerHTML= "city not found"}
    else{
        document.querySelector(".city-name").innerHTML=data.name;
    }
     document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+`°c`;
     document.querySelector(".wind-speed").innerHTML=(data.wind.speed)+`km/h`; 
     document.querySelector(".humidity-level").innerHTML=(data.main.humidity)+`% `;
};

const cityname= document.querySelector(".searchbar input");
const button=document.querySelector(".searchbar button");

button.addEventListener("click", () =>{
checkweather(cityname.value);
} );