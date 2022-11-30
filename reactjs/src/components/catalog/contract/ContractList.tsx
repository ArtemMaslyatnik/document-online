import { SearchOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import React, { useRef, useState, FC } from 'react';
import Highlighter from "react-highlight-words";
import {IContract} from "../../../models/catalog/IContract";
import {NavLink} from "react-router-dom";
import {RouteNames, RouteNamesCRUD} from "../../../router";

interface ListProps {
    data: IContract[],
    handleDelete: (id: string) => void,
}

type DataIndex = keyof IContract;

const ContractList: FC <ListProps> = (props) => {

    const data: IContract[] = props.data;

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);

    const handleSearch = (
        selectedKeys: string[],
        confirm: (param?: FilterConfirmProps) => void,
        dataIndex: DataIndex,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<IContract> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={e => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        onFilterDropdownOpenChange: visible => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: text =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const columns: ColumnsType<IContract> = [
        {
            title: 'Code',
            dataIndex: 'id',
            key: 'id',
            width: '10%',
            ...getColumnSearchProps('id'),
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            width: '20%',
            ...getColumnSearchProps('date'),
            sorter: (a, b) => a.date.length - b.date.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: '30%',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Counterparty',
            dataIndex: 'counterparty_name',
            key: 'counterparty_name',
            ...getColumnSearchProps('counterparty_name'),
            sorter: (a, b) => a.counterparty_id.length - b.counterparty_id.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Company',
            dataIndex: 'company_name',
            key: 'company_name',
            ...getColumnSearchProps('company_name'),
            sorter: (a, b) => a.counterparty_id.length - b.counterparty_id.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Type contract',
            dataIndex: 'type_contract_name',
            key: 'type_contract_name',
            ...getColumnSearchProps('type_contract_name'),
            sorter: (a, b) => a.counterparty_id.length - b.counterparty_id.length,
            sortDirections: ['descend', 'ascend'],
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <NavLink
                        to={RouteNames.CONTRACT + '/' + record.id}
                    >
                        {RouteNamesCRUD.EDITE}
                    </NavLink>
                    <Button
                        onClick={()=> props.handleDelete(record.id)}
                        danger
                    >
                        {RouteNamesCRUD.DELETE}
                    </Button>
                </Space>
            ),
        }
    ];
    return <Table columns={columns} dataSource={data} />;
};

export default ContractList;