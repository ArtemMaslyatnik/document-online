import axios, {AxiosResponse} from "axios";
import {ICounterpartyContract} from "../../models/catalog/ICounterpartyContract";
import {AppStructureConfigElement, baseURL} from "../Config";
import {RouteNames} from "../../router";

export default class CounterpartyContractService {
    static async post(item: ICounterpartyContract): Promise<AxiosResponse<ICounterpartyContract>> {
        return axios.post<ICounterpartyContract>(baseURL + AppStructureConfigElement.CATALOG + RouteNames.COUNTERPARTY_CONTRACTS , item)
    }

    static async put(item: ICounterpartyContract, id: string): Promise<AxiosResponse<ICounterpartyContract>> {
        return axios.put<ICounterpartyContract>(baseURL + AppStructureConfigElement.CATALOG + RouteNames.COUNTERPARTY_CONTRACTS + id, item)
    }
}


