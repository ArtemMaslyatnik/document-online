import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import { Layout, Modal, Row} from "antd";
import {NavLink, } from "react-router-dom";
import {RouteNames, RouteNamesCRUD} from "../../../router";
import CounterpartyList from "../../../components/catalog/counterparty/CounterpartyList";


const Counterparty: FC = () => {

    const { confirm } = Modal;

    const {fetchCounterparties,  deleteCounterparty } = useActions();
    const {counterparties} = useTypedSelector(state => state.counterparty);

    useEffect(() => {
        fetchCounterparties()
    }, [])

    const deleteItem = (id: string) =>{
        confirm({
            title: 'Do you Want to delete these items?',
            content: 'Some descriptions',
            onOk() {
                deleteCounterparty(id);
            },
            onCancel() {
            },
        });

    }


     return (
            <Layout>
                <Row>
                    <NavLink
                        to={RouteNames.COUNTERPARTY + '/' + RouteNamesCRUD.CREATE}
                    >
                        {RouteNamesCRUD.ADD}
                    </NavLink>
                </Row>
                <CounterpartyList
                    data={counterparties}
                    handleDelete={deleteItem}
                />
            </Layout>
    )
};

export default Counterparty;
