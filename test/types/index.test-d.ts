import { BaseElement } from "../../index";

// Class accurately represents the BaseElement class
const goodBaseElement: BaseElement = new BaseElement();

// HTMLElement is a subclass of BaseElement
const htmlElement: HTMLElement = new BaseElement();

// @ts-expect-error HTMLElement is not a subclass of BaseElement
const badBaseElement: BaseElement = new HTMLElement(); // Error: Type 'HTMLElement' is missing the following properties from type 'BaseElement': state, attributeChangedCallback, attrsToObject, html
