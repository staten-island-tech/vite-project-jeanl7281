import { DomSelectors } from "./main";
import { dogtypes } from "./selections";

const createFilters = {
  Large: function () {
    dogtypes
      .filter((dog) => dog.size.includes("Large"))
      .forEach((dog) => {
        DomSelectors.parent.insertAdjacentHTML(
          "beforeend"`<div class="child"></div>
        <p>${dog.name}</p>
        <p><img class="img"src= ${dog.img}</p>
        <p>$${dog.price}</p></div>`
        );
      });
  },
  Medium: function () {
    dogtypes
      .filter((dog) => dog.size.includes("Medium"))
      .forEach((dog) => {
        DomSelectors.parent.insertAdjacentHTML(
          "beforeend"`<div class="child"></div>
        <p>${dog.name}</p>
        <p><img class="img"src= ${dog.img}</p>
        <p>$${dog.price}</p></div>`
        );
      });
  },
  Small: function () {
    dogtypes
      .filter((dog) => dog.size.includes("Small"))
      .forEach((dog) => {
        DomSelectors.parent.insertAdjacentHTML(
          "beforeend"`<div class="child"></div>
        <p>${dog.name}</p>
        <p><img class="img"src= ${dog.img}</p>
        <p>$${dog.price}</p></div>`
        );
      });
  },
  Mixed: function () {
    dogtypes
      .filter((dog) => dog.breed.includes("Mixed"))
      .forEach((dog) => {
        DomSelectors.parent.insertAdjacentHTML(
          "beforeend"`<div class="child"></div>
        <p>${dog.name}</p>
        <p><img class="img"src= ${dog.img}</p>
        <p>$${dog.price}</p></div>`
        );
      });
  },
  Purebred: function () {
    dogtypes
      .filter((dog) => dog.breed.includes("Purebred"))
      .forEach((dog) => {
        DomSelectors.parent.insertAdjacentHTML(
          "beforeend"`<div class="child"></div>
        <p>${dog.name}</p>
        <p><img class="img"src= ${dog.img}</p>
        <p>$${dog.price}</p></div>`
        );
      });
  },
};

const myFunctions = {
  makeCards: function () {
    const cards = document.querySelectorAll(".child");
    const cardsArray = Array.from(cards);
    cardsArray.forEach((cards) => {
      cards.remove();
    });
  },
  filterLarge: DomSelectors.largeBtn.addEventListener("click", function () {
    dogtypes.filter((dog) => dog.size.includes("large"));
  }),
};
