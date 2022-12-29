import { Attribute } from "./Attibute";
import { Collection } from "./Collection";
import { Eventing } from "./Eventing";
import { Model } from "./Model";
import { Sync } from "./Sync";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
const rootUrl = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps) {
    return new User(
      new Attribute<UserProps>(attrs),
      new Eventing(),
      new Sync<UserProps>(rootUrl)
    );
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) =>
      User.buildUser(json)
    );
  }

  // //Example of methods
  // isAdmin(): boolean {
  //   return this.get("id") === 1;
  // }
  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
