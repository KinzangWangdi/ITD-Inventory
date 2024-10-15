'use client';

// Import node module libraries
import { Row, Col, Container, Nav, Tab, Table, Badge, Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

// Import widget as custom components
import { PageHeading } from 'widgets';

const Assets = () => {
  const router = useRouter(); // Initialize useRouter

  // Function to navigate to the Add Item page
  const handleAddItemClick = () => {
    router.push('/pages/assets/additem'); // Ensure the path is correct
  };

  // Dummy data for now (can be replaced with real data from API)
  const assets = [
    { id: '#7676', product: 'MACO1', category: 'Computers', installationDate: '2023-01-01', cost: '80,000 Nu', status: 'Functioning' },
    { id: '#7677', product: 'Laptop', category: 'Computers', installationDate: '2023-02-01', cost: '100,000 Nu', status: 'Not Functioning' },
    { id: '#7678', product: 'Router', category: 'Network Devices', installationDate: '2023-03-01', cost: '50,000 Nu', status: 'Functioning' },
    { id: '#7679', product: 'Switch', category: 'Network Devices', installationDate: '2023-04-01', cost: '90,000 Nu', status: 'Not Functioning' },
    { id: '#7680', product: 'Chair', category: 'Furnitures', installationDate: '2023-05-01', cost: '70,000 Nu', status: 'Functioning' },
    { id: '#7681', product: 'Table', category: 'Furnitures', installationDate: '2023-06-01', cost: '30,000 Nu', status: 'Not Functioning' },
  ];

  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Assets" />

      {/* Search and Add Item Button */}
      <Row className="mt-4">
        <Col md={6}>
          <Form.Control type="search" placeholder="Search..." />
        </Col>
        <Col md={6} className="text-end">
          <Button variant="primary" onClick={handleAddItemClick}>+ Add Item</Button>
        </Col>
      </Row>

      {/* Assets Table */}
      <Row className="mt-4">
        <Col>
          <Tab.Container defaultActiveKey="computers">
            {/* Nav tabs */}
            <Nav variant="tabs" className="mb-3">
              <Nav.Item>
                <Nav.Link eventKey="computers" className="px-5 py-4 fs-3">Computers</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="network-devices" className="px-5 py-4 fs-3">Network Devices</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="furnitures" className="px-5 py-4 fs-3">Furnitures</Nav.Link>
              </Nav.Item>
            </Nav>

            {/* Tab Content */}
            <Tab.Content>
              {/* Computers Tab */}
              <Tab.Pane eventKey="computers">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Product</th>
                      <th>Category</th>
                      <th>Installation Date</th>
                      <th>Cost (Nu)</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assets.filter(asset => asset.category === 'Computers').map((asset, index) => (
                      <tr key={index}>
                        <td>{asset.id}</td>
                        <td>{asset.product}</td>
                        <td>{asset.category}</td>
                        <td>{asset.installationDate}</td>
                        <td>{asset.cost}</td>
                        <td>
                          <Badge pill bg={asset.status === 'Functioning' ? 'success' : 'danger'} className="fs-4 p-3">
                            {asset.status}
                          </Badge>
                        </td>
                        <td>
                          <Button variant="outline-secondary">See Details</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Tab.Pane>

              {/* Network Devices Tab */}
              <Tab.Pane eventKey="network-devices">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Product</th>
                      <th>Category</th>
                      <th>Installation Date</th>
                      <th>Cost (Nu)</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assets.filter(asset => asset.category === 'Network Devices').map((asset, index) => (
                      <tr key={index}>
                        <td>{asset.id}</td>
                        <td>{asset.product}</td>
                        <td>{asset.category}</td>
                        <td>{asset.installationDate}</td>
                        <td>{asset.cost}</td>
                        <td>
                          <Badge pill bg={asset.status === 'Functioning' ? 'success' : 'danger'} className="fs-4 p-3">
                            {asset.status}
                          </Badge>
                        </td>
                        <td>
                          <Button variant="outline-secondary">See Details</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Tab.Pane>

              {/* Furnitures Tab */}
              <Tab.Pane eventKey="furnitures">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Product</th>
                      <th>Category</th>
                      <th>Installation Date</th>
                      <th>Cost (Nu)</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assets.filter(asset => asset.category === 'Furnitures').map((asset, index) => (
                      <tr key={index}>
                        <td>{asset.id}</td>
                        <td>{asset.product}</td>
                        <td>{asset.category}</td>
                        <td>{asset.installationDate}</td>
                        <td>{asset.cost}</td>
                        <td>
                          <Badge pill bg={asset.status === 'Functioning' ? 'success' : 'danger'} className="fs-4 p-3">
                            {asset.status}
                          </Badge>
                        </td>
                        <td>
                          <Button variant="outline-secondary">See Details</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>

      {/* Pagination */}
      <Row className="mt-4">
        <Col className="d-flex justify-content-between">
          <div>Showing 1 to {assets.length} of {assets.length} entries</div>
          <div>
            <Button variant="link">Previous</Button>
            <Button variant="link">Next</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Assets;
