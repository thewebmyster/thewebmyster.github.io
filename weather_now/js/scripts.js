const weatherObject = new XMLHttpRequest();
weatherObject.open("GET","http://api.openweathermap.org/data/2.5/weather?zip=83127,us&appid=437209d363a4387bb2f5dffcea58bbee", true);
weatherObject.send();
weatherObject.onload = function {
    let weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
} //end of the onload function