'use client';

import { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/navigation'; // Import useRouter from Next.js

const AddLab = () => {
  const [labName, setLabName] = useState('');
  const [computers, setComputers] = useState('');
  const [networkDevices, setNetworkDevices] = useState('');
  const [furnitures, setFurnitures] = useState('');
  const [status, setStatus] = useState('Active'); // Default status
  const router = useRouter();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can add the logic to send the data to your API or state management
    console.log({
      labName,
      computers,
      networkDevices,
      furnitures,
      status,
    });

    // Redirect to the Classes page or wherever you want after submission
    router.push('/classes');
  };

  return (
    <Container fluid className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-0">Add New Lab</h1>

      <main className="container mx-auto px-0 py-10">
        <Row className="justify-content-center">
          <Col md={8}>
            <Form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-4">
              <Form.Group className="mb-3">
                <Form.Label>Lab Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter lab name"
                  value={labName}
                  onChange={(e) => setLabName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Computers</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter number of computers"
                  value={computers}
                  onChange={(e) => setComputers(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Network Devices</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter number of network devices"
                  value={networkDevices}
                  onChange={(e) => setNetworkDevices(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Furnitures</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter number of furnitures"
                  value={furnitures}
                  onChange={(e) => setFurnitures(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </Form.Select>
              </Form.Group>

              <Button variant="primary" type="submit">
                Add Lab
              </Button>
              <Button variant="secondary" className="ms-2" onClick={() => router.back()}>
                Cancel
              </Button>
            </Form>
          </Col>
        </Row>
      </main>
    </Container>
  );
};

export default AddLab;
