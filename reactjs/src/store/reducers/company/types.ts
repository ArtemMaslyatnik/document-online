import {ICompany} from "../../../models/catalog/ICompany";


export interface CompanyState {
    companies: ICompany[];
    company: ICompany;
}

export enum CompanyActionEnum {
    SET_COMPANIES = "SET_COMPANIES",
    SET_COMPANY = "SET_COMPANY",
}

export interface SetCompaniesAction {
    type: CompanyActionEnum.SET_COMPANIES;
    payload: ICompany[]
}
export interface SetCompanyAction {
    type: CompanyActionEnum.SET_COMPANY;
    payload: ICompany;
}

export type CompanyAction =
    SetCompaniesAction |
    SetCompanyAction
