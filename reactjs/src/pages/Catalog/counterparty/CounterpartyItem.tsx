import React, {FC, useEffect, useState} from 'react';
import {Button, Col, Form, Input, Layout, Modal, Row, Select} from "antd";
import {rules} from "../../../utils/rules";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {useHistory, useParams} from "react-router-dom";
import {ElementsInterface, RouteNames, RouteNamesCRUD} from "../../../router";
import SelectUserList from "../../../components/SelectUserList";
import AddCompanyForm from "../../../components/AddCompanyForm";
import {ICounterparty} from "../../../models/catalog/ICounterparty";
import counterparty from "./Counterparty";

type ItemParams = {
    id: string;
};

const ItemSelect = (id: string)  => {
    const {fetchCounterparty} = useActions();
    const {counterparty} = useTypedSelector(state => state.counterparty);
    useEffect(() => {
        fetchCounterparty(id);
    }, [])
     return counterparty;
}


const CounterpartyItem: FC = () => {

    const [open, setOpen] = useState(false);
    const [openAF, setOpenAF] = useState(false);

    const {deleteCounterparty, fetchUsers, updateCounterparty, createCounterparty } = useActions();
    const {id}  = useParams<ItemParams>();
    const history = useHistory();
    const {users} = useTypedSelector(state => state.user);

    const counterparty = ItemSelect(id);

    const [counterpartyE, setCounterparty] = useState<ICounterparty>(counterparty);

    const goHome = () => {
        history.push(RouteNames.COUNTERPARTIES);
    };

    useEffect(() => {
        setCounterparty(counterparty);
        fetchUsers();
    }, [counterparty])

    const submitForm = (dateForm: ICounterparty) => {
        dateForm.id == undefined ? createCounterparty(dateForm) : updateCounterparty(dateForm, dateForm.id);
        goHome();
    }
    const SelectItem = (id: string) =>{
        setCounterparty({...counterpartyE, user_id: id})
        setOpen(false);
    }

    const addNewCompany = () => {
        history.push(RouteNames.COUNTERPARTY + '/' + RouteNamesCRUD.CREATE);
    }

    console.log(counterpartyE);

    return (
        <Layout>
            <Form
                onFinish={submitForm}
                autoComplete="off"
                  fields={[
                    {name: ["id"], value: counterpartyE.id},
                    {name: ["full_name"], value: counterpartyE.full_name},
                    {name: ["name"], value: counterpartyE.name},
                    {name: ["bank"], value: counterpartyE.bank},
                    {name: ["address"], value: counterpartyE.address},
                    {name: ["edrpou"], value: counterpartyE.edrpou},
                    {name: ["ipn"], value: counterpartyE.ipn},
                    {name: ["user_id"], value: counterpartyE.user_id},
                ]}
            >
                 <Row >
                    <Col span={22}>Edite company</Col>
                     <Col span={2}
                     >
                         <Form.Item>
                             <Button onClick={goHome}>
                                 {ElementsInterface.CLOSED}
                             </Button>
                         </Form.Item>
                     </Col>
                </Row>

                <Form.Item
                    label="Code"
                    name="id"
                >
                    <Input
                        disabled
                        value={counterpartyE.id}
                    />
                </Form.Item>
                <Form.Item
                    label="Full name"
                    name="full_name"
                    rules={[rules.required()]}
                >
                    <Input
                        onChange={event => setCounterparty({...counterpartyE, full_name: event.target.value})}
                        value={counterpartyE.full_name}
                    />
                </Form.Item>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[rules.required()]}
                >
                    <Input
                        onChange={event => setCounterparty({...counterpartyE, name: event.target.value})}
                        value={counterpartyE.name}
                    />
                </Form.Item>
                <Form.Item
                    label="Bank"
                    name="bank"
                    rules={[rules.required()]}
                >
                    <Input
                        onChange={event => setCounterparty({...counterpartyE, bank: event.target.value})}
                        value={counterpartyE.bank}
                    />
                </Form.Item>
                <Form.Item
                    label="Address"
                    name="address"
                    rules={[rules.required()]}
                >
                    <Input
                        onChange={event => setCounterparty({...counterpartyE, address: event.target.value})}
                        value={counterpartyE.address}
                    />
                </Form.Item>
                <Form.Item
                    label="EDRPOU"
                    name="edrpou"
                    rules={[rules.required()]}
                >
                    <Input
                        onChange={event => setCounterparty({...counterpartyE, edrpou: event.target.value})}
                        value={counterpartyE.edrpou}
                    />
                </Form.Item>
                <Form.Item
                    label="IPN"
                    name="ipn"
                    rules={[rules.required()]}
                >
                    <Input
                        onChange={event => setCounterparty({...counterpartyE, ipn: event.target.value})}
                        value={counterpartyE.ipn}
                    />
                </Form.Item>
                <Row>
                    <Col span={22}>
                        <Form.Item
                            label="Select user"
                            name="user_id"
                            rules={[rules.required()]}
                        >
                            <Select onChange={(user_id: string) => setCounterparty({...counterpartyE, user_id})}>
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
                <AddCompanyForm
                    company={counterparty}
                    users={users}
                    submit={addNewCompany}
                    open={openAF}
                />
            </Modal>
        </Layout>
    );
};

export default CounterpartyItem;
