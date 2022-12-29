// import { User } from "../model/User";

import { Model } from "../model/Model";

// interface ModelForView {
//   on(eventName: string, callback: () => void): void;
// }
interface ModelForViewHashId {
  id?: number;
}
export abstract class View<T extends Model<K>, K extends ModelForViewHashId> {
  //   constructor(public parent: Element, public model: User) {
  //     this.bindModel();
  //   }
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  //need to define as normal function not abstact beause may the child class will no need to use this class
  //   abstract eventsMap(): { [key: string]: () => void };
  abstract template(): string;

  //make as regular function and the override
  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  regionsMap(): { [key: string]: string } {
    return {};
  }

  bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);
      if (element) {
        this.regions[key] = element;
      }
    }
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":"); //click:button
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }
  onRender(): void {}
  render(): void {
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);
    this.onRender();
    this.parent.append(templateElement.content);
  }
}
