import { Tabs } from 'antd';
import React from 'react';
import ContractList from "./catalog/contract/ContractList";

const onChange = (key: string) => {
    console.log(key);
};

const items = new Array(3).fill(null).map((_, i) => {
    const id = String(i + 1);
    return {
        label: `Tab Title ${id}`,
        key: id,
        // children: (
        //
        //         <ContractList
        //             data={}
        //             handleDelete={}></ContractList>
        //
        // ),
    };
});

const DOTabs: React.FC = () => (
    <Tabs
        onChange={onChange}
        type="card"
        items={items}
    />
);

export default DOTabs;