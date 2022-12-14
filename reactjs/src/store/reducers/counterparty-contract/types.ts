import {ICounterpartyContract} from "../../../models/catalog/ICounterpartyContract";


export interface CounterpartyContractState {
    counterparty_contract: ICounterpartyContract;
}

export enum CounterpartyContractActionEnum {
    SET_COUNTERPARTY_CONTRACT = "SET_COUNTERPARTY_CONTRACT",
}

export interface SetCounterpartyCounterpartyAction {
    type: CounterpartyContractActionEnum.SET_COUNTERPARTY_CONTRACT;
    payload: ICounterpartyContract;
}

export type CounterpartyContractAction =
    SetCounterpartyCounterpartyAction
