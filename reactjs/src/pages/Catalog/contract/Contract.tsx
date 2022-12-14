import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {Layout, Modal} from "antd";
import ContractList from "../../../components/catalog/contract/ContractList";


const Contract: FC = () => {

    const { confirm } = Modal;

    const {fetchContracts, deleteContract } = useActions();
    const {contracts} = useTypedSelector(state => state.contract);

    useEffect(() => {
        fetchContracts()
    }, [])


    const deleteItem = (id: string) =>{
        confirm({
            title: 'Do you Want to delete these items?',
            content: 'Some descriptions',
            onOk() {
                deleteContract(id);
            },
            onCancel() {
            },
        });

    }

     return (
            <Layout>
                <ContractList
                    data={contracts}
                    handleDelete={deleteItem}
                />
            </Layout>
    )
};

export default Contract;
