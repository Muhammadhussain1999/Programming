const button = document.getElementById("Search-button");
const input = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const temprature = document.getElementById("temprature");
async function getData(value) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=9b72252d4c4a4178a3b74516241101&q=${value}&aqi=yes`
  );
  return await response.json();
}
button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);
  cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
  cityTime.innerText = result.location.localtime;
  temprature.innerText = result.current.temp_c;
});
