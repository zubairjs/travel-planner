/*
In a module file:
Create an object storing country info with emoji and fun fact
Write a function that accepts a country string and returns the info object
Export this function

In script.js :
Import the function from the module
Write a showDestination() function that:
Reads the selected country from the dropdown
Gets the travel data
Updates the result container with emoji + fact
Register the function to the window so it works on click
*/

import { getCountryInfo } from './country.js';

function showDestination() {
  const country = document.getElementById('countrySelect').value;
  const { emoji, info } = getCountryInfo(country);
  document.getElementById('travelInfo').textContent = `${emoji} ${info}`;
}

window.showDestination = showDestination;
