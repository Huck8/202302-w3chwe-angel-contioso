import Component from "../Component/Component.js";
export default class Card extends Component {
  #text: string;
  description: string;

  constructor(parentElement: HTMLElement, text: string, description: string) {
    super(parentElement, "container-card");
    this.#text = text;
    this.description = description;
  }

  render(): void {
    super.render();
    this.domElement.innerHTML = `<img width="200" src="https://images.wikidexcdn.net/mwuploads/wikidex/5/56/latest/20200307023245/Charmander.png">
    <H2>${this.#text}</H2>
    <p>${this.description}</p>
    <p>${this.description}</p>
    
    
    `;
  }
}
