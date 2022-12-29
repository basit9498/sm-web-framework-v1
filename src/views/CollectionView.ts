import { Collection } from "../model/Collection";
import { User, UserProps } from "../model/User";

export abstract class CollectionView<T, K> {
  // constructor(public parent:Element,public collection:Collection<User,UserProps>){}
  //make generic
  constructor(public parent: Element, public collection: Collection<T, K>) {}
  abstract renderItem(model: T, itemParent: Element): void;
  render(): void {
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");

    for (let model of this.collection.model) {
      const itemParent = document.createElement("div");
      this.renderItem(model, itemParent);
    }

    this.parent.append(templateElement.content);
  }
}
