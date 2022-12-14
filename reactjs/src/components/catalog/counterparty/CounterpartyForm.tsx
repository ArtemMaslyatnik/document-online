import React, {FC, useEffect, useState} from 'react';
import {Button, Col, Form, Input, Modal, Row, Select,} from "antd";
import {rules} from "../../../utils/rules";
import {ElementsInterface, RouteNamesCRUD} from "../../../router";
import {ICounterparty} from "../../../models/catalog/ICounterparty";
import {IUserShort} from "../../../models/catalog/IUserShort";
import SelectUserList from "../user/SelectUserList";




interface FormProps  {
    users: IUserShort[],
    counterparty: ICounterparty,
    submit: (event: ICounterparty) => void
}

const CounterpartyForm: FC<FormProps> = (props) => {

    const [open, setOpen] = useState(false);
    const [openAF, setOpenAF] = useState(false);
    const [newItem, setCounterparty] = useState<ICounterparty>(props.counterparty);


    useEffect(() => {
        setCounterparty(props.counterparty);
     }, [props.counterparty])

    const submitForm = (dateForm: ICounterparty) => {
          props.submit(dateForm)
    }

    const SelectItem = (id: string) =>{
        setCounterparty({...newItem, user_id: id})
        setOpen(false);
    }

 //   console.log(props.counterparty);


    return (
        <>
            <Form
                onFinish={submitForm}
                autoComplete="off"
                fields={[
                    {name: ["id"], value: newItem.id},
                    {name: ["full_name"], value: newItem.full_name},
                    {name: ["name"], value: newItem.name},
                    {name: ["bank"], value: newItem.bank},
                    {name: ["address"], value: newItem.address},
                    {name: ["edrpou"], value: newItem.edrpou},
                    {name: ["ipn"], value: newItem.ipn},
                    {name: ["user_id"], value: newItem.user_id},
                ]}
            >

                <Form.Item
                    label="Code"
                    name="id"
                >
                    <Input
                        disabled
                        value={newItem.id}
                    />
                </Form.Item>
                <Form.Item
                    label="Full name"
                    name="full_name"
                    rules={[rules.required()]}
                >
                    <Input
                        onChange={event => setCounterparty({...newItem, full_name: event.target.value})}
                        value={newItem.full_name}
                    />
                </Form.Item>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[rules.required()]}
                >
                    <Input
                        onChange={event => setCounterparty({...newItem, name: event.target.value})}
                        value={newItem.name}
                    />
                </Form.Item>
                <Form.Item
                    label="Bank"
                    name="bank"
                    rules={[rules.required()]}
                >
                    <Input
                        onChange={event => setCounterparty({...newItem, bank: event.target.value})}
                        value={newItem.bank}
                    />
                </Form.Item>
                <Form.Item
                    label="Address"
                    name="address"
                    rules={[rules.required()]}
                >
                    <Input
                        onChange={event => setCounterparty({...newItem, address: event.target.value})}
                        value={newItem.address}
                    />
                </Form.Item>
                <Form.Item
                    label="EDRPOU"
                    name="edrpou"
                    rules={[rules.required()]}
                >
                    <Input
                        onChange={event => setCounterparty({...newItem, edrpou: event.target.value})}
                        value={newItem.edrpou}
                    />
                </Form.Item>
                <Form.Item
                    label="IPN"
                    name="ipn"
                    rules={[rules.required()]}
                >
                    <Input
                        onChange={event => setCounterparty({...newItem, ipn: event.target.value})}
                        value={newItem.ipn}
                    />
                </Form.Item>
                <Row>
                    <Col span={22}>
                        <Form.Item
                            label="Select user"
                            name="user_id"
                            rules={[rules.required()]}
                        >
                            <Select
                                showSearch
                                placeholder="Select a user"
                                optionFilterProp="children"
                                fieldNames={{label: 'name', value: 'id', options: 'options'}}
                                onChange={(user_id: string) => setCounterparty({...newItem, user_id})}
                                onSearch={(user_id: string) => setCounterparty({...newItem, user_id})}
                                filterOption={(input, option) =>
                                    (option?.name ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={props.users}
                            />
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
                    users={props.users}
                    handleSelect={SelectItem}
                />
            </Modal>
            <Modal
                title="Select"
                visible={openAF}
                footer={null}
                onCancel={() => setOpenAF(false)}
            >
            </Modal>
        </>
    );
};

export default CounterpartyForm;
