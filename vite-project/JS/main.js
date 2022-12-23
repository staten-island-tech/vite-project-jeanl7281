import { dogtypes } from "./selections";
import "./Styles/style.css";
import { DOMSelectors } from "./dom";
import { DOMSelectorsTwo } from "./dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

DOMSelectorsTwo.light.addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  } 
});

DOMSelectorsTwo.dark.addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
});


function alldogs() {
  dogtypes
    .forEach((dog) => {
    DOMSelectors.dogtype.insertAdjacentHTML(
      "beforeend",
      `<div class="dog-card">
              <h2>${item.name}</h2>
              <img class="dog-image" src="${dog.image}">
              <p class="dog-price">$${dog.price}</p>
              <p class="dog-description">${dog.description}</p>
          </div>`
    );
  });
}

alldogs();

function large() {
  dogtypes
    .filter((dog) => dog.size.includes("Large"))
    .forEach((dog) => {
      DOMSelectors.dogtype.insertAdjacentHTML(
        "beforeend",
        `<div class="dog-card">
                <h2 class="name">${dog.name}</h2>
                <img class="dog-image" src="${dog.image}">
                <p class="dog-price">$${dog.price}</p>
                <p class="dog-description">${dog.description}</p>
            </div>`
      );
    });
}

function medium() {
  dogtypes
    .filter((dog) => dog.size.includes("Medium"))
    .forEach((dog) => {
      DOMSelectors.dogtype.insertAdjacentHTML(
        "beforeend",
        `<div class="dog-card">
                <h2 class="name">${dog.name}</h2>
                <img class="dog-image" src="${dog.image}">
                <p class="dog-price">$${dog.price}</p>
                <p class="dog-description">${dog.description}</p>
            </div>`
      );
    });
}

function small() {
  dogtypes
    .filter((dog) => dog.size.includes("Small"))
    .forEach((dog) => {
      DOMSelectors.dogtype.insertAdjacentHTML(
        "beforeend",
        `<div class="dog-card">
                <h2 class="name">${dog.name}</h2>
                <img class="dog-image" src="${dog.image}">
                <p class="dog-price">$${dog.price}</p>
                <p class="dog-description">${dog.description}</p>
            </div>`
      );
    });
}

function pure() {
  dogtypes
    .filter((dog) => dog.breed.includes("Purebred"))
    .forEach((dog) => {
      DOMSelectors.dogtype.insertAdjacentHTML(
        "beforeend",
        `<div class="menu-card">
                <h2 class="name">${dog.name}</h2>
                <img class="menu-image" src="${dog.image}">
                <p class="menu-price">$${dog.price}</p>
                <p class="menu-description">${dog.description}</p>
            </div>`
      );
    });
}

function mixed() {
  dogtypes
    .filter((dog) => dog.breed.includes("Mixed"))
    .forEach((dog) => {
      DOMSelectors.dogtype.insertAdjacentHTML(
        "beforeend",
        `<div class="dog-card">
                <h2 class="name">${dog.name}</h2>
                <img class="dog-image" src="${dog.image}">
                <p class="dog-price">$${dog.price}</p>
                <p class="dog-description">${dog.description}</p>
            </div>`
      );
    });
}

function clear() {
  DOMSelectors.dogtype.innerHTML = "";
}

document.getElementById("all").addEventListener("click", function () {
  clear();
  alldogs();
});

document.getElementById("large").addEventListener("click", function () {
  clear();
  large();
});

document.getElementById("medium").addEventListener("click", function () {
  clear();
  medium();
});

document.getElementById("small").addEventListener("click", function () {
  clear();
  small();
});

document.getElementById("pure").addEventListener("click", function () {
  clear();
  pure();
});

document.getElementById("mixed").addEventListener("click", function () {
  clear();
  mixed();
});