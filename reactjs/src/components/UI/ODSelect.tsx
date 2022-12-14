import React from 'react';
import {Interface} from "readline";
import {ICounterparty} from "../../models/catalog/ICounterparty";
import {ITypeContract} from "../../models/enumeration/ITypeContract";

interface SelectProps {
    options: ITypeContract[],
    defaultValue: string,
    value: string,
    onChange: (event: string) => void
}

const ODSelect: React.FC <SelectProps> = (props) => {
    return (
        <select
            value={props.value}
            onChange={event => props.onChange(event.target.value)}
        >
            <option disabled value="">{props.defaultValue}</option>
            {props.options.map(option =>
                <option key={option.id} value={option.id}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default ODSelect;