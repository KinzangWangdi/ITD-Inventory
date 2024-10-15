// sub-components/dashboard/BookingStatus.js

'use client'; // Use named export for 'use client'
import React, { useState } from 'react';
import { Card, Row, Col, Button, Modal } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// Sample data for available labs and bookings
const availableLabs = [
  { id: 1, title: 'Room A' },
  { id: 2, title: 'Room B' },
  { id: 3, title: 'Lab 1' },
  { id: 4, title: 'Lab 2' },
];

const existingBookings = [
  { id: 1, title: 'Room A', date: '2024-10-12', time: '10:00 AM' },
  { id: 2, title: 'Room B', date: '2024-10-15', time: '01:00 PM' },
  { id: 3, title: 'Lab 1', date: '2024-10-18', time: '02:00 PM' },
];

const BookingStatus = () => {
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [selectedLab, setSelectedLab] = useState(null);
  const [bookingTime, setBookingTime] = useState(''); // Time for booking

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setSelectedLab(null); // Reset selected lab when date changes
    setBookingTime(''); // Reset booking time
  };

  const handleLabClick = (lab) => {
    setSelectedLab(lab);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedLab(null);
    setBookingTime(''); // Reset time on modal close
  };

  const handleConfirmBooking = () => {
    // Implement booking logic here
    alert(`Booked ${selectedLab.title} on ${date.toDateString()} at ${bookingTime}`);
    handleCloseModal();
  };

  // Function to filter available labs
  const getAvailableLabs = () => {
    const bookedLabs = existingBookings
      .filter(booking => booking.date === date.toISOString().split('T')[0])
      .map(booking => booking.title);
    return availableLabs.filter(lab => !bookedLabs.includes(lab.title));
  };

  return (
    <Row className="mt-4">
      <Col md={12} xs={12}>
        <Card>
          <Card.Header className="bg-white py-4">
            <h4 className="mb-0">Booking Status</h4>
          </Card.Header>
          <Card.Body>
            <h5>Total Available Labs: {getAvailableLabs().length}</h5>
            <Calendar 
              onChange={handleDateChange} 
              value={date} 
            />
            <div className="mt-4">
              <h6>Available Labs for {date.toDateString()}:</h6>
              <ul>
                {getAvailableLabs().map(lab => (
                  <li key={lab.id}>
                    <Button variant="link" onClick={() => handleLabClick(lab)}>
                      {lab.title}
                    </Button>
                  </li>
                ))}
                {getAvailableLabs().length === 0 && (
                  <li>No available labs for this date</li>
                )}
              </ul>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Modal for Booking Lab */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Book {selectedLab?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Selected Lab: {selectedLab?.title}</p>
          <p>Date: {date.toDateString()}</p>
          <div>
            <label htmlFor="bookingTime">Specify Time:</label>
            <input
              type="time"
              id="bookingTime"
              value={bookingTime}
              onChange={(e) => setBookingTime(e.target.value)}
              className="form-control"
            />
          </div>
          <p>Do you want to book this lab?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleConfirmBooking} disabled={!bookingTime}>
            Confirm Booking
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};

export default BookingStatus;
