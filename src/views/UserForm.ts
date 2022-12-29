import { User, UserProps } from "../model/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  //   constructor(public parent: Element, public model: User) {
  //     this.bindModel();
  //   }

  //   bindModel(): void {
  //     this.model.on("change", () => {
  //       this.render();
  //     });
  //   }
  eventsMap(): { [key: string]: () => void } {
    return {
      //   "click:button": this.onButtonClick,
      //   "mouseenter:h1": this.onHoverHeader,
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
      "click:.save-model": this.onSaveClick,
    };
  }
  onButtonClick(): void {
    console.log("Button Cickied");
  }
  onHoverHeader(): void {
    console.log("H1 Mouseebter");
  }
  onSetAgeClick = (): void => {
    this.model.setRandomAge();
    console.log("onSetAgeClick Cickied");
  };
  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };
  onSaveClick = (): void => {
    this.model.save();
  };

  //   bindEvents(fragment: DocumentFragment): void {
  //     const eventsMap = this.eventsMap();
  //     for (let eventKey in eventsMap) {
  //       const [eventName, selector] = eventKey.split(":"); //click:button
  //       fragment.querySelectorAll(selector).forEach((element) => {
  //         element.addEventListener(eventName, eventsMap[eventKey]);
  //       });
  //     }
  //   }

  template(): string {
    return `
        <div>
            <h1>User Form</h1>
            <input placeholder="${this.model.get("name")}" />
            <button class="set-name">Change Name </button>
            <button class="set-age">Set Random Age </button>
            <button class="save-model">Save</button>
        </div>
        `;
  }

  //   render(): void {
  //     this.parent.innerHTML = "";
  //     const templateElement = document.createElement("template");
  //     templateElement.innerHTML = this.template();
  //     this.bindEvents(templateElement.content);
  //     this.parent.append(templateElement.content);
  //   }
}
