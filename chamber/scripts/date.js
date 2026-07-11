const year = document.querySelector("#year");
const lastModified = document.querySelector("#last-modified");

// Current Year
year.textContent = new Date().getFullYear();

// Last Modified Date
lastModified.textContent = document.lastModified;
