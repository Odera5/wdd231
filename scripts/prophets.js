const url =
  "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";
const cards = document.querySelector("#cards");

const getProphetData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  //   console.table(data.prophets);
  displayProphets(data.prophets);
};

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    const card = document.createElement("section");
    const fullName = document.createElement("h2");
    const portrait = document.createElement("img");
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", "prophets image");
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "200");
    portrait.setAttribute("height", "200");
    card.appendChild(fullName);
    card.appendChild(portrait);
    cards.appendChild(card);
  });
};

getProphetData();
