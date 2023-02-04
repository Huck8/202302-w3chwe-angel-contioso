import Component from "../Component/Component.js";
import Header from "../Header/Header.js";

export default class App extends Component {
  #header: Header;

  constructor(parentElement: HTMLElement | undefined) {
    super(parentElement, "app-container", "main");
    this.#header = new Header(this.domElement, "./img/pokemon-logo.svg");
  }

  render(): void {
    super.render();
    this.#header.render();
  }
}
