import { Button } from "./Components/Button/Button";
import { menu } from "./Models/Menu";

let filter = "all";

function renderMenu(filter) {
  const menuContainer = document.querySelector("#menu");

  const menuAsHtmlString = menu
    .filter((menuItem) => filter === "all" || menuItem.category === filter)
    .map((menuItem) => menuItem.render())
    .join("");
  menuContainer.innerHTML = menuAsHtmlString;

  renderButtons();
}

function removeDuplicates(array) {
  return Array.from(new Set(array));
}

function renderButtons() {
  const buttonsContainer = document.getElementById("buttons");
  const categories = removeDuplicates(
    menu.map((menuItem) => menuItem.category)
  );
  categories.unshift("all");
  const buttonsAsHtmlString = categories
    .map((category) => new Button(category).render())
    .join("");

  buttonsContainer.innerHTML = buttonsAsHtmlString;
}

renderMenu(filter);

document.addEventListener("click", (event) => {
  if (!event.target.classList.contains("btn")) return;
  const category = event.target.innerText;
  filter = category;
  renderMenu(filter);
});
