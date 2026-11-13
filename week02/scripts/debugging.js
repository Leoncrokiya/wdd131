const radiusOutput = document.getElementById('radius');
const areaOutput = document.querySelector('#area');

let area = 0;
const PI = 3.14159;

let radius = 10;
area = (radius * radius) * PI;
radiusOutput.textContent = radius;
areaOutput.textContent = area;

radius = 20;
area = (radius * radius) * PI;
radiusOutput.textContent = radius;
areaOutput.textContent = area;