// import node module libraries
import Link from 'next/link';
import { ProgressBar, Col, Row, Card, Table } from 'react-bootstrap';

// import required data files
import ActiveProjectsData from "data/dashboard/ActiveProjectsData"; // Ensure the filename is updated accordingly

const ActiveProjects = () => {
    return (
        <Row className="mt-6">
            <Col md={12} xs={12}>
                <Card>
                    <Card.Header className="bg-white py-4">
                        <h4 className="mb-0">Active Labs</h4>
                    </Card.Header>
                    <Table responsive className="text-nowrap mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>Lab</th>
                                <th>Availability</th>
                                <th>Capacity</th> {/* Changed from Lab Managers to Capacity */}
                                <th>Usage Frequency</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ActiveProjectsData.map((lab, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <div className={`icon-shape icon-md border p-4 rounded-1 ${lab.brandLogoBg}`}>
                                                        {/* Removed Image component */}
                                                    </div>
                                                </div>
                                                <div className="ms-3 lh-1">
                                                    <h5 className="mb-1">
                                                        <Link href="#" className="text-inherit">{lab.labName}</Link>
                                                    </h5>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">{lab.availability ? 'Available' : 'Unavailable'}</td>
                                        <td className="align-middle">{lab.capacity}</td> {/* Added capacity */}
                                        <td className="align-middle text-dark">
                                            <div className="float-start me-3">{lab.usageProgress}%</div>
                                            <div className="mt-2">
                                                <ProgressBar now={lab.usageProgress} style={{ height: '5px' }} />
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                    <Card.Footer className="bg-white text-center">
                        <Link href="#" className="link-primary">View All Labs</Link>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    );
};

export default ActiveProjects;
