import React, {FC, useEffect, useState} from 'react';
import {Button, Col, DatePicker, Form, Input, Layout, Modal, Row, Select} from "antd";
import {rules} from "../../../utils/rules";
import {useHistory} from "react-router-dom";
import {DataFormat, ElementsInterface, RouteNames, RouteNamesCRUD} from "../../../router";
import SelectUserList from "../../../components/catalog/user/SelectUserList";
import {IContract} from "../../../models/catalog/IContract";
import moment, {Moment, } from "moment";
import {formatDate} from "../../../utils/date";
import SelectionCounterpartyList from "../../../components/catalog/counterparty/SelectionCounterpartyList";
import {IUserShort} from "../../../models/catalog/IUserShort";
import {ICounterparty} from "../../../models/catalog/ICounterparty";
import {ICompany} from "../../../models/catalog/ICompany";
import {ITypeContract} from "../../../models/enumeration/ITypeContract";




interface FormProps  {
    users: IUserShort[],
    companies: ICompany[],
    counterparties: ICounterparty[],
    type_contracts: ITypeContract[],
    contract: IContract,
    submit: (event: IContract) => void
}


const ContractForm: FC<FormProps> = (props) => {

    const [open, setOpen] = useState(false)
    const [openSelectCounterpartyList, setOpenSelectCounterpartyList] = useState(false);

    const history = useHistory()



    const [newItem, setContract] = useState<IContract>(props.contract)

    const goHome = () => {
        history.push(RouteNames.CONTRACTS)
    };

    useEffect(() => {
        setContract(props.contract)
    }, [props.contract])

    const selectDate = (date: Moment | null) => {
        if (date) {
            setContract({...newItem, date: formatDate(date.toDate())})
        }
    }
    const submitForm = (dateForm: IContract) => {
        props.submit(dateForm)
    }
    const SelectItemUser = (id: string) =>{
        setContract({...newItem, user_id: id})
        setOpen(false)
    }

    const SelectItemCounterparty = (id: string) =>{
        setContract({...newItem, counterparty_id: id})
        setOpenSelectCounterpartyList(false)
    }


    console.log(newItem)
    // console.log(contract);

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
                            <Select
                                showSearch
                                placeholder="Select a company"
                                optionFilterProp="children"
                                fieldNames={{ label: 'name', value: 'id', options: 'options' }}
                                onChange={(company_id: string) => setContract({...newItem, company_id})}
                                onSearch={(company_id: string) => setContract({...newItem, company_id})}
                                filterOption={(input, option) =>
                                    (option?.name ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={props.companies}
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
                <Row>
                    <Col span={22}>
                        <Form.Item
                            label="Counterparty"
                            name="counterparty_id"
                            rules={[rules.required()]}
                        >
                            <Select
                                showSearch
                                placeholder="Select a counterparty"
                                optionFilterProp="children"
                                fieldNames={{ label: 'name', value: 'id', options: 'options' }}
                                onChange={(counterparty_id: string) => setContract({...newItem, counterparty_id})}
                                onSearch={(counterparty_id: string) => setContract({...newItem, counterparty_id})}
                                filterOption={(input, option) =>
                                    (option?.name ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={props.counterparties}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={2}>
                        <Button
                            onClick={() => setOpenSelectCounterpartyList(true)}
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
                            <Select
                                showSearch
                                placeholder="Select a type contract"
                                optionFilterProp="children"
                                fieldNames={{ label: 'name', value: 'id', options: 'options' }}
                                onChange={(type_contract_id: string) => setContract({...newItem, type_contract_id})}
                                onSearch={(type_contract_id: string) => setContract({...newItem, type_contract_id})}
                                filterOption={(input, option) =>
                                    (option?.name ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={props.type_contracts}
                            />
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
                            <Select
                                showSearch
                                placeholder="Select a user"
                                optionFilterProp="children"
                                fieldNames={{ label: 'name', value: 'id', options: 'options' }}
                                onChange={(user_id: string) => setContract({...newItem, user_id})}
                                onSearch={(user_id: string) => setContract({...newItem, user_id})}
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
                <SelectUserList
                    users={props.users}
                    handleSelect={SelectItemUser}
                />
            </Modal>
            <Modal
                title="Select"
                visible={openSelectCounterpartyList}
                footer={null}
                onCancel={() => setOpenSelectCounterpartyList(false)}
            >
                <SelectionCounterpartyList
                    data={props.counterparties}
                    handleSelect={SelectItemCounterparty}
                />
            </Modal>
        </Layout>
    );
};

export default ContractForm;
