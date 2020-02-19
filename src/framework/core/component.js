export class Component {
  constructor(config) {
    //config destructorization
    Object.assign(this, config);
  }

  render() {
    document.querySelector(`.${this.entryClass}`).innerHTML = this.template;
  }
}
