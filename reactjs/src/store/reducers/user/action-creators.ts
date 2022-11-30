import {UserActionEnum, SetUsersAction, SetUserAction} from "./types";
import {IUserShort} from "../../../models/catalog/IUserShort";
import {AppDispatch} from "../../index";
import UserService from "../../../api/catalog/UserService";

export const UserActionCreators = {
    setUser: (user: IUserShort): SetUserAction => ({type: UserActionEnum.SET_USER, payload: user}),
    setUsers: (payload: IUserShort[]): SetUsersAction => ({type: UserActionEnum.SET_USERS, payload}),

    fetchUsers: () => async (dispatch: AppDispatch) => {
        try {
            const response = await UserService.getUsers();
           dispatch(UserActionCreators.setUsers(response.data));
        } catch (e) {
            console.log(e);
        }
    },
}
