let date = new Date();
document.getElementById('year').innerHTML = `${date.getFullYear()}`;
document.querySelector('#lastModified').textContent = `Last Modified: ${document.lastModified}`;