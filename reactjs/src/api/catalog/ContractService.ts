import axios, {AxiosResponse} from "axios";
import {IContract} from "../../models/catalog/IContract";
import {AppStructureConfigElement, baseURL} from "../Config";
import {RouteNames} from "../../router";

export default class ContractService {
    static async getList(): Promise<AxiosResponse<IContract[]>> {
        return axios.get<IContract[]>(baseURL + AppStructureConfigElement.CATALOG + RouteNames.CONTRACTS)
    }

    static async post(item: IContract): Promise<AxiosResponse<IContract>> {
        return axios.post<IContract>(baseURL + AppStructureConfigElement.CATALOG + RouteNames.CONTRACTS, item)
    }

    static async getItem(id: string): Promise<AxiosResponse<IContract>> {
        return axios.get<IContract>(baseURL + AppStructureConfigElement.CATALOG + RouteNames.CONTRACTS + '/' + id)
    }

    static async put(item: IContract, id: string): Promise<AxiosResponse<IContract>> {
        return axios.put<IContract>(baseURL + AppStructureConfigElement.CATALOG + RouteNames.CONTRACTS + '/' + id, item)
    }

    static async delete(id: string): Promise<AxiosResponse<IContract>> {
        return axios.delete<IContract>(baseURL + AppStructureConfigElement.ENUMERATION + RouteNames.CONTRACTS + '/' + id)
    }
}


