import React, {FC, useEffect} from 'react';
import CompanyList from "../../../components/catalog/company/CompanyList";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {Layout, Modal, Row} from "antd";
import {NavLink} from "react-router-dom";
import {RouteNames, RouteNamesCRUD} from "../../../router";



const Company: FC = () => {

    const { confirm } = Modal;


    const {fetchCompanies, deleteCompany } = useActions();
    const {companies} = useTypedSelector(state => state.company);

     useEffect(() => {
        fetchCompanies()
    }, [])


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


     return (
            <Layout>
                <Row>
                    <NavLink
                        to={RouteNames.COMPANY + '/' + RouteNamesCRUD.CREATE}
                    >
                        {RouteNamesCRUD.ADD}
                    </NavLink>
                </Row>
                <CompanyList
                    data={companies}
                    handleDelete={deleteItem}
                />
             </Layout>
    )

};

export default Company;
