export function Button(title) {
  this.title = title;
  this.render = () => `<div class="btn">${this.title}</div>`;
}
