import {CompanyAction, CompanyActionEnum, CompanyState} from './types';
import {ICompany} from "../../../models/catalog/ICompany";


const initialState: CompanyState = {
    companies: [],
    company: {} as ICompany
}

export default function CompanyReducer(state = initialState, action: CompanyAction): CompanyState {
    switch (action.type) {
        case CompanyActionEnum.SET_COMPANIES:
            return {...state, companies: action.payload}
        case CompanyActionEnum.SET_COMPANY:
            return {...state, company: action.payload}
        default:
            return state;
    }
}
