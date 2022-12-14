import React, {FC, useEffect, useState} from 'react';
import {Button, Col, Form, Input, Layout, Modal, Row, Select} from "antd";
import {rules} from "../../../utils/rules";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {ICompany} from "../../../models/catalog/ICompany";
import {useActions} from "../../../hooks/useActions";
import {useHistory, useParams} from "react-router-dom";
import {ElementsInterface, RouteNames, RouteNamesCRUD} from "../../../router";
import SelectUserList from "../../../components/catalog/user/SelectUserList";


type CompanyParams = {
    id: string;
};

const CompanySelect = (id: string)  => {
    const {fetchCompany} = useActions();
    const {company} = useTypedSelector(state => state.company);
    useEffect(() => {
        fetchCompany(id);
    }, [])
     return company;
}


const CompanyItem: FC = () => {

    const [open, setOpen] = useState(false);
    const [openAF, setOpenAF] = useState(false);

    const {fetchUsers, updateCompany, createCompany } = useActions();
    const {id}  = useParams<CompanyParams>();
    const history = useHistory();
    const {users} = useTypedSelector(state => state.user);

    const company = CompanySelect(id);

    const [newItem, setCompany] = useState<ICompany>(company);

    const goHome = () => {
        history.push(RouteNames.COMPANIES);
    };

    useEffect(() => {
         setCompany(company);
        fetchUsers();
    }, [company])

    const submitForm = (dateForm: ICompany) => {
        dateForm.id == undefined ? createCompany(dateForm) : updateCompany(dateForm, dateForm.id);
        goHome();
    }
    const SelectItem = (id: string) =>{
        setCompany({...newItem, user_id: id})
        setOpen(false);
    }

    const addNewCompany = () => {
        history.push(RouteNames.COMPANY + '/' + RouteNamesCRUD.CREATE);
    }



    return (
        <Layout>

            <Form
                onFinish={submitForm}
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
                        value={newItem.id}
                    />
                </Form.Item>
                <Form.Item
                    label="Full name"
                    name="full_name"
                    rules={[rules.required()]}
                >
                    <Input
                        onChange={event => setCompany({...newItem, full_name: event.target.value})}
                        value={newItem.full_name}
                    />
                </Form.Item>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[rules.required()]}
                >
                    <Input
                        onChange={event => setCompany({...newItem, name: event.target.value})}
                        value={newItem.name}
                    />
                </Form.Item>
                <Form.Item
                    label="Bank"
                    name="bank"
                    rules={[rules.required()]}
                >
                    <Input
                        onChange={event => setCompany({...newItem, bank: event.target.value})}
                        value={newItem.bank}
                    />
                </Form.Item>
                <Form.Item
                    label="Address"
                    name="address"
                    rules={[rules.required()]}
                >
                    <Input
                        onChange={event => setCompany({...newItem, address: event.target.value})}
                        value={newItem.address}
                    />
                </Form.Item>
                <Form.Item
                    label="EDRPOU"
                    name="edrpou"
                    rules={[rules.required()]}
                >
                    <Input
                        onChange={event => setCompany({...newItem, edrpou: event.target.value})}
                        value={newItem.edrpou}
                    />
                </Form.Item>
                <Form.Item
                    label="IPN"
                    name="ipn"
                    rules={[rules.required()]}
                >
                    <Input
                        onChange={event => setCompany({...newItem, ipn: event.target.value})}
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
                                fieldNames={{ label: 'name', value: 'id', options: 'options' }}
                                onChange={(user_id: string) => setCompany({...newItem, user_id})}
                                onSearch={(user_id: string) => setCompany({...newItem, user_id})}
                                filterOption={(input, option) =>
                                    (option?.name ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={users}
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
                title="Select company"
                visible={open}
                footer={null}
                onCancel={() => setOpen(false)}
            >
                <Button
                    type="primary"
                    ghost
                    onClick={() => setOpenAF(true)}
                >
                    add company
                </Button>
                <SelectUserList
                    users={users}
                    handleSelect={SelectItem}
                />
            </Modal>
            <Modal
                title="Select company"
                visible={openAF}
                footer={null}
                onCancel={() => setOpenAF(false)}
            >
            </Modal>
        </Layout>
    );
};

export default CompanyItem;
