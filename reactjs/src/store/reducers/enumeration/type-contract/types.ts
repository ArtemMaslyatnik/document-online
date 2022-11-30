import {ITypeContract} from "../../../../models/enumeration/ITypeContract";


export interface TypeContractState {
    type_contracts: ITypeContract[];
    type_contract: ITypeContract;
}

export enum TypeContractActionEnum {
    SET_TYPE_CONTRACTS = "SET_TYPE_CONTRACTS",
    SET_TYPE_CONTRACT = "SET_TYPE_CONTRACT",
}

export interface SetTypeContractsAction {
    type: TypeContractActionEnum.SET_TYPE_CONTRACTS;
    payload: ITypeContract[]
}
export interface SetTypeContractAction {
    type: TypeContractActionEnum.SET_TYPE_CONTRACT;
    payload: ITypeContract;
}

export type TypeContractAction =
    SetTypeContractsAction |
    SetTypeContractAction
