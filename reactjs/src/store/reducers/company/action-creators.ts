import {CompanyActionEnum, SetCompaniesAction, SetCompanyAction} from "./types";
import {ICompany} from "../../../models/catalog/ICompany";
import {AppDispatch} from "../../index";
import CompanyService from "../../../api/catalog/CompanyService";

import company from "../../../pages/catalog/company/Company";
import {RouteNamesCRUD} from "../../../router";


export const CompanyActionCreators = {
    setCompany: (company: ICompany): SetCompanyAction => ({type: CompanyActionEnum.SET_COMPANY, payload: company}),
    setCompanies: (payload: ICompany[]): SetCompaniesAction => ({type: CompanyActionEnum.SET_COMPANIES, payload}),
    createCompany: (company: ICompany) =>  async (dispatch: AppDispatch) => {
        try {
            const response = await CompanyService.createCompanies(company);
            dispatch(CompanyActionCreators.setCompany(response.data));
        } catch (e) {
            console.log(e)
        }
    },
    updateCompany: (company: ICompany, id: string) =>  async (dispatch: AppDispatch) => {
        try {
            const response = await CompanyService.updateCompany(company, id);
            dispatch(CompanyActionCreators.setCompany(response.data));
        } catch (e) {
            console.log(e)
        }
    },
    deleteCompany: (id: string) =>  async (dispatch: AppDispatch) => {
        try {
            const response = await CompanyService.deleteCompany(id);
            //dispatch(CompanyActionCreators.setCompany(response.data));
        } catch (e) {
            console.log(e)
        }
    },
    fetchCompanies: () => async (dispatch: AppDispatch) => {
        try {
            const response = await CompanyService.getCompanies()
  //          console.log(response);
            dispatch(CompanyActionCreators.setCompanies(response.data));
        } catch (e) {
            console.log(e);
        }
    },
    fetchCompany: (id: string) => async (dispatch: AppDispatch) => {
        try {
            if (id == RouteNamesCRUD.CREATE) {
                let company = {} as ICompany;
                dispatch(CompanyActionCreators.setCompany(company));
            } else {
                const response = await CompanyService.getCompany(id)
                dispatch(CompanyActionCreators.setCompany(response.data));
            }
        } catch (e) {
            console.log(e);
        }
    },
}
