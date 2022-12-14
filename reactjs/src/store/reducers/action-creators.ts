import {AuthActionCreators} from "./auth/action-creators";
import {EventActionCreators} from "./event/action-creators";
import {CompanyActionCreators} from "./company/action-creators";
import {UserActionCreators} from "./user/action-creators";
import {CounterpartyActionCreators} from "./counterparty/action-creators";
import {ContractActionCreators} from "./contract/action-creators";
import {TypeContractActionCreators} from "./enumeration/type-contract/action-creators";
import {CounterpartyContractActionCreators} from "./counterparty-contract/action-creators";


export const allActionCreators = {
    ...AuthActionCreators,
    ...EventActionCreators,
    ...CompanyActionCreators,
    ...UserActionCreators,
    ...CounterpartyActionCreators,
    ...ContractActionCreators,
    ...TypeContractActionCreators,
    ...CounterpartyContractActionCreators
}
