import Component from "../Component/Component.js";

export default class Header extends Component {
  #text: string;

  constructor(parentElement: HTMLElement, text: string) {
    super(parentElement, "container-logo");
    this.#text = text;
  }

  render(): void {
    super.render();
    this.domElement.innerHTML = `<img src = ${this.#text}>`;
  }
}

// Con el hastag la que es mia y la otra las que se heredan
/* Lo que llame en el super también lo tengo que llamar como parámetro */
