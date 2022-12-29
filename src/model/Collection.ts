import { Eventing } from "./Eventing";
import axios, { AxiosResponse } from "axios";

export class Collection<T, K> {
  model: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }
  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((val: K) => {
        // const user = User.buildUser(val);
        // this.model.push(user);
        this.model.push(this.deserialize(val));
      });
      this.trigger("change");
    });
  }
}
