class Items extends Component {
  append() {
    const $items = document.createElement("div");
    this.$element = $items;
    // 필요 시 class, id 추가
    this.$target.appendChild(this.$element);
  }

  setUp() {
    this.$state = { items: ["item1", "item2"] };
  }

  template() {
    const { items } = this.$state;
    return `
      <h1>Item Append Example</h1>
        <ul>
          ${items.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      <button>추가</button>
    `;
  }

  setEvent() {
    this.$element.querySelector("button").addEventListener("click", () => {
      const { items } = this.$state;
      const newState = {
        ...this.$state,
        items: [...items, `item${items.length + 1}`]
      };
      this.setState(newState);
    });
  }
}
