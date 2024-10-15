'use client'; // Named export for 'use client'

// Import node module libraries
import { useState } from 'react';
import { ProgressBar, Row, Col, Container, Card, Table, Button, Modal, Form, Nav } from 'react-bootstrap';
import { PageHeading } from 'widgets';
import ActiveProjectsData from 'data/dashboard/ActiveProjectsData'; // Labs data

// Sample time slots for each lab (for demonstration purposes)
const timeSlots = {
  'Lab 1': ['09:00', '10:00', '11:00', '14:00', '15:00'],
  'Lab 2': ['09:30', '10:30', '11:30', '13:30', '14:30'],
  'Lab 3': ['10:00', '11:00', '12:00', '15:00', '16:00'],
  // Add other labs and their respective slots
};

const Bookings = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedLab, setSelectedLab] = useState(null);
  const [bookingTime, setBookingTime] = useState('');

  // Handle lab booking button click
  const handleBookingClick = (lab) => {
    setSelectedLab(lab);
    setShowModal(true);
  };

  // Handle booking submission
  const handleBookingSubmit = () => {
    if (selectedLab && bookingTime) {
      // Submit the booking request (can be integrated with backend API)
      console.log(`Booking Lab: ${selectedLab.labName}, Time: ${bookingTime}`);

      // Close modal after booking
      setShowModal(false);
      setSelectedLab(null);
      setBookingTime('');
    }
  };

  return (
    <Container fluid className="p-6">
      {/* Header with Navigation Menu */}
      <Row>
        <Col>
          <Nav variant="tabs" defaultActiveKey="/bookings">
            <Nav.Item>
              <Nav.Link href="/bookings/timetable">Timetable</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/bookings/request">Request</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/bookings/downtime">Downtime</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>

      {/* Page Heading */}
      <PageHeading heading="Book a Lab" />

      <Row className="mt-6">
        <Col md={12}>
          <Card>
            <Card.Header className="bg-white py-4">
              <h4 className="mb-0">Available Labs</h4>
            </Card.Header>
            <Table responsive className="text-nowrap mb-0">
              <thead className="table-light">
                <tr>
                  <th>Lab</th>
                  <th>Availability</th>
                  <th>Capacity</th>
                  <th>Usage Frequency</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {ActiveProjectsData.map((lab, index) => (
                  <tr key={index}>
                    <td>{lab.labName}</td>
                    <td>{lab.availability ? 'Available' : 'Unavailable'}</td>
                    <td>{lab.capacity}</td>
                    <td>
                      <ProgressBar now={lab.usageProgress} style={{ height: '5px' }} />
                    </td>
                    <td>
                      <Button
                        variant="primary"
                        disabled={!lab.availability}
                        onClick={() => handleBookingClick(lab)}
                      >
                        Book Lab
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>

      {/* Booking Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Book Lab: {selectedLab?.labName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Select Time</Form.Label>
              <Form.Control
                as="select"
                value={bookingTime}
                onChange={(e) => setBookingTime(e.target.value)}
              >
                <option value="">Select a time slot</option>
                {selectedLab && timeSlots[selectedLab.labName]?.map((time, index) => (
                  <option key={index} value={time}>{time}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleBookingSubmit} disabled={!bookingTime}>
            Confirm Booking
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Bookings;
