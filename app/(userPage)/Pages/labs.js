'use client'

// import node module libraries
import { Fragment } from 'react';
import Link from 'next/link';
import { Container, Col, Row, Navbar, Nav, NavDropdown } from 'react-bootstrap';

// import widgets/custom components
import { StatRightTopIcon } from 'widgets';

// import sub-components
import { ActiveProjects, Teams, BookingStatus } from 'sub-components';

// import required data files
import ProjectsStatsData from 'data/dashboard/ProjectsStatsData'; // You can modify this to suit user-specific stats

const UserHome = () => {
    return (
        <Fragment>
            {/* Top Navbar with user menus */}
            <Navbar bg="light" expand="lg" className="mb-4">
                <Container fluid>
                    <Navbar.Brand href="/user">User Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/user/timetable">Timetable</Nav.Link>
                            <Nav.Link href="/user/requests">Requests</Nav.Link>
                            <Nav.Link href="/user/downtime">Downtime</Nav.Link>
                            <NavDropdown title="Profile" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/user/profile">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="/user/settings">Settings</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/user/logout">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Main Content Area */}
            <Container fluid className="px-6">
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        {/* Page header */}
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h3 className="mb-0">Welcome, User</h3>
                                <p className="text-muted">Here are your current bookings and lab information.</p>
                            </div>
                        </div>
                    </Col>

                    {/* Statistics Cards (optional, modify as per user stats) */}
                    {ProjectsStatsData.map((item, index) => (
                        <Col xl={3} lg={6} md={12} xs={12} className="mt-4" key={index}>
                            <StatRightTopIcon info={item} />
                        </Col>
                    ))}
                </Row>

                {/* Available Labs or Active Bookings */}
                <ActiveProjects />

                <Row className="my-6">
                    {/* Booking Status */}
                    <Col xl={8} lg={12} md={12} xs={12}>
                        <BookingStatus />
                    </Col>

                    {/* Optional section (modify or add other user-related components) */}
                    <Col xl={4} lg={12} md={12} xs={12} className="mb-6 mb-xl-0">
                        <Teams />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default UserHome;
