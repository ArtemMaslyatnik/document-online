import {TypeContractAction, TypeContractActionEnum, TypeContractState} from './types';
import {ITypeContract} from "../../../../models/enumeration/ITypeContract";


const initialState: TypeContractState = {
    type_contracts: [],
    type_contract: {} as ITypeContract
}

export default function TypeContractReducer(state = initialState, action: TypeContractAction): TypeContractState {
    switch (action.type) {
        case TypeContractActionEnum.SET_TYPE_CONTRACTS:
            return {...state, type_contracts: action.payload}
        case TypeContractActionEnum.SET_TYPE_CONTRACT:
            return {...state, type_contract: action.payload}
        default:
            return state;
    }
}
