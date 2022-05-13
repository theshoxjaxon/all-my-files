let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form-control");
let elItem = document.querySelector(".item");
let elLoading = document.querySelector(".laoding");
let elAsos = document.querySelector(".asosiy");

elAsos.setTimeout(() => {
  elAsos.style.display = "block";
  elLoading.innerHTML = null;
}, 3000);

const getMovies = async function () {
  let requyest = await fetch(
    "https://imdb-api.com/en/API/MostPopularMovies/k_qnoz2bnq"
  );
  const data = await requyest.json();
  console.log(data);
  data.items.forEach(function (item) {
    let newImg = document.createElement("img");
    newImg.setAttribute("src", item.image);
    elItem.appendChild(newImg);
    newImg.style.width = `200px`;
  });
};
getMovies();
// getMovies();

// let renderDesc = function (arr, element) {
//   getMovies();
// };
// renderDesc();

let renderMovies = function (arr, element) {};
// elForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   let inputValue = elInput.value;
//   console.log(inputValue);
// });
