const leftContainerNode = document.querySelector(".left-order");
const rightContainerNode = document.querySelector(".right-order");

function addRow() {
  addNameRow();
  addQuantityRow();
}

function removeRow() {
  removeRowInContainer(leftContainerNode);
  removeRowInContainer(rightContainerNode);
}

function removeRowInContainer(container) {
  const nodes = Array.from(container.querySelectorAll(".pweb-field-container"));
  const lastNode = nodes.getLast();
  lastNode.remove();
}

/**
 * Add element like this html:
 * <div class="pweb-field-container">
        <input
        class="pweb-input new-pw-in"
        type="text"
        placeholder="Наименование товара"
        />
    </div>
 */

function createDiv() {
  const div = document.createElement("div");
  div.classList.add("pweb-field-container");
  return div;
}

function createInput(attributes) {
  const input = document.createElement("input");
  input.classList.add("pweb-input");
  input.classList.add("new-pw-in");
  input.setAttribute("type", "text");
  attributes?.forEach((attr) => input.setAttribute(attr.name, attr.value));
  return input;
}

function addNameRow() {
  const div = createDiv();
  const input = createInput([
    {
      name: "placeholder",
      value: "Наименование товара",
    },
  ]);

  div.appendChild(input);
  leftContainerNode.appendChild(div);
}

function addQuantityRow() {
  const div = createDiv();
  const input = createInput();
  div.appendChild(input);
  rightContainerNode.appendChild(div);
}

const addButton = document.querySelector("#addRowBtn");
addButton.addEventListener("click", () => {
  addRow();
});

const removeButton = document.querySelector("#removeRowBtn");
removeButton.addEventListener("click", () => {
  removeRow();
});

Array.prototype.getLast = function () {
  return this[this.length - 1];
};
