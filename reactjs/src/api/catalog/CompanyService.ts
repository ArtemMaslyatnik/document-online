import axios, {AxiosResponse} from "axios";
import {ICompany} from "../../models/catalog/ICompany";

export default class UserService {
    static async getCompanies(): Promise<AxiosResponse<ICompany[]>> {
        return axios.get<ICompany[]>('http://localhost/document-online/frontend/web/catalog/companies')
    }

    static async createCompanies(company: ICompany): Promise<AxiosResponse<ICompany>> {
        return axios.post<ICompany>('http://localhost/document-online/frontend/web/catalog/companies', company)
    }

    static async getCompany(id: string): Promise<AxiosResponse<ICompany>> {
        return axios.get<ICompany>('http://localhost/document-online/frontend/web/catalog/companies/'+ id)
    }

    static async updateCompany(company: ICompany, id: string): Promise<AxiosResponse<ICompany>> {
        return axios.put<ICompany>('http://localhost/document-online/frontend/web/catalog/companies/'+ id, company)
    }

    static async deleteCompany(id: string): Promise<AxiosResponse<ICompany>> {
        return axios.delete<ICompany>('http://localhost/document-online/frontend/web/catalog/companies/'+ id)
    }

}


