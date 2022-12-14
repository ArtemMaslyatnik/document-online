import {IContract} from "./IContract";

export interface ICounterparty {
    id: string;
    user_id: string;
    full_name: string;
    name: string;
    bank: string;
    address: string;
    edrpou: string;
    ipn: string;
    contract_id: string;
    contract: IContract[];
}