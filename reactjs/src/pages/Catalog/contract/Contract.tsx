import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {Layout, Modal, Row} from "antd";
import {NavLink} from "react-router-dom";
import {RouteNames, RouteNamesCRUD} from "../../../router";
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
                <Row>
                    <NavLink
                        to={RouteNames.CONTRACT + '/' + RouteNamesCRUD.CREATE}
                    >
                        {RouteNamesCRUD.ADD}
                    </NavLink>
                </Row>
                <ContractList
                    data={contracts}
                    handleDelete={deleteItem}
                />
            </Layout>
    )
};

export default Contract;
