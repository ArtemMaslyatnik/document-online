import axios, {AxiosResponse} from "axios";
import {ICounterparty} from "../../models/catalog/ICounterparty";
import {AppStructureConfigElement, baseURL} from "../Config";
import {RouteNames} from "../../router";

export default class UserService {
    static async getList(): Promise<AxiosResponse<ICounterparty[]>> {
        return axios.get<ICounterparty[]>(baseURL + AppStructureConfigElement.CATALOG + RouteNames.COUNTERPARTIES)
    }

    static async post(item: ICounterparty): Promise<AxiosResponse<ICounterparty>> {
        return axios.post<ICounterparty>(baseURL + AppStructureConfigElement.CATALOG + RouteNames.COUNTERPARTIES, item)
    }

    static async getItem(id: string): Promise<AxiosResponse<ICounterparty>> {
        return axios.get<ICounterparty>(baseURL + AppStructureConfigElement.CATALOG + RouteNames.COUNTERPARTIES  + '/' + id)
    }

    static async put(item: ICounterparty, id: string): Promise<AxiosResponse<ICounterparty>> {
        return axios.put<ICounterparty>(baseURL + AppStructureConfigElement.CATALOG + RouteNames.COUNTERPARTIES  + '/' + id, item)
    }

    static async delete(id: string): Promise<AxiosResponse<ICounterparty>> {
        return axios.delete<ICounterparty>(AppStructureConfigElement.CATALOG + RouteNames.COUNTERPARTIES  + '/' + id)
    }

}


