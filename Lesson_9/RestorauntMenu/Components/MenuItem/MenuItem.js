export default class MenuItem {
  constructor({ id, title, img, price, category, description }) {
    this.id = id;
    this.img = img;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
  }

  render() {
    return `
    <article class="menu-item">
            <div class="menu-item-photo">
              <img src="${this.img}" alt="${this.title}" width="300" height="200">
            </div>
            <div class="menu-item-content">
              <div class="menu-item-content-title">
                <span class="menu-item-content-name">${this.title}</span>
                <span class="menu-item-content-price">$${this.price}</span>
              </div>
              <div class="menu-item-content-description">${this.description}</div>
            </div>
        </article>
    `;
  }
}
