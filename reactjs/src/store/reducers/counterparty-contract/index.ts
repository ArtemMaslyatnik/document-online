import {CounterpartyContractAction,CounterpartyContractActionEnum,CounterpartyContractState} from './types';
import {ICounterpartyContract} from "../../../models/catalog/ICounterpartyContract";


const initialState: CounterpartyContractState = {
    counterparty_contract: {} as ICounterpartyContract
}

export default function CounterpartyContactReducer(state = initialState, action: CounterpartyContractAction): CounterpartyContractState {
    switch (action.type) {
        case CounterpartyContractActionEnum.SET_COUNTERPARTY_CONTRACT:
            return {...state, counterparty_contract: action.payload}
        default:
            return state;
    }
}
