import Component from "../Component/Component.js";
import Header from "../Header/Header.js";
export default class App extends Component {
    #header;
    constructor(parentElement) {
        super(parentElement, "app-container", "main");
        this.#header = new Header(this.domElement, "./img/pokemon-logo.svg");
    }
    render() {
        super.render();
        this.#header.render();
    }
}
