import {TypeContractActionEnum, SetTypeContractsAction} from "./types";
import {ITypeContract} from "../../../../models/enumeration/ITypeContract";
import {AppDispatch} from "../../../index";
import TypeContractService from "../../../../api/enumeration/TypeContractService";


export const TypeContractActionCreators = {
    //setTypeContract: (item: ITypeContract): SetTypeContractAction => ({type: TypeContractActionEnum.SET_TYPE_CONTRACT, payload: item}),
    setTypeContract: (payload: ITypeContract[]): SetTypeContractsAction => ({type: TypeContractActionEnum.SET_TYPE_CONTRACTS, payload}),
  
    fetchTypeContracts: () => async (dispatch: AppDispatch) => {
        try {
            const response = await TypeContractService.getList()
  //          console.log(response);
            dispatch(TypeContractActionCreators.setTypeContract(response.data));
        } catch (e) {
            console.log(e);
        }
    },
}
