/*Data*/

const jsonResponse = `{"location":{"name":"Boston","region":"Lincolnshire","country":"United Kingdom","lat":53.1,"lon":-0.13,"tz_id":"Europe/London","localtime_epoch":1720192251,"localtime":"2024-07-05 16:10"},"current":{"last_updated_epoch":1720191600,"last_updated":"2024-07-05 16:00","temp_c":22.1,"temp_f":71.8,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":10.5,"wind_kph":16.9,"wind_degree":230,"wind_dir":"SW","pressure_mb":1004.0,"pressure_in":29.65,"precip_mm":0.0,"precip_in":0.0,"humidity":41,"cloud":0,"feelslike_c":24.6,"feelslike_f":76.3,"windchill_c":18.0,"windchill_f":64.4,"heatindex_c":18.0,"heatindex_f":64.4,"dewpoint_c":10.1,"dewpoint_f":50.2,"vis_km":10.0,"vis_miles":6.0,"uv":5.0,"gust_mph":12.1,"gust_kph":19.4}}`;

const data = JSON.parse(jsonResponse);

const weatherDiv = document.getElementById('weather');
/*Display temperature and condition from the data*/
if (data && data.current) {
    const temperature = data.current.temp_c;
    const condition = data.current.condition.text;
    weatherDiv.innerHTML = `Temperature: ${temperature}°C <br> Condition: ${condition}`;
} else {
    weatherDiv.innerHTML = 'Weather data not available';
}
