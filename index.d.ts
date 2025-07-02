export class BaseElement extends HTMLElement {
  get state(): {
    attrs: Record<string, string>;
    context: any;
    instanceID: string;
    store: Record<string, any>;
  };

  attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ): void;

  attrsToObject(attrs: any[]): Record<string, string>;

  html(str: string, ...values: any[]): string;
}
