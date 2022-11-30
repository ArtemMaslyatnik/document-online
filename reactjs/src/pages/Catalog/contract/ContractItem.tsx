import React, {FC, useEffect, useState} from 'react';
import {Button, Col, DatePicker, Form, Input, Layout, Modal, Row, Select} from "antd";
import {rules} from "../../../utils/rules";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {useHistory, useParams} from "react-router-dom";
import {DataFormat, ElementsInterface, RouteNames, RouteNamesCRUD} from "../../../router";
import SelectUserList from "../../../components/SelectUserList";
import {IContract} from "../../../models/catalog/IContract";
import moment, {Moment, } from "moment";
import {formatDate} from "../../../utils/date";


type ItemParams = {
    id: string;
};

const ItemSelect = (id: string)  => {
    const {fetchContract} = useActions();
    const {contract} = useTypedSelector(state => state.contract);
    useEffect(() => {
        fetchContract(id);
    }, [])
     return contract;
}


const ContractItem: FC = () => {

    const [open, setOpen] = useState(false);
    const [openAF, setOpenAF] = useState(false);

    const {deleteContract, fetchUsers, fetchCompanies, fetchCounterparties,
            updateContract, createContract, fetchTypeContracts} = useActions();
    const {id}  = useParams<ItemParams>();
    const history = useHistory();
    const {users} = useTypedSelector(state => state.user);
    const {companies} = useTypedSelector(state => state.company);
    const {counterparties} = useTypedSelector(state => state.counterparty);
    const {type_contracts} = useTypedSelector(state => state.type_contract);

    const contract = ItemSelect(id);

    const [newItem, setContract] = useState<IContract>(contract);

    const goHome = () => {
        history.push(RouteNames.CONTRACTS);
    };

    useEffect(() => {
        setContract(contract);
        fetchUsers();
        fetchCompanies();
        fetchCounterparties();
        fetchTypeContracts();
    }, [contract])

    const selectDate = (date: Moment | null) => {

        if (date) {
             setContract({...newItem, date: formatDate(date.toDate())})
        }
    }
    const submitForm = (dateForm: IContract) => {
        dateForm.id == undefined ? createContract(dateForm) : updateContract(dateForm, dateForm.id);
        goHome();
    }
    const SelectItem = (id: string) =>{
        setContract({...newItem, user_id: id})
        setOpen(false);
    }

    const addNewCompany = () => {
        history.push(RouteNames.CONTRACT + '/' + RouteNamesCRUD.CREATE);
    }

    // console.log(newItem);
    console.log(contract);

    return (
        <Layout>
            <Form
                onFinish={submitForm}
                autoComplete="off"
                  fields={[
                    {name: ["id"], value: newItem.id},
                    {name: ["name"], value: newItem.name},
                    {name: ["date"], value: moment(newItem.date, DataFormat.YYYY_D_MM_D_DD_hh_C_mm_C_SS)},
                    {name: ["company_id"], value: newItem.company_id},
                    {name: ["counterparty_id"], value: newItem.counterparty_id},
                    {name: ["type_contract_id"], value: newItem.type_contract_id},
                    {name: ["user_id"], value: newItem.user_id},
                ]}
            >
                <Row >
                    <Col span={22}>{RouteNamesCRUD.EDITE}</Col>
                     <Col span={2}
                     >
                         <Form.Item>
                             <Button onClick={goHome}>
                                 {ElementsInterface.CLOSED}
                             </Button>
                         </Form.Item>
                     </Col>
                </Row>
                <Row>
                    <Col span={22}>
                        <Form.Item
                            label="Code"
                            name="id"
                        >

                            <Input
                                disabled
                                value={newItem.id}
                            />

                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={22}>
                        <Form.Item
                            label="Date"
                            name="date"
                            rules={[rules.required()]}
                        >
                            <DatePicker
                                showTime
                                onChange={(date) => selectDate(date)}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={22}>
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[rules.required()]}
                        >
                            <Input
                                onChange={event => setContract({...newItem, name: event.target.value})}
                                value={newItem.name}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={22}>
                        <Form.Item
                            label="Company"
                            name="company_id"
                            rules={[rules.required()]}
                        >
                            <Select onChange={(company_id: string) => setContract({...newItem, company_id})}>
                                {companies.map(company =>
                                    <Select.Option key={company.id} value={company.id}>
                                        {company.name}
                                    </Select.Option>
                                )}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={2}>
                        <Button
                            onClick={() => setOpen(true)}
                        >
                            {ElementsInterface.OPEN_LIST}
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col span={22}>
                        <Form.Item
                            label="Counterparty"
                            name="counterparty_id"
                            rules={[rules.required()]}
                        >
                            <Select onChange={(counterparty_id: string) => setContract({...newItem, counterparty_id})}>
                                {counterparties.map(counterparty =>
                                    <Select.Option key={counterparty.id} value={counterparty.id}>
                                        {counterparty.name}
                                    </Select.Option>
                                )}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={2}>
                        <Button
                            onClick={() => setOpen(true)}
                        >
                            {ElementsInterface.OPEN_LIST}
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col span={22}>
                        <Form.Item
                            label="Type contract"
                            name="type_contract_id"
                            rules={[rules.required()]}
                        >
                            <Select onChange={(type_contract_id: string) => setContract({...newItem, type_contract_id})}>
                                {type_contracts.map(type_contract =>
                                    <Select.Option key={type_contract.id} value={type_contract.id}>
                                        {type_contract.name}
                                    </Select.Option>
                                )}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={2}>
                    </Col>
                </Row>
                <Row>
                    <Col span={22}>
                        <Form.Item
                            label="User"
                            name="user_id"
                            rules={[rules.required()]}
                        >
                            <Select onChange={(user_id: string) => setContract({...newItem, user_id})}>
                                {users.map(user =>
                                    <Select.Option key={user.id} value={user.id}>
                                        {user.name}
                                    </Select.Option>
                                )}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={2}>
                        <Button
                            onClick={() => setOpen(true)}
                        >
                            {ElementsInterface.OPEN_LIST}
                        </Button>
                    </Col>
                </Row>
                <Row justify="end">
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            {RouteNamesCRUD.SAVE}
                        </Button>

                    </Form.Item>
                </Row>
            </Form>

            <Modal
                title="Select"
                visible={open}
                footer={null}
                onCancel={() => setOpen(false)}
            >
                <Button
                    type="primary"
                    ghost
                    onClick={() => setOpenAF(true)}
                >
                    {RouteNamesCRUD.ADD}
                </Button>
                <SelectUserList
                    users={users}
                    handleSelect={SelectItem}
                />
            </Modal>
            <Modal
                title="Select"
                visible={openAF}
                footer={null}
                onCancel={() => setOpenAF(false)}
            >
                {/*<AddCompanyForm*/}
                {/*    company={counterparty}*/}
                {/*    users={users}*/}
                {/*    submit={addNewCompany}*/}
                {/*    open={openAF}*/}
                {/*/>*/}
            </Modal>
        </Layout>
    );
};

export default ContractItem;
