
// ToDo
// When the user submits the search form, make an API request to open weather api's search endpoint
// https://api.openweathermap.org/data/2.5/weather?q=CITY&APPID=KEY
// Icon URL - refer to docs on how to use
// https://openweathermap.org/img/wn/####@2x.png  - replace #### with icon code
// Display the results in the #weather-results div
// Each new search should erase the previous results

const myApiKey = "AEs5OlTHrQUfIPJKawgU5CIuogzSaw4l";

async function handleWeatherRequest(e) {
  e.preventDefault();
  // get user input value from textbox
  let city =document.querySelector('input[name="city"]').value;
  // build the url address with YOUR personal API key and the users input city
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}CITY&APPID=${myApikey}`;
  // make an API call using fetch() and capture the response in a variable
 const response = await fetch (apiUrl);
  // convert the response to a readable json format with .json()
  const convert = await response.json();
  // print your data to the console to see its format, dont forget to delete later
  console.log (convert);
  // Write a separate function to convert the temps from the default units (Kelvin) to a more readable F or C
  
function convertKtoF (kelvinTemp)
  const currentTemp = convertKtoF (convert.main.temp);
const feelslikeTemp = convertKtoD (convert.main.feels_like); 
const humidity = convert.main.humidity;
const pressure = convert.main.pressure; 
const highTemp = convertKtoF (convert.main.temp_max); 
const lowTemp = convertKtoF (convert.main.temp_min);



const weatherresults = `<li>The temparture in $ (convert.name) is currently $ (currentTemp) </li>

  // build the icon src
  
  // create icon img tag
  
  // add icon url as src
  
  // clear out previous icon img
  
  // print all results to dom
  
  // append icon img to dom
  
}

function convertyKtoF(kelvinTemp){
  let tempF = (kelvinTemp - 273) * 1.8 + 32;
  return tempF;
}
// Attach an event listener to the submit button
document.querySelector('#weather-search').addEventListener("submit", handleWeatherRequest);