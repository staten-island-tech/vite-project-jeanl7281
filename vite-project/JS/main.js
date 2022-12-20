export { DomSelectors };
import "../Styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./dom.js";
AOS.init();
import "./selections.js";

const DomSelectors = {
  colorChange: document.querySelector("btn1"),
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
