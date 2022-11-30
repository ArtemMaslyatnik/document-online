import {CounterpartyAction, CounterpartyActionEnum, CounterpartyState} from './types';
import {ICounterparty} from "../../../models/catalog/ICounterparty";


const initialState: CounterpartyState = {
    counterparties: [],
    counterparty: {} as ICounterparty
}

export default function CounterpartyReducer(state = initialState, action: CounterpartyAction): CounterpartyState {
    switch (action.type) {
        case CounterpartyActionEnum.SET_COUNTERPARTIES:
            return {...state, counterparties: action.payload}
        case CounterpartyActionEnum.SET_COUNTERPARTY:
            return {...state, counterparty: action.payload}
        default:
            return state;
    }
}
