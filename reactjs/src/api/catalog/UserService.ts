// import axios, {AxiosResponse} from "axios";
// import {IUser} from "../models/IUser";
//
// export default class UserService {
//     static async getUsers(): Promise<AxiosResponse<IUser[]>> {
//         return axios.get<IUser[]>('./users.json')
//     }
// }
import axios, {AxiosResponse} from "axios";
import {IUserShort} from "../../models/catalog/IUserShort";

export default class UserService {
    static async getUsers(): Promise<AxiosResponse<IUserShort[]>> {
        return axios.get<IUserShort[]>('http://localhost/document-online/frontend/web/catalog/users')
    }
}
