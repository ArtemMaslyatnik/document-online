import {ContractActionEnum, SetContractAction, SetContractsAction} from "./types";
import {IContract} from "../../../models/catalog/IContract";
import {AppDispatch} from "../../index";
import ContractService from "../../../api/catalog/ContractService";
import {RouteNamesCRUD} from "../../../router";


export const ContractActionCreators = {
    setContract: (item: IContract): SetContractAction => ({type: ContractActionEnum.SET_CONTRACT, payload: item}),
    setCounterparties: (payload: IContract[]): SetContractsAction => ({type: ContractActionEnum.SET_CONTRACTS, payload}),
    createContract: (item: IContract) =>  async (dispatch: AppDispatch) => {
        try {
            const response = await ContractService.post(item);
            dispatch(ContractActionCreators.setContract(response.data));
        } catch (e) {
            console.log(e)
        }
    },
    updateContract: (item: IContract, id: string) =>  async (dispatch: AppDispatch) => {
        try {
             const response = await ContractService.put(item, id);
             dispatch(ContractActionCreators.setContract(response.data));
        } catch (e) {
            console.log(e)
        }
    },
    deleteContract: (id: string) =>  async (dispatch: AppDispatch) => {
        try {
            const response = await ContractService.delete(id);
            //dispatch(CompanyActionCreators.setCompany(response.data));
        } catch (e) {
            console.log(e)
        }
    },
    fetchContracts: () => async (dispatch: AppDispatch) => {
        try {
            const response = await ContractService.getList()
  //          console.log(response);
            dispatch(ContractActionCreators.setCounterparties(response.data));
        } catch (e) {
            console.log(e);
        }
    },
    fetchContract: (id: string) => async (dispatch: AppDispatch) => {
        try {
            if (id == RouteNamesCRUD.CREATE) {
                let company = {} as IContract;
                dispatch(ContractActionCreators.setContract(company));
            } else {
                const response = await ContractService.getItem(id)
                dispatch(ContractActionCreators.setContract(response.data));
            }
        } catch (e) {
            console.log(e);
        }
    },
}
