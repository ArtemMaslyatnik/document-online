import React, {FC, useEffect, useState} from 'react';
import {Button, Layout, Modal, Row, Tabs} from "antd";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {useHistory, useParams} from "react-router-dom";
import {RouteNamesCRUD} from "../../../router";
import {ICounterparty} from "../../../models/catalog/ICounterparty";
import CounterpartyForm from "../../../components/catalog/counterparty/CounterpartyForm";
import ChoiceContractList from "../../../components/catalog/contract/ChoiceContractList";
import ContractForm from "../../../components/catalog/contract/ContractForm";
import {IContract} from "../../../models/catalog/IContract";





type ItemParams = {
    id: string;
};

const CounterpartyItem: FC = () => {
    //const contract = <IContract>;

    const [modalVisible, setModalVisible] = useState(false);
    const [page, setTabPage] = useState('1');
    const { confirm } = Modal;

    const {deleteContract, fetchUsers, updateCounterparty, createCounterparty,
        fetchCounterparty, fetchContracts, createContract, updateContract,
        fetchTypeContracts, fetchCompanies, fetchCounterparties,
        createCounterpartyContract} = useActions();
    const {id}  = useParams<ItemParams>();
    const history = useHistory();
    const {users} = useTypedSelector(state => state.user);
    const {counterparty} = useTypedSelector(state => state.counterparty);
    const {contracts} = useTypedSelector(state => state.contract);

    ////contract
    const {companies} = useTypedSelector(state => state.company);
    const {counterparties} = useTypedSelector(state => state.counterparty);
    //const {contract} = useTypedSelector(state => state.contract);
    const newContract = {
        // counterparty_id: id,
        // counterparty_name: 'Продовалкин1'
    } as IContract;
    const {type_contracts} = useTypedSelector(state => state.type_contract);
   /////
   //
   //  const goHome = () => {
   //     // history.push(RouteNames.COUNTERPARTIES);
   //      history.goBack();
   //  };

    useEffect(() => {
        fetchCounterparty(id)
        fetchUsers()
        fetchContracts()
        fetchTypeContracts()
        fetchCompanies()
        fetchCounterparties()
    }, [])

    const submitForm = (dateForm: ICounterparty) => {
        dateForm.id == undefined ? createCounterparty(dateForm) : updateCounterparty(dateForm, dateForm.id)
        history.goBack()
    }
    ////////
    const submitFormContract = (dateForm: IContract) => {
        dateForm.id == undefined ? createContract(dateForm) : updateContract(dateForm, dateForm.id)

        //createCounterpartyContract()
        setTabPage('2')
        setModalVisible(false)
      //  history.goBack()
    }
    ////////
    const deleteItem = (id: string) =>{
        confirm({
            title: 'Do you Want to delete these items?',
            content: 'Some descriptions',
            onOk() {
                deleteContract(id);
            },
            onCancel() {
            },
        });

    }

  //  console.log(counterparty);

 const item =   [
        {
            label: `counterparty`,
            key: '1',
            children:(
                <CounterpartyForm
                users={users}
                counterparty={counterparty}
                submit={submitForm}

            />),
        },
        {
            label: `contracts`,
            key: '2',
            children: (
                <>
                    <Row>
                        <Button
                            onClick={() => setModalVisible(true)}
                        >
                            {RouteNamesCRUD.ADD}
                        </Button>
                    </Row>
                    <Modal
                        title="add"
                        visible={modalVisible}
                        footer={null}
                        onCancel={() => setModalVisible(false)}
                    >
                      <ContractForm
                           users={users}
                           companies={companies}
                           counterparties={counterparties}
                           type_contracts={type_contracts}
                           contract={newContract}
                           submit={submitFormContract}
                       />
                    </Modal>
                <ChoiceContractList
                    data={counterparty.contract}
                    handleDelete={deleteItem}/>
                </>
            ),
        },
    ]


    return (
        <Layout>
            <Tabs
                onTabClick={(key) => setTabPage(key)}
                defaultActiveKey = '1'
                activeKey={page}
                items={item}
            />
        </Layout>
    );
};

export default CounterpartyItem;
