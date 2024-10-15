'use client'

// Import node module libraries
import { Row, Col, Container, Table, Button, Form } from 'react-bootstrap';

// Import widget as custom components
import { PageHeading } from 'widgets';

const Users = () => {
  // Dummy data for now (can be replaced with real data from API)
  const users = [
    { name: 'Kezang', address: 'CST', email: 'kezang@gmail.com', contact: '17456788' },
    { name: 'Jamtsho', address: 'P/ling', email: 'jam@gmail.com', contact: '77567878' }
  ];

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Staff" />

      {/* Search and Add User Button */}
      <Row className="mt-4">
        <Col md={6}>
          <Form.Control type="search" placeholder="Search..." />
        </Col>
        <Col md={6} className="text-end">
          <Button variant="primary">+ Add User</Button>
        </Col>
      </Row>

      {/* User Table */}
      <Row className="mt-4">
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>User Name</th>
                <th>Address</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.address}</td>
                  <td>{user.email}</td>
                  <td>{user.contact}</td>
                  <td><Button variant="outline-secondary">See Profile</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Pagination */}
      <Row>
        <Col className="d-flex justify-content-between">
          <div>Showing 1 to {users.length} of {users.length} entries</div>
          <div>
            <Button variant="link">Previous</Button>
            <Button variant="link">Next</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Users;
