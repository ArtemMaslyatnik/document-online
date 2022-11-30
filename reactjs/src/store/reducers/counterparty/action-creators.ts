import {CounterpartyActionEnum, SetCounterpartiesAction, SetCounterpartyAction} from "./types";
import {ICounterparty} from "../../../models/catalog/ICounterparty";
import {AppDispatch} from "../../index";
import CounterpartyService from "../../../api/catalog/CounterpartyService";
import counterparty from "../../../pages/catalog/counterparty/Counterparty";
import {RouteNamesCRUD} from "../../../router";


export const CounterpartyActionCreators = {
    setCounterparty: (item: ICounterparty): SetCounterpartyAction => ({type: CounterpartyActionEnum.SET_COUNTERPARTY, payload: item}),
    setCounterparties: (payload: ICounterparty[]): SetCounterpartiesAction => ({type: CounterpartyActionEnum.SET_COUNTERPARTIES, payload}),
    createCounterparty: (item: ICounterparty) =>  async (dispatch: AppDispatch) => {
        try {
            const response = await CounterpartyService.post(item);
            dispatch(CounterpartyActionCreators.setCounterparty(response.data));
        } catch (e) {
            console.log(e)
        }
    },
    updateCounterparty: (item: ICounterparty, id: string) =>  async (dispatch: AppDispatch) => {
        try {
            const response = await CounterpartyService.put(item, id);
            dispatch(CounterpartyActionCreators.setCounterparty(response.data));
        } catch (e) {
            console.log(e)
        }
    },
    deleteCounterparty: (id: string) =>  async (dispatch: AppDispatch) => {
        try {
            const response = await CounterpartyService.delete(id);
            //dispatch(CompanyActionCreators.setCompany(response.data));
        } catch (e) {
            console.log(e)
        }
    },
    fetchCounterparties: () => async (dispatch: AppDispatch) => {
        try {
            const response = await CounterpartyService.getList()
  //          console.log(response);
            dispatch(CounterpartyActionCreators.setCounterparties(response.data));
        } catch (e) {
            console.log(e);
        }
    },
    fetchCounterparty: (id: string) => async (dispatch: AppDispatch) => {
        try {
            if (id == RouteNamesCRUD.CREATE) {
                let company = {} as ICounterparty;
                dispatch(CounterpartyActionCreators.setCounterparty(company));
            } else {
                const response = await CounterpartyService.getItem(id)
                dispatch(CounterpartyActionCreators.setCounterparty(response.data));
            }
        } catch (e) {
            console.log(e);
        }
    },
}
