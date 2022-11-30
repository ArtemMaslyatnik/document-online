import axios, {AxiosResponse} from "axios";
import {ITypeContract} from "../../models/enumeration/ITypeContract";
import {AppStructureConfigElement, baseURL} from "../Config";
import {RouteNames} from "../../router";

export default class TypeContractService {
    static async getList(): Promise<AxiosResponse<ITypeContract[]>> {
        return axios.get<ITypeContract[]>(baseURL + AppStructureConfigElement.ENUMERATION + RouteNames.TYPE_CONTRACTS)
    }
}


