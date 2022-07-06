import axios from 'axios'
import { LogResp, RegResp, User } from './models';

export class NewApi {
    static baseUrl = 'http://localhost:5000/api'
    static async Login (email:string, password:string): Promise<LogResp>{
    const response = await axios.post<LogResp>(`${NewApi.baseUrl}/auth/login`, {
        email,
        password
    });
    return response.data
}
    static async Register (email: string, password: string): Promise<RegResp>{
        const {data} = await axios.post<RegResp>(`${NewApi.baseUrl}/auth/register`,{
            email,
            password
        });
        return data
    }
    static async getUserSmb (): Promise<User> {
        const {data} = await axios.get<User>(`${NewApi.baseUrl}/user`,{headers: {authorization: `Bearer ${localStorage.getItem("user")}`}})
        return data
    }

}