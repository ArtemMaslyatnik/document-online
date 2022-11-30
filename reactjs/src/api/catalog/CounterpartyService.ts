import axios, {AxiosResponse} from "axios";
import {ICounterparty} from "../../models/catalog/ICounterparty";

export default class UserService {
    static async getList(): Promise<AxiosResponse<ICounterparty[]>> {
        return axios.get<ICounterparty[]>('http://localhost/document-online/frontend/web/catalog/counterparties')
    }

    static async post(item: ICounterparty): Promise<AxiosResponse<ICounterparty>> {
        return axios.post<ICounterparty>('http://localhost/document-online/frontend/web/catalog/counterparties', item)
    }

    static async getItem(id: string): Promise<AxiosResponse<ICounterparty>> {
        return axios.get<ICounterparty>('http://localhost/document-online/frontend/web/catalog/counterparties/'+ id)
    }

    static async put(item: ICounterparty, id: string): Promise<AxiosResponse<ICounterparty>> {
        return axios.put<ICounterparty>('http://localhost/document-online/frontend/web/catalog/counterparties/'+ id, item)
    }

    static async delete(id: string): Promise<AxiosResponse<ICounterparty>> {
        return axios.delete<ICounterparty>('http://localhost/document-online/frontend/web/catalog/counterparties/'+ id)
    }

}


