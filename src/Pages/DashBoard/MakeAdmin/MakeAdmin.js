import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const { token } = useAuth();

    const handleAdminSubmit = e => {
        const user = { email }
        fetch('https://shrouded-caverns-69999.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${ token }`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json()).then(data => {
            if(data.modifiedCount) {
                console.log(data);
                setSuccess(true);
            }
        });

        e.preventDefault();
    }

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    return (
        <div>
            <h2>Make An Admin</h2>
            <form onSubmit={ handleAdminSubmit }>
                <TextField sx={ { width: '50%' } } id="standard-basic" label="Email" variant="standard" type="email" onBlur={ handleOnBlur } />
                <Button variant="contained" type="submit">Make Admin</Button>
            </form>
            { success && <Alert severity="success">Admin Made Successfully</Alert> }
        </div>
    );
};

export default MakeAdmin;