import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Staff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            staffs: [],
        };
    }

    componentDidMount() {
        const url = "http://localhost:5000/GetAllStaff/";
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                this.setState({
                    staffs: result,
                });
            })
            .catch((err) => console.log(err));
    }

    render() {
        const { error, staffs } = this.state;
        if (error) {
            return <div>Error: {error}</div>;
        } else {
            return (
                <div>
                    <Table style={{ width: "100px" }} striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Student Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {staffs.map((staff) => (
                                <tr key={staff._id}>
                                    <td>{staff._id}</td>
                                    <td>{staff.id}</td>
                                    <td>{staff.name}</td>
                                    <td>{staff.email}</td>
                                    <td>{staff.student_count}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            );
        }
    }
}

export default Staff;
