export interface User {
  email: string;
  id: number;
  photo?: string;
}

export interface RegResp {
  token: string;
}

export interface LogResp {
  token: string;
}