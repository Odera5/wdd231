const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const forecast = document.querySelector("#forecast");
const spotlightContainer = document.querySelector("#spotlights");

const apiKey = "ba6a584c483631b66968e5941c83e157";

const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=7.3775&lon=3.9470&units=metric&appid=${apiKey}`;

const membersURL = "data/members.json";

async function getWeather() {
  try {
    const response = await fetch(weatherURL);

    if (!response.ok) {
      throw new Error("Failed to fetch weather data.");
    }

    const data = await response.json();

    displayCurrentWeather(data);
    displayForecast(data);
  } catch (error) {
    console.error(error);
  }
}

function displayCurrentWeather(data) {
  const current = data.list[0];

  temperature.textContent = `${Math.round(current.main.temp)}°C`;
  description.textContent = current.weather[0].description;
}

function displayForecast(data) {
  forecast.innerHTML = "";

  const dailyForecasts = data.list.filter((item) =>
    item.dt_txt.includes("12:00:00"),
  );

  dailyForecasts.slice(0, 3).forEach((day) => {
    const date = new Date(day.dt_txt);

    const weekday = date.toLocaleDateString("en-US", {
      weekday: "long",
    });

    const forecastItem = document.createElement("p");

    forecastItem.innerHTML = `
      <strong>${weekday}:</strong> ${Math.round(day.main.temp)}°C
    `;

    forecast.appendChild(forecastItem);
  });
}

async function getMembers() {
  try {
    const response = await fetch(membersURL);

    if (!response.ok) {
      throw new Error("Unable to load member data.");
    }

    const data = await response.json();

    displaySpotlights(data.members);
  } catch (error) {
    console.error(error);
  }
}

function displaySpotlights(members) {
  spotlightContainer.innerHTML = "";

  const qualifiedMembers = members.filter(
    (member) => member.membershipLevel >= 2,
  );

  const shuffled = qualifiedMembers.sort(() => Math.random() - 0.5);

  const selected = shuffled.slice(0, 3);

  selected.forEach((member) => {
    const card = document.createElement("section");

    card.classList.add("spotlight-card");

    card.innerHTML = `
      <img
        src="images/${member.image}"
        alt="${member.name} logo"
        loading="lazy"
        width="120"
        height="120"
      >

      <h3>${member.name}</h3>

      <p>${member.description ?? member.industry}</p>

      <p><strong>Phone:</strong> ${member.phone}</p>

      <p><strong>Address:</strong> ${member.address}</p>

      <p>
        <a href="${member.website}" target="_blank">
          Visit Website
        </a>
      </p>

      <p>
        <strong>Membership:</strong>
        ${member.membershipLevel === 3 ? "Gold" : "Silver"}
      </p>
    `;

    spotlightContainer.appendChild(card);
  });
}

getWeather();
getMembers();
