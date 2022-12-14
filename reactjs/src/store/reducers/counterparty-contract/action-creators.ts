import {CounterpartyContractActionEnum, SetCounterpartyCounterpartyAction} from "./types";
import {ICounterpartyContract} from "../../../models/catalog/ICounterpartyContract";
import {AppDispatch} from "../../index";
import CounterpartyContractService from "../../../api/catalog/CounterpartyContractService";



export const CounterpartyContractActionCreators = {
    setCounterpartyContract: (item: ICounterpartyContract): SetCounterpartyCounterpartyAction => ({type: CounterpartyContractActionEnum.SET_COUNTERPARTY_CONTRACT, payload: item}),
    createCounterpartyContract: (item: ICounterpartyContract) =>  async (dispatch: AppDispatch) => {
        try {
            const response = await CounterpartyContractService.post(item);
            dispatch(CounterpartyContractActionCreators.setCounterpartyContract(response.data));
        } catch (e) {
            console.log(e)
        }
    },
    updateCounterpartyContract: (item: ICounterpartyContract, id: string) =>  async (dispatch: AppDispatch) => {
        try {
            const response = await CounterpartyContractService.put(item, id);
            dispatch(CounterpartyContractActionCreators.setCounterpartyContract(response.data));
        } catch (e) {
            console.log(e)
        }
    },
    // deleteCounterpartyContract: (id: string) =>  async (dispatch: AppDispatch) => {
    //     try {
    //         const response = await CounterpartyContractActionCreators.delete(id);
    //         //dispatch(CompanyActionCreators.setCompany(response.data));
    //     } catch (e) {
    //         console.log(e)
    //     }
    // },

}
