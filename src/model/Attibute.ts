import { UserProps } from "./User";

export class Attribute<T> {
  constructor(private data: T) {}

  // Here we don't know above (number | string | boolean | Date .....) the retrun beacuse we make them geniric
  //   get(key: string): number | string {
  //     return this.data[key];
  //   }

  //Generic
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  //   set(update: { name: string; age: number }): void {}
  set(update: T): void {
    Object.assign(this.data, update);
  }
  getAll(): T {
    return this.data;
  }
}

//After add generic
// const attr = new Attribute<UserProps>({
//   id: 2,
//   name: "aasas",
//   age: 23,
// });
// const id = attr.get("id");
// const name = attr.get("name");

// ---------------
// const attr = new Attribute<UserProps>({
//   id: 2,
//   name: "aasas",
//   age: 23,
// });

// // const id = attr.get("id");
// const id = attr.get("id") as number;

// //what about attr.get("name")
// if (typeof id === "number") {
//   console.log("/.//////");
// }
