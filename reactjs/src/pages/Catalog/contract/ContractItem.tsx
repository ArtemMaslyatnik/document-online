import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {useHistory, useParams} from "react-router-dom";
import {ElementsInterface, RouteNamesCRUD} from "../../../router";
import {IContract} from "../../../models/catalog/IContract";
import ContractForm from "../../../components/catalog/contract/ContractForm";
import {Button, Col, Form, Row} from "antd";




type ItemParams = {
    id: string;
};

const ContractItem: FC = () => {


    const { fetchUsers, fetchCompanies, fetchCounterparties,
            updateContract, createContract, fetchTypeContracts, fetchContract} = useActions();
    const {id}  = useParams<ItemParams>();
    const history = useHistory();
    const {users} = useTypedSelector(state => state.user);
    const {companies} = useTypedSelector(state => state.company);
    const {counterparties} = useTypedSelector(state => state.counterparty);
    const {contract} = useTypedSelector(state => state.contract);
    const {type_contracts} = useTypedSelector(state => state.type_contract);


    useEffect(() => {
        fetchContract(id)
        fetchUsers();
        fetchCompanies();
        fetchCounterparties();
        fetchTypeContracts();
    }, [])

    const submitForm = (dateForm: IContract) => {
        dateForm.id == undefined ? createContract(dateForm) : updateContract(dateForm, dateForm.id);
        history.goBack()
    }

    return (
        <>
            <Row >
                <Col span={22}>{RouteNamesCRUD.EDITE}</Col>
                <Col span={2}
                >
                    <Form.Item>
                        <Button onClick={history.goBack}>
                            {ElementsInterface.CLOSED}
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
            <ContractForm
                companies={companies}
                counterparties={counterparties}
                type_contracts={type_contracts}
                users={users}
                contract={contract}
                submit={submitForm}
            />
        </>

    );
};

export default ContractItem;
