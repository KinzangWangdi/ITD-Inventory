'use client'
// import node module libraries
import { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

// import theme style scss file
import 'styles/theme.scss';

// import sub components
import NavbarTop from '/layouts/navbars/NavbarTop';

export default function UserDashboardLayout({ children }) {
	const [showMenu, setShowMenu] = useState(true);
	const ToggleMenu = () => setShowMenu(!showMenu);

	return (
		<div id="db-wrapper">
			<div id="page-content">
				{/* Customized Top Navbar for Users */}
				<div className="header">
					<Navbar bg="light" expand="lg">
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
				</div>

				{/* Main content section */}
				<div className="main-content">
					<Container fluid>
						{children}
					</Container>
				</div>
			</div>
		</div>
	)
}
