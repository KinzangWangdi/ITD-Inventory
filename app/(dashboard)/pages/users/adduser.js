'use client';

import { useState } from 'react';
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import Papa from 'papaparse'; // Install using `npm install papaparse` for CSV parsing

const AddUser = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const router = useRouter();

  // Function to handle form submission for a single user
  const handleSingleUserSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, address, email, contact };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    
    // Reset form fields
    setName('');
    setAddress('');
    setEmail('');
    setContact('');
  };

  // Function to handle CSV file upload
  const handleCSVUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          const parsedUsers = results.data.map(user => ({
            name: user['User Name'],
            address: user['Address'],
            email: user['Email'],
            contact: user['Contact Number'],
          }));
          setUsers((prevUsers) => [...prevUsers, ...parsedUsers]);
        },
      });
    }
  };

  // Function to handle redirection
  const handleBack = () => {
    router.push('/users'); // Redirect to users page
  };

  return (
    <Container fluid className="p-6">
      <h1 className="text-3xl font-bold mb-4">Add User</h1>

      {/* Form to Add a Single User */}
      <Form onSubmit={handleSingleUserSubmit} className="mb-4">
        <Row>
          <Col md={3}>
            <Form.Control
              type="text"
              placeholder="User Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Col>
          <Col md={3}>
            <Form.Control
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Col>
          <Col md={3}>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Col>
          <Col md={3}>
            <Form.Control
              type="text"
              placeholder="Contact Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Button variant="primary" type="submit">
              Add User
            </Button>
          </Col>
        </Row>
      </Form>

      {/* Upload CSV File Section */}
      <h2 className="text-xl mb-3">Bulk Upload Users</h2>
      <Row>
        <Col md={4}>
          <Form.Control type="file" accept=".csv" onChange={handleCSVUpload} />
        </Col>
      </Row>

      {/* User Table */}
      <h2 className="text-xl mt-4 mb-3">Added Users</h2>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>User Name</th>
                <th>Address</th>
                <th>Email</th>
                <th>Contact Number</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.address}</td>
                  <td>{user.email}</td>
                  <td>{user.contact}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Back Button */}
      <Row className="mt-4">
        <Col className="text-end">
          <Button variant="secondary" onClick={handleBack}>
            Back to Users
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AddUser;
