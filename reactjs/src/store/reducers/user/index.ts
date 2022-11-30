import {UserAction, UserActionEnum, UserState} from './types';
import {IUserShort} from "../../../models/catalog/IUserShort";


const initialState: UserState = {
    users: [],
    user: {} as IUserShort
}

export default function CompanyReducer(state = initialState, action: UserAction): UserState {
    switch (action.type) {
        case UserActionEnum.SET_USERS:
            return {...state, users: action.payload}
        case UserActionEnum.SET_USER:
            return {...state, user: action.payload}
        default:
            return state;
    }
}
