import React, {FC, useEffect, useState} from 'react';
import {Button, Col, Form, Input, Layout, Modal, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {ICompany} from "../models/catalog/ICompany";
import {useActions} from "../hooks/useActions";
import {useHistory, useParams} from "react-router-dom";
import {RouteNames, RouteNamesCRUD} from "../router";
import SelectUserList from "../components/SelectUserList";
import AddCompanyForm from "../components/AddCompanyForm";

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

    const {deleteCompany, fetchUsers, updateCompany, createCompany } = useActions();
    const {id}  = useParams<CompanyParams>();
    const history = useHistory();
    const {users} = useTypedSelector(state => state.user);

    const company = CompanySelect(id);

    const [companyE, setCompany] = useState<ICompany>(company);

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
        setCompany({...companyE, user_id: id})
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
                    {name: ["id"], value: companyE.id},
                    {name: ["full_name"], value: companyE.full_name},
                    {name: ["name"], value: companyE.name},
                    {name: ["bank"], value: companyE.bank},
                    {name: ["address"], value: companyE.address},
                    {name: ["edrpou"], value: companyE.edrpou},
                    {name: ["ipn"], value: companyE.ipn},
                    {name: ["user_id"], value: companyE.user_id},
                ]}
            >
                 <Row >
                    <Col span={22}>Edite company</Col>
                     <Col span={2}
                     >
                         <Form.Item>
                             <Button onClick={goHome}>
                                 X
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
                        value={companyE.id}
                    />
                </Form.Item>
                <Form.Item
                    label="Full name"
                    name="full_name"
                    rules={[rules.required()]}
                >
                    <Input
                        onChange={event => setCompany({...companyE, full_name: event.target.value})}
                        value={companyE.full_name}
                    />
                </Form.Item>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[rules.required()]}
                >
                    <Input
                        onChange={event => setCompany({...companyE, name: event.target.value})}
                        value={companyE.name}
                    />
                </Form.Item>
                <Form.Item
                    label="Bank"
                    name="bank"
                    rules={[rules.required()]}
                >
                    <Input
                        onChange={event => setCompany({...companyE, bank: event.target.value})}
                        value={companyE.bank}
                    />
                </Form.Item>
                <Form.Item
                    label="Address"
                    name="address"
                    rules={[rules.required()]}
                >
                    <Input
                        onChange={event => setCompany({...companyE, address: event.target.value})}
                        value={companyE.address}
                    />
                </Form.Item>
                <Form.Item
                    label="EDRPOU"
                    name="edrpou"
                    rules={[rules.required()]}
                >
                    <Input
                        onChange={event => setCompany({...companyE, edrpou: event.target.value})}
                        value={companyE.edrpou}
                    />
                </Form.Item>
                <Form.Item
                    label="IPN"
                    name="ipn"
                    rules={[rules.required()]}
                >
                    <Input
                        onChange={event => setCompany({...companyE, ipn: event.target.value})}
                        value={companyE.ipn}
                    />
                </Form.Item>
                <Row>
                    <Col span={22}>
                        <Form.Item
                            label="Select user"
                            name="user_id"
                            rules={[rules.required()]}
                        >
                            <Select onChange={(user_id: string) => setCompany({...companyE, user_id})}>
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
                            ...
                        </Button>
                    </Col>
                </Row>
                <Row justify="end">
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Save
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
                <AddCompanyForm
                    company={company}
                    users={users}
                    submit={addNewCompany}
                    open={openAF}
                />
            </Modal>
        </Layout>
    );
};

export default CompanyItem;
