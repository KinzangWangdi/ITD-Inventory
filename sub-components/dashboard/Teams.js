// import node module libraries
import React from "react";
import Link from 'next/link';
import { Card, Dropdown } from 'react-bootstrap';
import { MoreVertical } from 'react-feather';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

// Example data representing booking trends over time
const BookingTrendsData = [
    { date: 'Week 1', bookings: 20 },
    { date: 'Week 2', bookings: 35 },
    { date: 'Week 3', bookings: 40 },
    { date: 'Week 4', bookings: 25 },
    { date: 'Week 5', bookings: 60 },
    { date: 'Week 6', bookings: 55 },
];

const BookingTrendsReport = () => {

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <Link
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
            className="text-muted text-primary-hover">
            {children}
        </Link>
    ));

    CustomToggle.displayName = 'CustomToggle';

    const ActionMenu = () => {
        return (
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle}>
                    <MoreVertical size="15px" className="text-muted" />
                </Dropdown.Toggle>
                <Dropdown.Menu align={'end'}>
                    <Dropdown.Item eventKey="1">
                        View Details
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="2">
                        Download Report
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="3">
                        Refresh Data
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    };

    return (
        <Card className="h-100">
            <Card.Body>
                <div className="d-flex align-items-center justify-content-between">
                    <h4 className="mb-0">Booking Trends Report</h4>
                    <ActionMenu />
                </div>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={BookingTrendsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="bookings" stroke="#ff7300" />
                    </LineChart>
                </ResponsiveContainer>
            </Card.Body>
        </Card>
    );
}

export default BookingTrendsReport;
