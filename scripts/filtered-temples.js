let date = new Date();
document.getElementById('currentyear').innerHTML = `${date.getFullYear()}`;
document.querySelector('#lastModified').textContent = `Last Modified: ${document.lastModified}`;

const hambButton = document.querySelector('#hambButton');
const navMenu = document.querySelector('#navmenu');


hambButton.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('active');
  hambButton.classList.toggle('open', isOpen);
  hambButton.setAttribute('aria-expanded', String(isOpen));
  hambButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.matchMedia('(max-width: 739px)').matches) {
      navMenu.classList.remove('active');
      hambButton.classList.remove('open');
      hambButton.setAttribute('aria-expanded', 'false');
      hambButton.setAttribute('aria-label', 'Open navigation menu');
    }
  });
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Toronto Ontario",
    location: "Ontario, Canada",
    dedicated: "1990, August, 25",
    area: 55558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 53997,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
  },
  {
    templeName: "Durban South Africa",
    location: "Durban, South Africa",
    dedicated: "2020, febuary, 16",
    area: 19860,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-72674-main.jpg"
  }
];

createTempleCard(temples);

const nonuhahLink = document.querySelector('#nonutah');

// nonuhahLink.addEventListener("click", (event) => {
//   event.preventDefault();
//   createTempleCard(temples.filter(temple => !temple.location.includes("Utah")));
// });

function createTempleCard(filteredTemples) {
  document.querySelector('.res-grid').innerHTML = "";
  filteredTemples.forEach(temple => {
    let card = document.createElement('section');
    let name = document.createElement('h3');
    let location = document.createElement('p');
    let dedicated = document.createElement('p');
    let area = document.createElement('p');
    let img = document.createElement('img');

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label>Location:<span> ${temple.location}`;
    dedicated.innerHTML = `<span class="label>Dedicated:<span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label>Size:<span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector('.res-grid').appendChild(card);
  });
}