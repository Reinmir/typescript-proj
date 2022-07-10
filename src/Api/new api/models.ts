export interface User {
  email: string;
  id: number;
  photoUrl?: string;
}

export interface RegResp {
  token: string;
}

export interface LogResp {
  token: string;
}

export interface UpdateAvatarResponse{
  url: string
}

export interface UpdateEmailResponse{
  message: string
}

export interface UpdatePasswordResponse{
  message: string
}