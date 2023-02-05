import Component from "../Component/Component.js";
import Header from "../Header/Header.js";
import Card from "../Card/Card.js";
export default class App extends Component {
    #header;
    #card;
    constructor(parentElement) {
        super(parentElement, "app-container", "main");
        this.#header = new Header(this.domElement, "./img/pokemon-logo.svg");
        this.#card = new Card(this.domElement, "Titulo", "Lorem Ipsum");
        this.#card = new Card(this.domElement, "Titulooooo", "Lorem Ipsum");
    }
    render() {
        super.render();
        this.#header.render();
        this.#card.render();
        this.#card.render();
    }
}
