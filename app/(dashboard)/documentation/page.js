'use client';

// Import node module libraries
import { Card, Col, Row, Container } from 'react-bootstrap';

const Documentation = () => {
  return (
    <Container fluid className="p-6">
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-md-flex justify-content-between align-items-center">
            <div className="mb-3 mb-md-0">
              <h1 className="mb-0 h2 fw-bold">Inventory Management System Documentation</h1>
              <p className="mb-0">
                Welcome to the documentation for the Inventory Management System (IMS) developed for the IT Department of the College of Science and Technology.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={7} md={12} sm={12}>
          <Card>
            <Card.Body>
              <h2 className="fw-bold">Overview</h2>
              <p className="lead">
                The Inventory Management System (IMS) is designed to effectively manage IT lab assets, equipment bookings, maintenance tracking, and fault reporting.
              </p>

              <h2 className="fw-bold">Features</h2>
              <ul>
                <li>Manage IT lab assets efficiently.</li>
                <li>Book equipment easily with a user-friendly interface.</li>
                <li>Track maintenance schedules and fault reports.</li>
                <li>Generate reports on asset usage and maintenance history.</li>
                <li>Bulk user management for efficient handling of staff and users.</li>
              </ul>

              <h2 className="fw-bold">Adding Documents</h2>
              <p>
                The IMS allows for easy addition and management of documents related to assets and bookings. Users can upload relevant documents for each asset, including manuals, warranty information, and maintenance logs.
              </p>
              <p>
                To add documents, navigate to the asset management section, select the desired asset, and use the upload functionality to attach files. Ensure that all documents are in a supported format (e.g., PDF, DOCX) for compatibility.
              </p>

              <h2 className="fw-bold">Support</h2>
              <p>
                For any issues or further assistance, please contact the IT support team at <a href="mailto:support@cst.edu" target="_blank" rel="noreferrer">support@cst.edu</a>.
              </p>

              <hr className="mb-5 mt-5" />
              <h2 className="mb-0 fw-bold">File Structure</h2>
              <p>
                Inside the project directory, you'll find the following directories and files. Both compiled and source files are included.
              </p>

              <code>
                <pre>
                  {`
project-directory/
├── .eslintrc.json
├── .gitignore
├── jsconfig.json
├── next.config.js
├── package.json
├── package-lock.json
├── README.md
├── components/
├── data/
├── hooks/
├── layouts/
├── app/
├── public/
│   ├── fonts
│   ├── images
│   └── favicon.ico
├── routes/
├── styles/
├── sub-components/
└── widgets/
`}
                </pre>
              </code>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Documentation;
