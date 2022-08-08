import React, { useEffect,useState } from 'react';
import { Button, Table } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import axios from 'axios'


export default function Read () {

	const [APIData, setAPIData] = useState([]);

	const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
	}

    useEffect(() => {
        getData()
    }, [])

    const onDelete = (id) => {
    	axios.delete(`http://192.168.4.55:8080/user/${id}`)
    	.then(() => {
	        getData();
	    })
	}

	const getData = () => {
		// axios.get(`https://62e78e7793938a545bd3fc60.mockapi.io/api/testing/v1/fakeData`)
        axios.get(`http://192.168.4.55:8080/users`)
            .then((response) => {
                setAPIData(response.data);
            })
	}

    return (
        <div className="main">
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Check Box</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Link to='/update'>
	                                <Table.Cell>
	                                    <Button onClick={() => setData(data)}>Update</Button>
	                                </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}
