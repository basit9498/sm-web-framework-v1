import { AxiosResponse, AxiosPromise } from "axios";

interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attribute: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  //   get on() {
  //     return this.events.on;
  //   }

  //   get trigger() {
  //     return this.events.trigger;
  //   }
  //   get get() {
  //     return this.attribute.get;
  //   }

  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attribute.get;

  set(update: T): void {
    this.attribute.set(update);
    this.events.trigger("change");
  }
  fetch(): void {
    const id = this.get("id");
    if (typeof id !== "number") {
      throw new Error("Cannot fetch without ID");
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    this.sync
      .save(this.attribute.getAll())
      .then((response: AxiosResponse) => {
        this.trigger("save");
      })
      .catch((error) => {
        this.trigger("error");
      });
  }
}
