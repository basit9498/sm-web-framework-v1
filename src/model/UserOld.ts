/**
 * V2--------------------
 */

// import { Attribute } from "./Attibute";
// import { Eventing } from "./Eventing";
// import { Sync } from "./Sync";
// import { AxiosResponse } from "axios";
// export interface UserProps {
//   id?: number;
//   name?: string;
//   age?: number;
// }
// const rootUrl = "http://localhost:3000/users";

// export class User {
//   public events: Eventing = new Eventing();
//   public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
//   public attribute: Attribute<UserProps>;
//   constructor(attrs: UserProps) {
//     this.attribute = new Attribute<UserProps>(attrs);
//   }

//   // on(eventName: string, callback: Callback): void {
//   //   this.events.on(eventName, callback);
//   // }
//   //below code for above on
//   //not calling function only give refrence

//   //----Shift to Model Class
//   // get on() {
//   //   return this.events.on;
//   // }
//   // get trigger() {
//   //   return this.events.trigger;
//   // }
//   // get get() {
//   //   return this.attribute.get;
//   // }

//   // set(update: UserProps): void {
//   //   this.attribute.set(update);
//   //   this.events.trigger("change");
//   // }
//   // fetch(): void {
//   //   // const id = this.attribute.get("id");
//   //   const id = this.get("id");
//   //   if (typeof id !== "number") {
//   //     throw new Error("Connot fetch without ID");
//   //   }

//   //   this.sync.fetch(id).then((response: AxiosResponse): void => {
//   //     // this.attribute.set(response.data);
//   //     this.set(response.data);
//   //   });
//   // }

//   // save(): void {
//   //   this.sync
//   //     .save(this.attribute.getAll())
//   //     .then((response: AxiosResponse) => {
//   //       this.trigger("save");
//   //     })
//   //     .catch((error) => {
//   //       this.trigger("error");
//   //     });
//   // }
// }

/**
 * V1 ------------------------------
 */

// import axios, { AxiosResponse } from "axios";
// import { Attribute } from "./Attibute";
// import { Eventing } from "./Eventing";
// import { Sync } from "./Sync";

// export interface UserProps {
//   //optional Data
//   id?: number;
//   name?: string;
//   age?: number;
// }
// const rootUrl = "http://localhost:3000/users";
// // type Callback = () => {};
// // type Callback = () => void;

// export class User {
//   public events: Eventing = new Eventing();
//   public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
//   // public attribute: Attribute<UserProps> = new Attribute<UserProps>();//Need arguments is nedcesart
//   public attribute: Attribute<UserProps>;
//   constructor(attrs: UserProps) {
//     this.attribute = new Attribute<UserProps>(attrs);
//   }

//   //click:callback
//   // create envents when create after user created empty events
//   // events: { [key: string]: Callback[] } = {};
//   //   constructor(private data: { name: string; age: number }) {}
//   // constructor(private data: UserProps) {}
//   // //type union
//   // get(propName: string): number | string | undefined {
//   //   // return this.data[propName as keyof UserProps]; //after add ? it give error
//   //   return this.data[propName as keyof UserProps]; //after add ? it give error include this | undefined
//   // }

//   // //   set(update: { name: string; age: number }): void {}
//   // set(update: UserProps): void {
//   //   Object.assign(this.data, update);
//   // }

//   // on(eventName: string, callback: Callback): void {
//   //   // // quckik examplet
//   //   // this.events["any name"] = [];
//   //   // this.events[eventName]; //calbacks or undefined
//   //   const handlers = this.events[eventName] || [];
//   //   handlers.push(callback);
//   //   this.events[eventName] = handlers;
//   // }

//   // trigger(eventName: string): void {
//   //   const handlers = this.events[eventName];
//   //   if (!handlers || handlers.length === 0) {
//   //     return;
//   //   }

//   //   handlers.forEach((callback) => {
//   //     callback();
//   //   });
//   // }

//   // fetch(): void {
//   //   axios
//   //     .get(`http://localhost:3000/users/${this.get("id")}`)
//   //     .then((response: AxiosResponse): void => {
//   //       this.set(response.data);
//   //     });
//   // }

//   // save(): void {
//   //   const id = this.get("id");
//   //   if (id) {
//   //     //put
//   //     axios.put(`http://localhost:3000/users/${id}`, this.data);
//   //   } else {
//   //     //post
//   //     axios.post("http://localhost:3000/users", this.data);
//   //   }
//   // }
// }
