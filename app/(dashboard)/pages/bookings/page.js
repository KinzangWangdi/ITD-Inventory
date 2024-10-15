'use client'; // For client-side rendering
import React, { useState } from 'react';
import { Card, Row, Col, Button, Modal, Nav, Table } from 'react-bootstrap';
import ActiveLabsData from 'data/dashboard/ActiveProjectsData'; // Import lab data

// Sample data for booking requests
const bookingRequests = [
  { id: 1, labId: 2, labName: 'Network Lab', date: '2024-10-21', time: '02:30 PM', requester: 'User1' },
  { id: 2, labId: 6, labName: 'Web Development Lab', date: '2024-10-22', time: '09:00 AM', requester: 'User2' },
];

// Dummy timetable data
const timetable = [
  { lab: 'Computer Lab 1', slots: ['9:00 AM - 11:00 AM', '1:00 PM - 3:00 PM'] },
  { lab: 'Network Lab', slots: ['10:00 AM - 12:00 PM', '3:00 PM - 5:00 PM'] },
  { lab: 'AI & ML Lab', slots: ['11:00 AM - 1:00 PM', '4:00 PM - 6:00 PM'] },
];

const BookingStatus = () => {
  const [activeTab, setActiveTab] = useState('bookings'); // Default to "Booked Labs"
  const [showModal, setShowModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Function to handle approving or rejecting bookings
  const handleApproveReject = (requestId, action) => {
    alert(`Request ${requestId} has been ${action}`);
    setShowModal(false);
  };

  const handleViewRequest = (request) => {
    setSelectedRequest(request);
    setShowModal(true);
  };

  return (
    <Row className="mt-4">
      <Col md={12} xs={12}>
        {/* Navigation Menu for Bookings */}
        <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
          <Nav.Item>
            <Nav.Link eventKey="bookings">Active Labs</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="requests">Booking Requests</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="timetable">Lab Timetables</Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Display Active Labs in a Table */}
        {activeTab === 'bookings' && (
          <Card className="mt-3">
            <Card.Header>
              <h4>Active Labs</h4>
            </Card.Header>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Lab Name</th>
                    <th>Availability</th>
                    <th>Capacity</th>
                    <th>Usage (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {ActiveLabsData.map(lab => (
                    <tr key={lab.id}>
                      <td>{lab.labName}</td>
                      <td>{lab.availability ? 'Available' : 'In Use'}</td>
                      <td>{lab.capacity}</td>
                      <td>{lab.usageProgress}%</td>
                    </tr>
                  ))}
                  {ActiveLabsData.length === 0 && (
                    <tr>
                      <td colSpan="4" className="text-center">No active labs available</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        )}

        {/* Display Booking Requests in a Table */}
        {activeTab === 'requests' && (
          <Card className="mt-3">
            <Card.Header>
              <h4>Booking Requests</h4>
            </Card.Header>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Lab/Room</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Requester</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookingRequests.map(request => (
                    <tr key={request.id}>
                      <td>{request.labName}</td>
                      <td>{request.date}</td>
                      <td>{request.time}</td>
                      <td>{request.requester}</td>
                      <td>
                        <Button variant="success" onClick={() => handleApproveReject(request.id, 'approved')} className="me-2">
                          Approve
                        </Button>
                        <Button variant="danger" onClick={() => handleApproveReject(request.id, 'rejected')}>
                          Reject
                        </Button>
                      </td>
                    </tr>
                  ))}
                  {bookingRequests.length === 0 && (
                    <tr>
                      <td colSpan="5" className="text-center">No booking requests available</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        )}

        {/* Display Lab Timetables in a Table */}
        {activeTab === 'timetable' && (
          <Card className="mt-3">
            <Card.Header>
              <h4>Lab Timetables</h4>
            </Card.Header>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Lab/Room</th>
                    <th>Available Slots</th>
                  </tr>
                </thead>
                <tbody>
                  {timetable.map((lab, index) => (
                    <tr key={index}>
                      <td>{lab.lab}</td>
                      <td>{lab.slots.join(', ')}</td>
                    </tr>
                  ))}
                  {timetable.length === 0 && (
                    <tr>
                      <td colSpan="2" className="text-center">No timetables available</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        )}
      </Col>

      {/* Modal for Approving/Rejecting Booking Requests */}
      {selectedRequest && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Booking Request for {selectedRequest.labName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Requested by: {selectedRequest.requester}</p>
            <p>Date: {selectedRequest.date}</p>
            <p>Time: {selectedRequest.time}</p>
            <p>Do you want to approve or reject this request?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button variant="success" onClick={() => handleApproveReject(selectedRequest.id, 'approved')}>
              Approve
            </Button>
            <Button variant="danger" onClick={() => handleApproveReject(selectedRequest.id, 'rejected')}>
              Reject
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Row>
  );
};

export default BookingStatus;
