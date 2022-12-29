import { User, UserProps } from "../model/User";
import { View } from "./View";

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
    <div>
       <h1>User Detail</h1>
       <div>UserName: ${this.model.get("name")}</div>
       <div>UserName: ${this.model.get("age")}</div>
    </div>
       `;
  }
}
