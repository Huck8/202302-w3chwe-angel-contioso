class Component {
    parentElement;
    domElement;
    constructor(parentElement, // Le dan el scoped al parentElement
    className, tag = "article") {
        this.parentElement = parentElement;
        this.domElement = document.createElement(tag);
        this.domElement.className = className;
    }
    render() {
        this.parentElement.appendChild(this.domElement);
    }
}
export default Component;
