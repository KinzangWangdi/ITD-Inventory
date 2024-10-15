'use client';

import { useState } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import { useRouter } from 'next/navigation'; // Import useRouter from Next.js

const Classes = () => {
  const [selectedLab, setSelectedLab] = useState('Lab 1');
  const router = useRouter(); // Initialize useRouter

  // Function to navigate to the Add Lab page
  const handleAddLabClick = () => {
    router.push('/classes/addlab'); // Make sure '/addlab' is the correct path for your Add Lab page
  };

  return (
    <Container fluid className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-0">Labs</h1>

      <main className="container mx-auto px-0 py-10">
        <Row className="justify-content-between align-items-center mb-4">
          {/* Back Button */}
          <Col md={6}>
            <Button variant="secondary" onClick={() => router.back()}>
              ← Back
            </Button>
          </Col>
          {/* Add New Lab Button */}
          <Col md={6} className="text-end">
            <Button variant="primary" onClick={handleAddLabClick}>
              + Add New Lab
            </Button>
          </Col>
        </Row>

        {/* Labs Section */}
        <section id="labs-section" className="mt-4">
          <h2 className="text-xl font-bold mb-4">Select Lab</h2>

          {/* Lab dropdown */}
          <div className="form-container my-4">
            <select
              className="form-select"
              value={selectedLab}
              onChange={(e) => setSelectedLab(e.target.value)}
            >
              <option value="Lab 1">Lab 1</option>
              <option value="Lab 2">Lab 2</option>
              <option value="Lab 3">Lab 3</option>
            </select>
          </div>

          {/* Card for Lab Details Table */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            {/* Lab Details Table */}
            <div className="overflow-x-auto">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Lab Name</th>
                    <th>Computers</th>
                    <th>Network Devices</th>
                    <th>Furnitures</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-100">
                    <td>Software Lab</td>
                    <td>20</td>
                    <td>3</td>
                    <td>40</td>
                    <td>
                      <span className="text-success bg-success-light px-3 py-1 rounded-full">Active</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td>OOAD Lab</td>
                    <td>30</td>
                    <td>10</td>
                    <td>40</td>
                    <td>
                      <span className="text-danger bg-danger-light px-3 py-1 rounded-full">Inactive</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>

           
          </div>
        </section>
      </main>
    </Container>
  );
};

export default Classes;
