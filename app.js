//TODO:Element Selectors
const cardArea = document.querySelector(".cardArea");
const navSearch = document.querySelector("#navbarInput");

// TODO:Event Listeners
navSearch.addEventListener("keyup", onChangeHandler);

//TODO:Creating Element
const card = document.createElement("div");
card.classList.add("cardMainDiv");
const modalSubInfo = document.createElement("div");

//TODO: Fetch
let allData = [];
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    allData = data;
    let rnd = Math.trunc(Math.random() * 80);
    reducedData = data.slice(rnd, rnd + 10);
    listItem(reducedData);
  });

const listItem = (data) => {
  data.forEach((item) => {
    card.innerHTML += ` <div class="cards">
      <div class="face front">
      <img src="https://picsum.photos/id/${
        item.id + 5
      }/200/300" alt="lorem-image" style="border-radius:15px">
      </div>
      <div class="face back">
      <p><b> ${item.title.toUpperCase()}</b></p>
      <br/>
      <p>${item.body}</p>

      </div>
    </div>`;
    cardArea.appendChild(card);
  });
};

//Input Filter
function onChangeHandler(e) {
  let input = e.target.value;
  filteredData = allData.filter(
    (item) => item.body.includes(input) || item.title.includes(input)
  );
  //Clear card list
  card.innerHTML = "";
  //List filtered items
  if (filteredData.length > 0) {
    listItem(filteredData.slice(0, 10));
  } else {
    card.innerHTML = ` <div class="cards no-result-img">
    <div class="face front">
    <img src="https://cdn.dribbble.com/users/1554526/screenshots/3399669/media/51c98501bc68499ed0220e1ba286eeaf.png?compress=1&resize=400x300" alt="no-result-found" style="border-radius:15px">
    </div>
    <div class="face back">
    <img class="" src="https://cdn.dribbble.com/users/1554526/screenshots/3399669/media/51c98501bc68499ed0220e1ba286eeaf.png?compress=1&resize=400x300" alt="no-result-found" style="border-radius:15px">
    </div>
  </div>`;
  }
  if (input.length === 0) {
    searchResult.innerHTML = "";
  }
}
