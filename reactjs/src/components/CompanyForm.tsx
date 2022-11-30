import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {FC, useEffect, useState} from "react";
import {ICompany} from "../models/catalog/ICompany";
import Autocomplete from "@mui/material/Autocomplete";
import {IUserShort} from "../models/catalog/IUserShort";
import { Dialog, MenuItem} from "@mui/material";
import {useActions} from "../hooks/useActions";


interface CompanyFormProps {
    company: ICompany,
    users: IUserShort[],
    submit: (company: ICompany) => void,
    open: boolean
}


type User = {
    id: number
    label: string
}


const CompanyForm: FC<CompanyFormProps> = (props) => {
    // const options = [
    //     { id: '1', label: 'The Godfather'},
    //     { id: '2', label: 'Pulp Fiction'},
    // ];
    // const [user, setUser] = useState <User | null >(null)

    const {fetchUsers } = useActions();
    const [company, setCompany] = useState<ICompany>({
        id: '',
        full_name: '',
        name: '',
        bank: '',
        address: '',
        edrpou: '',
        ipn: '',
        user_id: '',
    } as ICompany);

    const submitForm = (event: object, reason: string) => {
        if(reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
            submitFormButton();
        }
    }
    //сделать разные с отменой кнопка
    const submitFormButton = () => {
            props.submit({...company })
    }

    useEffect(() => {
        fetchUsers()
    }, [])


    const [country, setCountries] = useState<string>('')

    //развернутая стрелочная функция
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //    setCompany({...company, user_id: event.target.value})
    // }

    return (
        <Dialog
            open={props.open}
            onClose={submitForm}


        >
            <DialogTitle>Add</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Create company
                    </DialogContentText>
                    <TextField
                        autoFocus
                        id="id"
                        label="Code"
                        variant="outlined"
                        type="number"
                        fullWidth
                        required
                        size="small"
                        margin="dense"
                        disabled
       //                 onChange={event => setCompany({...company, id: event.target.value})}
                        value={company.id}

                    />
                    <TextField
                        autoFocus
                        id="full_name"
                        label="Full name"
                        variant="outlined"
                        type="text"
                        fullWidth
                        required
                        size="small"
                        margin="dense"
                        onChange={event => setCompany({...company, full_name: event.target.value})}
                        value={company.full_name}

                    />
                    <TextField
                        id="name"
                        label="Name"
                        variant="outlined"
                        type="text"
                        fullWidth
                        required
                        size="small"
                        margin="dense"
                        onChange={event => setCompany({...company, name: event.target.value})}
                        value={company.name}
                    />
                    <TextField
                        id="bank"
                        label="Bank"
                        variant="outlined"
                        type="text"
                        fullWidth
                        required
                        size="small"
                        margin="dense"
                        onChange={event => setCompany({...company, bank: event.target.value})}
                        value={company.bank}
                    />
                    <TextField
                        id="address"
                        label="Address"
                        variant="outlined"
                        type="text"
                        fullWidth
                        required
                        size="small"
                        margin="dense"
                        onChange={event => setCompany({...company, address: event.target.value})}
                        value={company.address}
                    />
                    <TextField
                        id="edrpou"
                        label="EDRPOU"
                        variant="outlined"
                        type="text"
                        fullWidth
                        required
                        size="small"
                        margin="dense"
                        onChange={event => setCompany({...company, edrpou: event.target.value})}
                        value={company.edrpou}
                    />
                    <TextField
                        id="ipn"
                        label="IPN"
                        variant="outlined"
                        type="text"
                        fullWidth
                        required
                        size="small"
                        margin="dense"
                        onChange={event => setCompany({...company, ipn: event.target.value})}
                        value={company.ipn}
                    />
                    {/*<Autocomplete*/}
                    {/*    options={options}*/}
                    {/*    renderInput={params => <TextField {...params} label='User' />}*/}
                    {/*    isOptionEqualToValue={(option, value) => option.id === value.id}*/}
                    {/*    onChange={(_event: any, newValue: IUserShort | null ) => {*/}
                    {/*         setCompany(newValue)*/}
                    {/*    }}*/}
                    {/*    value={company.user_id}*/}
                    {/*    // onChange={event => {*/}
                    {/*    //     setCompany({...company, user_id: event.target.dispatchEvent()})*/}
                    {/*    // }}*/}
                    {/*   // onChange={event => setUser({...user, user: event.target.value })}*/}

                    {/*/>*/}

                    <TextField
                        fullWidth
                        label='Select user'
                        select
                        size='small'
                        margin="dense"
                        required
                        color='secondary'
                        value={company.user_id}
                        onChange={event => setCompany({...company, user_id: event.target.value})}
                    >{props.users.map(user =>
                        <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
                    )}
                    </TextField>


                </DialogContent>
                <DialogActions>
                    <Button color="primary"
                            onClick={submitFormButton}
                    >
                        Cancel
                    </Button>
                    <Button color="primary"
                            type="submit"
                            onClick={submitFormButton}
                    >
                        Ok
                    </Button>
                </DialogActions>
        </Dialog>

    );
};
export default CompanyForm;
