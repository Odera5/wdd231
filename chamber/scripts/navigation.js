const hambuger = document.querySelector("#hambuger");
const hambugerIcon = document.querySelector(".hambuger-icon");
const navigation = document.querySelector(".navigation");
hambuger.addEventListener("click", () => {
  hambugerIcon.classList.toggle("active");
  navigation.classList.toggle("show-navigation");
});
