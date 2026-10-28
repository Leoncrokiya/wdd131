document.getElementById("currentyear").innerHTML = new Date().getFullYear();

document.getElementById("lastModified").innerHTML = `Last Modified: ${new Intl.DateTimeFormat('en-US').format()}`;