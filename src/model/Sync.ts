import axios, { AxiosPromise } from "axios";
import { UserProps } from "./User";

interface HasId {
  id?: number;
}
export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  /**
   * Using generic
   */
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }
  save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }

  //   /**
  //    * This way only working for User class not other class
  //    */
  //   fetch(id: number): AxiosPromise {
  //     return axios.get(`${this.rootUrl}/${id}`);
  //   }
  //   save(data: UserProps): AxiosPromise {
  //     const { id } = data;
  //     if (id) {
  //       return axios.put(`${this.rootUrl}/${id}`, data);
  //     } else {
  //       return axios.post(this.rootUrl, data);
  //     }
  //   }

  /**
   * Normal
   */
  //   fetch(id: number): void {
  //     axios
  //       .get(`${this.rootUrl}/${this.get("id")}`)
  //       .then((response: AxiosResponse): void => {
  //         this.set(response.data);//probelm here how to figure out this
  //       });
  //   }
  //   save(data: UserProps): void {
  //     // const id = this.get("id");
  //     const { id } = data;
  //     if (id) {
  //       //put
  //       //   axios.put(`${this.rootUrl}/${id}`, this.data);
  //       axios.put(`${this.rootUrl}/${id}`, data);
  //     } else {
  //       //post
  //       //   axios.post(this.rootUrl, this.data);
  //       axios.post(this.rootUrl, data);
  //     }
  //   }
}
