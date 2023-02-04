import type ComponentStructure from "../types.js";

class Component implements ComponentStructure {
  domElement: HTMLElement;

  constructor(
    private readonly parentElement: HTMLElement, // Le dan el scoped al parentElement
    className: string,
    tag = "article"
  ) {
    this.domElement = document.createElement(tag);
    this.domElement.className = className;
  }

  render(): void {
    this.parentElement.appendChild(this.domElement);
  }
}

export default Component;
