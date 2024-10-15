'use client';
import { useState } from 'react';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import dayjs from 'dayjs';
import {
  PieChart, Pie, Cell, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, BarChart, Bar
} from 'recharts';

// Sample booking trends data
const bookingTrendsData = [
  { name: 'Week 1', bookings: 20 },
  { name: 'Week 2', bookings: 30 },
  { name: 'Week 3', bookings: 15 },
  { name: 'Week 4', bookings: 25 },
  { name: 'Week 5', bookings: 35 },
];

// Sample asset allocation data
const assetAllocationData = [
  { location: 'Computer Lab 1', computers: 15, networkDevices: 5, furniture: 10 },
  { location: 'Network Lab', computers: 10, networkDevices: 12, furniture: 5 },
  { location: 'Hardware Lab', computers: 8, networkDevices: 6, furniture: 4 },
  { location: 'Multimedia Lab', computers: 5, networkDevices: 3, furniture: 2 },
];

// Sample maintenance data
const maintenanceData = [
  { name: 'Completed', value: 32, fill: '#4caf50' },
  { name: 'In Progress', value: 25, fill: '#2196f3' },
  { name: 'On Hold', value: 18, fill: '#f44336' },
  { name: 'Pending', value: 25, fill: '#ff9800' },
];

const Charts = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handlePrevMonth = () => {
    setSelectedDate(selectedDate.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setSelectedDate(selectedDate.add(1, 'month'));
  };

  return (
    <Container fluid className="p-6">
      <Row className="mt-6">
        <Col xl={12} lg={12} md={12} className="mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <h1>Reports</h1>
            <Button variant="primary" className="btn-lg">Back</Button>
          </div>
        </Col>

        {/* Maintenance Status Card */}
        <Col xl={4} lg={6} md={12}>
          <Card>
            <Card.Body>
              <h4>Maintenance Status</h4>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={maintenanceData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                    {maintenanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <ul className="mt-2">
                {maintenanceData.map((entry, index) => (
                  <li key={index} className="text-sm">
                    <span className="font-semibold" style={{ color: entry.fill }}>{entry.name}: {entry.value}%</span>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>

        {/* Booking Trends Card */}
        <Col xl={4} lg={6} md={12}>
          <Card>
            <Card.Body>
              <h4>Booking Trends</h4>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={bookingTrendsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="bookings" stroke="#ff7300" />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-2 text-sm">
                <span className="font-semibold text-orange-600">Bookings</span> Over Time
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Asset Allocation Card */}
        <Col xl={4} lg={6} md={12}>
          <Card>
            <Card.Body>
              <h4>Asset Allocation</h4>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={assetAllocationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="location" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="computers" fill="#82ca9d" />
                  <Bar dataKey="networkDevices" fill="#8884d8" />
                  <Bar dataKey="furniture" fill="#ffcc00" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-2 text-sm">
                <span className="font-semibold text-green-600">Asset Allocation</span> in Labs
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Charts;
