export { DomSelectors };
import "../Styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./dom.js";
AOS.init();
import "./selections.js";

const DomSelectors = {
  colorChange: document.querySelector("btn1"),
  allBtn: document.querySelector(".btn2"),
  largeBtn: document.querySelector(".btn3"),
  mediumBtn: document.querySelector(".btn4"),
  smallBtn: document.querySelector(".btn5"),
  pureBtn: document.querySelector(".btn6"),
  parent: document.querySelector("#parentContainer"),
  child: document.querySelector(".child"),
};

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
});
