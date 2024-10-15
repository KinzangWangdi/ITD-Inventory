'use client';

// Import necessary components and libraries
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/navigation'; // Ensure you are using the correct import for router

const AddItem = () => {
  const router = useRouter(); // Initialize router

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    // Add your form submission logic here
    alert('Item added!'); // Example alert, replace with actual logic
    router.push('/pages/assets'); // Navigate back to Assets page
  };

  return (
    <Container fluid className="p-4 p-md-6">
      <h2 className="mb-4">Add New Item</h2>
      
      {/* Back Button */}
      <Button variant="secondary" className="mb-4" onClick={() => router.push('/pages/assets')}>
        Back
      </Button>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Item Name</Form.Label>
              <Form.Control type="text" placeholder="Enter item name" required />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" placeholder="Enter category" required />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Cost</Form.Label>
              <Form.Control type="number" placeholder="Enter cost" required />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Installation Date</Form.Label>
              <Form.Control type="date" required />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Market Price</Form.Label>
              <Form.Control type="number" placeholder="Enter market price" required />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Upload CSV for Bulk Update</Form.Label>
              <Form.Control type="file" accept=".csv" />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">Add Item</Button>
      </Form>
    </Container>
  );
};

export default AddItem
