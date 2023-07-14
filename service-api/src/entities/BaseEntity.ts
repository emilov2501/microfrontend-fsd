import { AxiosResponse } from "axios";

export class BaseEntity {
  json: AxiosResponse;

  constructor(response: AxiosResponse) {
    this.json = response;
  }
}
