import {ICounterparty} from "../../../models/catalog/ICounterparty";


export interface CounterpartyState {
    counterparties: ICounterparty[];
    counterparty: ICounterparty;
}

export enum CounterpartyActionEnum {
    SET_COUNTERPARTIES  = "SET_COUNTERPARTIES",
    SET_COUNTERPARTY = "SET_COUNTERPARTY",
}

export interface SetCounterpartiesAction {
    type: CounterpartyActionEnum.SET_COUNTERPARTIES;
    payload: ICounterparty[]
}
export interface SetCounterpartyAction {
    type: CounterpartyActionEnum.SET_COUNTERPARTY;
    payload: ICounterparty;
}

export type CounterpartyAction =
    SetCounterpartiesAction |
    SetCounterpartyAction
