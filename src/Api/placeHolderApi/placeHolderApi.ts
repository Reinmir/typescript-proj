import axios from "axios";
import { ToDoValue, UserToDo } from "Api/placeHolderApi/model";

export class PlaceHolderApi {
  static baseUrl = "https://jsonplaceholder.typicode.com";

  static async getToDos(): Promise<ToDoValue[]> {
    const { data } = await axios.get<ToDoValue[]>(
      `${PlaceHolderApi.baseUrl}/todos`
    );
    return data;
  }

  static async exacToDo(id: number): Promise<ToDoValue> {
    const { data } = await axios.get<ToDoValue>(
      `${PlaceHolderApi.baseUrl}/todos/${id}`
    );
    // console.log(data);
    return data;

    // { id: Number; title: string; completed: Boolean; userId: number }
  }

  static async getUser(userId: number): Promise<UserToDo> {
    const { data } = await axios.get<UserToDo>(
      `${PlaceHolderApi.baseUrl}/users/${userId}`
    );
    return data;
  }
}
