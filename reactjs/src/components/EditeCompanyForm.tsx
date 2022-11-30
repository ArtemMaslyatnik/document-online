import React, {FC, useEffect, useState} from 'react';
import {Button, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
//import {useTypedSelector} from "../hooks/useTypedSelector";
import {ICompany} from "../models/catalog/ICompany";
import {IUserShort} from "../models/catalog/IUserShort";
import {useActions} from "../hooks/useActions";


interface EditeCompanyFormProps {
    company: ICompany,
    users: IUserShort[],
    submit: (company: ICompany) => void,
    open: boolean
}

const EditCompanyForm: FC<EditeCompanyFormProps> = (props) => {
    const {fetchUsers } = useActions();
    const [company, setCompany] = useState<ICompany>({
        id: '',
        full_name: props.company.full_name,
        name: '',
        bank: '',
        address: '',
        edrpou: '',
        ipn: '',
        user_id: '',
    } as ICompany);

   // const {user} = useTypedSelector(state => state.auth)



    const submitForm = () => {
        props.submit({...company})
    }

    useEffect(() => {
        fetchUsers();

    }, [])

    console.log(company);

    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="Code"
                name="id"
            >
                <Input
                    disabled
                    value={company.id}
                />
            </Form.Item>
            <Form.Item
                label="Full name"
                name="full_name"
                rules={[rules.required()]}
            >
                <Input
                    onChange={event => setCompany({...company, full_name: event.target.value})}
                    value={company.full_name}
                />
            </Form.Item>
            <Form.Item
                label="Name"
                name="name"
                rules={[rules.required()]}
            >
                <Input
                    onChange={event => setCompany({...company, name: event.target.value})}
                    value={company.name}
                />
            </Form.Item>
            <Form.Item
                label="Bank"
                name="bank"
                rules={[rules.required()]}
            >
                <Input
                    onChange={event => setCompany({...company, bank: event.target.value})}
                    value={company.bank}
                />
            </Form.Item>
            <Form.Item
                label="Address"
                name="address"
                rules={[rules.required()]}
            >
                <Input
                    onChange={event => setCompany({...company, address: event.target.value})}
                    value={company.address}
                />
            </Form.Item>
            <Form.Item
                label="EDRPOU"
                name="edrpou"
                rules={[rules.required()]}
            >
                <Input
                    onChange={event => setCompany({...company, edrpou: event.target.value})}
                    value={company.edrpou}
                />
            </Form.Item>
            <Form.Item
                label="IPN"
                name="ipn"
                rules={[rules.required()]}
            >
                <Input
                    onChange={event => setCompany({...company, ipn: event.target.value})}
                    value={company.ipn}
                />
            </Form.Item>

            <Form.Item
                label="Select user"
                name="user_id"
                rules={[rules.required()]}
            >
                <Select onChange={(user_id: string) => setCompany({...company, user_id})}>
                    {props.users.map(user =>
                        <Select.Option key={user.id} value={user.id}>
                            {user.name}
                        </Select.Option>
                    )}
                </Select>
            </Form.Item>
            <Row justify="end">
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Создать
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EditCompanyForm;
