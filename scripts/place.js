document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = `Last Modified: ${new Intl.DateTimeFormat('en-US').format()}`;

document.getElementById('con').textContent = "Mostly cloudy";

const temperature = 4;
const windSpeed = 13;
const temperatureElement = document.querySelector('#temp');
const windSpeedElement = document.querySelector('#wind-speed');
const windChillElement = document.querySelector('#wind-chill');

temperatureElement.textContent = `${temperature} °C`;
windSpeedElement.textContent = `${windSpeed} mph`;

if (temperature <= 10 && windSpeed * 1.6093 > 4.8) {
    const windSpeedKmh = windSpeed * 1.6093;
    const windChill = 13.12
        + 0.6215 * temperature
        - 11.37 * windSpeedKmh ** 0.16
        + 0.3965 * temperature * windSpeedKmh ** 0.16;
    windChillElement.textContent = `${windChill.toFixed(1)} °C`;
} else {
    windChillElement.textContent = "N/A";
}