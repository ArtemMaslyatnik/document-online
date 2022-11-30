import {IUserShort} from "../../../models/catalog/IUserShort";


export interface UserState {
    users: IUserShort[];
    user: IUserShort;
}

export enum UserActionEnum {
    SET_USERS = "SET_USERS",
    SET_USER = "SET_USER",
}

export interface SetUsersAction {
    type: UserActionEnum.SET_USERS;
    payload: IUserShort[]
}
export interface SetUserAction {
    type: UserActionEnum.SET_USER;
    payload: IUserShort;
}

export type UserAction =
    SetUsersAction |
    SetUserAction
