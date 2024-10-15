'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, Row, Col } from 'react-bootstrap';

// Sample data for fault reports
const data = [
  { month: 'Jan', Hardware: 12, Furniture: 8, Networking: 3 },
  { month: 'Feb', Hardware: 19, Furniture: 11, Networking: 4 },
  { month: 'Mar', Hardware: 3, Furniture: 7, Networking: 2 },
  { month: 'Apr', Hardware: 5, Furniture: 6, Networking: 6 },
  { month: 'May', Hardware: 2, Furniture: 5, Networking: 8 },
  { month: 'Jun', Hardware: 3, Furniture: 9, Networking: 1 },
  { month: 'Jul', Hardware: 8, Furniture: 2, Networking: 5 },
  { month: 'Aug', Hardware: 15, Furniture: 7, Networking: 9 },
  { month: 'Sep', Hardware: 10, Furniture: 8, Networking: 4 },
  { month: 'Oct', Hardware: 6, Furniture: 4, Networking: 7 },
];

const FaultReportTrends = () => {
    return (
        <Row className="mt-4">
            <Col md={12} xs={12}>
                <Card>
                    <Card.Header className="bg-white py-4">
                        <h4 className="mb-0">Fault Report Trends</h4>
                    </Card.Header>
                    <Card.Body>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Hardware" stackId="a" fill="#8884d8" />
                                <Bar dataKey="Furniture" stackId="a" fill="#82ca9d" />
                                <Bar dataKey="Networking" stackId="a" fill="#ffc658" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default FaultReportTrends
