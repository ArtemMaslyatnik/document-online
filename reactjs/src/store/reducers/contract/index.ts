import {ContractAction, ContractActionEnum, ContractState} from './types';
import {IContract} from "../../../models/catalog/IContract";


const initialState: ContractState = {
    contracts: [],
    contract: {} as IContract
}

export default function ContractReducer(state = initialState, action: ContractAction): ContractState {
    switch (action.type) {
        case ContractActionEnum.SET_CONTRACTS:
            return {...state, contracts: action.payload}
        case ContractActionEnum.SET_CONTRACT:
            return {...state, contract: action.payload}
        default:
            return state;
    }
}
