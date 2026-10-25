const ItemList = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
];

class ListItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.name = this.getAttribute("name") || "Item";
    this.render();
  }

  toggleSelection() {
    const button = this.shadowRoot.querySelector("button");
    const isSelected = button.style.backgroundColor === "lightblue";
    button.style.backgroundColor = isSelected ? "lightgray" : "lightblue";
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        button {
          width: 100%;
          padding: 10px;
          margin: 5px 0;
          background-color: lightgray;
          border: 1px solid #ccc;
          cursor: pointer;
          text-align: left;
          font: inherit;
        }
        button:hover {
          background-color: #f0f0f0;
        }
      </style>
      <button type="button">${this.name}</button>
    `;

    this.shadowRoot
      .querySelector("button")
      .addEventListener("click", () => this.toggleSelection());
  }
}

class ListContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
      </style>
      <ul>
        ${ItemList.map(
          (item) =>
            `<li><list-item id="${item.id}" name="${item.name}"></list-item></li>`,
        ).join("")}
      </ul>
    `;
  }
}

customElements.define("list-item", ListItem);
customElements.define("list-container", ListContainer);
