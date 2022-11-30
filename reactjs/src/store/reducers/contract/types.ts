import {IContract} from "../../../models/catalog/IContract";


export interface ContractState {
    contracts: IContract[];
    contract: IContract;
}

export enum ContractActionEnum {
    SET_CONTRACTS  = "SET_CONTRACTS",
    SET_CONTRACT = "SET_CONTRACT",
}

export interface SetContractsAction {
    type: ContractActionEnum.SET_CONTRACTS;
    payload: IContract[]
}
export interface SetContractAction {
    type: ContractActionEnum.SET_CONTRACT;
    payload: IContract;
}

export type ContractAction =
    SetContractsAction |
    SetContractAction
