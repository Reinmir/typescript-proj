import axios from "axios";
import { KeyLocalStorage } from "constants/routeNames";
import {
  LogResp,
  RegResp,
  UpdateAvatarResponse,
  UpdateEmailResponse,
  UpdatePasswordResponse,
  User,
} from "./models";

export class NewApi {
  static baseUrl = "http://localhost:5000/api";

  static async Login(email: string, password: string): Promise<LogResp> {
    const response = await axios.post<LogResp>(`${NewApi.baseUrl}/auth/login`, {
      email,
      password,
    });
    return response.data;
  }

  static async Register(email: string, password: string): Promise<RegResp> {
    const { data } = await axios.post<RegResp>(
      `${NewApi.baseUrl}/auth/register`,
      {
        email,
        password,
      }
    );
    return data;
  }

  static async getUserSmb(): Promise<User> {
    const { data } = await axios.get<User>(`${NewApi.baseUrl}/user`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem(KeyLocalStorage.User)}`,
      },
    });
    return data;
  }

  static async updateAvatar(formData: FormData): Promise<UpdateAvatarResponse> {
    const { data } = await axios.post<UpdateAvatarResponse>(
      `${NewApi.baseUrl}/upload/user-avatar`,
      formData,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem(KeyLocalStorage.User)}`,
        },
      }
    );
    return data;
  }

  static async updateEmail(newEmail: string): Promise<UpdateEmailResponse> {
    const { data } = await axios.put<UpdateEmailResponse>(
      `${NewApi.baseUrl}/user/update-email`,
      { newEmail },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem(KeyLocalStorage.User)}`,
        },
      }
    );
    return data;
  }

  static async updatePassword(
    oldPassword: string,
    newPassword: string
  ): Promise<UpdatePasswordResponse> {
    const { data } = await axios.put<UpdateEmailResponse>(
      `${NewApi.baseUrl}/user/update-password`,
      { oldPassword, newPassword },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem(KeyLocalStorage.User)}`,
        },
      }
    );
    return data;
  }
}
