import React, {FC, useEffect, useState} from 'react';
import {ICompany} from "../models/catalog/ICompany";
import CompanyList from "../components/CompanyList";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {Button, Layout, Modal, Row} from "antd";
import EditeCompanyForm from "../components/EditeCompanyForm";
import AddCompanyForm from "../components/AddCompanyForm";
import {useHistory} from "react-router-dom";
import {RouteNames, RouteNamesCRUD} from "../router";
import CompanyList1 from "../components/CompanyList1";


const Company: FC = () => {

    const { confirm } = Modal;

    const [openAF, setOpenAF] = useState(false);
    const [openEF, setOpenEF] = useState(false);


    const {fetchCompanies, createCompany, fetchCompany, deleteCompany } = useActions();
    const {companies, company} = useTypedSelector(state => state.company);
    const {users} = useTypedSelector(state => state.user);

    const history = useHistory();
    useEffect(() => {
        fetchCompanies()
    }, [])

    const getIdCompany = (row: ICompany) => {
        history.push(RouteNames.COMPANY + '/' + row.id);
    }

    const addNewCompany = () => {
        history.push(RouteNames.COMPANY + '/' + RouteNamesCRUD.CREATE);
    }

    const editeCompany = (company: ICompany) => {
        setOpenEF(false);
    }

    const deleteItem = (id: string) =>{
        confirm({
            title: 'Do you Want to delete these items?',
            content: 'Some descriptions',
            onOk() {
                deleteCompany(id);
            },
            onCancel() {
            },
        });

    }

    const editeItem = (id: string) =>{
        history.push(RouteNames.COMPANY + '/' + id);
    }

     return (
            <Layout>
                <Row>
                    <Button
                        type="primary"
                        ghost
                        onClick={addNewCompany}
                    >
                        {RouteNamesCRUD.ADD}
                    </Button>
                </Row>
                <CompanyList1
                    companies={companies}
                    handleDelete={deleteItem}
                    handleEdite={editeItem}
                />

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
                <Modal
                    title="Edite company"
                    visible={openEF}
                    footer={null}
                    onCancel={() => setOpenEF(false)}
                >
                    <EditeCompanyForm
                        company={company}
                        users={users}
                        submit={editeCompany}
                        open={openEF}
                    />
                </Modal>

            </Layout>
    )

};

export default Company;
