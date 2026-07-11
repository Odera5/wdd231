const url = "./data/members.json";
const getMembersData = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Unable to fetch members");
    }

    const data = await response.json();

    displayMembers(data.members);
  } catch (error) {
    console.error(error);
  }
};
getMembersData();

const directoryContainer = document.querySelector(".directory-container");
const displayMembers = function (members) {
  members.forEach((member) => {
    const section = document.createElement("section");
    const name = document.createElement("h2");
    const address = document.createElement("p");
    const phone = document.createElement("p");
    const website = document.createElement("a");
    const image = document.createElement("img");
    const level = document.createElement("p");
    name.textContent = member.name;
    address.textContent = member.address;
    phone.textContent = member.phone;
    website.textContent = member.website;
    website.href = member.website;
    website.target = "_blank";
    website.rel = "noopener";
    image.src = `images/${member.image}`;
    image.alt = `${member.name} company logo`;
    image.loading = "lazy";
    image.width = 100;
    image.height = 100;

    level.textContent = member.membershipLevel;
    directoryContainer.appendChild(section);
    section.append(name, image, address, phone, website, level);
  });
};
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");

gridBtn.addEventListener("click", () => {
  directoryContainer.classList.add("grid");
  directoryContainer.classList.remove("list");
});

listBtn.addEventListener("click", () => {
  directoryContainer.classList.add("list");
  directoryContainer.classList.remove("grid");
});
