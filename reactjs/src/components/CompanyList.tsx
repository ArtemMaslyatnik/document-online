import React, {FC, useState} from 'react';
import {Button, Calendar, Popconfirm, Space, Table, TableProps} from "antd";
import {ICompany} from "../models/catalog/ICompany";
import {ColumnsType, FilterValue, SorterResult} from "antd/es/table/interface";


interface CompanyProps {
    companies: ICompany[],
    doubleClick: (row: ICompany ) => void,
    handleDelete: (id: string) => void
}

const CompanyList: FC<CompanyProps> = (props) => {

    const data: ICompany[] = [];


    const [filteredInfo, setFilteredInfo] = useState<Record<string, FilterValue | null>>({});
    const [sortedInfo, setSortedInfo] = useState<SorterResult<ICompany>>({});

    const handleChange: TableProps<ICompany>['onChange'] = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter as SorterResult<ICompany>);
    };

    const clearFilters = () => {
        setFilteredInfo({});
    };

    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
    };

    const add = () => {

    }

    const setAgeSort = () => {
        setSortedInfo({
            order: 'descend',
            columnKey: 'age',
        });
    };

    const handleEditeDoubleClick = (row: ICompany, rowIndex: number| undefined) => {
        return {
            onDoubleClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => (props.doubleClick({...row})), // double click row
        };

    }

    const columns: ColumnsType<ICompany> = [
        {
            title: 'Code',
            dataIndex: 'id',
            key: 'id',
            filters: [
                { text: 'Joe', value: 'Joe' },
                { text: 'Jim', value: 'Jim' },
            ],
            filteredValue: filteredInfo.name || null,
       //      onFilter: (value: string, record) => record.id.includes(value),
            sorter: (a, b) => a.id.length - b.id.length,
            sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
            sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            filters: [
                { text: 'London', value: 'London' },
                { text: 'New York', value: 'New York' },
            ],
            filteredValue: filteredInfo.address || null,
            //onFilter: (value: string, record) => record.address.includes(value),
            sorter: (a, b) => a.address.length - b.address.length,
            sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button
                        onClick={(event)=> props.handleDelete(record.id)}
                        type="primary"
                        danger>
                        -
                    </Button>
                </Space>
            ),
        }


    ];

    return (
        <>
            <Space style={{ marginBottom: 16 }}>
                <Button onClick={setAgeSort}>Sort age</Button>
                <Button onClick={clearFilters}>Clear filters</Button>
                <Button onClick={clearAll}>Clear filters and sorters</Button>
                <Button onClick={add}>+</Button>
            </Space>
            <Table

                columns={columns}
                dataSource={props.companies}
                onChange={handleChange}
                onRow={handleEditeDoubleClick}
            />
        </>
    );
};

export default CompanyList;
