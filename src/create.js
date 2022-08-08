import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'

export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const postData = () => {
        axios.post(`http://192.168.4.55:8080/user`, {
            firstName,
            lastName,
            checkbox
        })
	}

    return (
    	<div className="main">
	        <div>
	            <Form className="create-form">
	                <Form.Field>
	                    <label>First Name</label>
	                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
	                </Form.Field>
	                <Form.Field>
	                    <label>Last Name</label>
	                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
	                </Form.Field>
	                <Form.Field>
	                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} />
	                </Form.Field>
	                <Button onClick={postData} type='submit'>Submit</Button>
	            </Form>
	        </div>
		</div>
    )
}