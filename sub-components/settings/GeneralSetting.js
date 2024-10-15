// import node module libraries
import { Col, Row, Form, Card, Button, Image } from 'react-bootstrap';

// import widget as custom components
import { FormSelect, DropFiles } from 'widgets';

// import hooks
import useMounted from 'hooks/useMounted';

const GeneralSetting = () => {
  const hasMounted = useMounted();
  const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' }
  ];

  return (
    <Row className="mb-8">
      <Col xl={3} lg={4} md={12} xs={12}>
        <div className="mb-4 mb-lg-0">
          <h4 className="mb-1">General Setting</h4>
          <p className="mb-0 fs-5 text-muted">Profile configuration settings</p>
        </div>
      </Col>
      <Col xl={9} lg={8} md={12} xs={12}>
        <Card>
          {/* card body */}
          <Card.Body>
            <div className=" mb-6">
              <h4 className="mb-1">General Settings</h4>
            </div>
            <Row className="align-items-center mb-8">
              <Col md={3} className="mb-3 mb-md-0">
                <h5 className="mb-0">Avatar</h5>
              </Col>
              <Col md={9}>
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <Image src="/images/avatar/avatar-5.jpg" className="rounded-circle avatar avatar-lg" alt="" />
                  </div>
                  <div>
                    <Button variant="outline-white" className="me-2" type="submit">Change</Button>
                    <Button variant="outline-white" type="submit">Remove</Button>
                  </div>
                </div>
              </Col>
            </Row>
            {/* Cover Photo */}
            <Row className="mb-8">
              <Col md={3} className="mb-3 mb-md-0">
                <h5 className="mb-0">Cover Photo</h5>
              </Col>
              <Col md={9}>
                <div>
                  {hasMounted && <Form action="#" className="dropzone mb-3 py-10 border-dashed">
                    <DropFiles />
                  </Form>}
                  <Button variant="outline-white" type="submit">Change</Button>
                </div>
              </Col>
            </Row>
            {/* Basic Information */}
            <div className="mb-6">
              <h4 className="mb-1">Basic Information</h4>
            </div>
            {hasMounted && 
            <Form>
              {/* Name */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="fullName">Full Name</Form.Label>
                <Col sm={4} className="mb-3 mb-lg-0">
                  <Form.Control type="text" placeholder="First Name" id="fullName" required />
                </Col>
                <Col sm={4}>
                  <Form.Control type="text" placeholder="Last Name" id="lastName" required />
                </Col>
              </Row>

              {/* Email */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="email">Email</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="email" placeholder="Email" id="email" required />
                </Col>
              </Row>

              {/* Phone */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="phone">Phone <span className="text-muted">(Optional)</span></Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="text" placeholder="Enter Phone" id="phone" />
                </Col>
              </Row>

              {/* Gender */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="gender">Gender</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control as={FormSelect} placeholder="Select Gender" id="gender" options={genderOptions} />
                </Col>
              </Row>

              {/* Date of Birth */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="dob">Date of Birth</Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="date" id="dob" required />
                </Col>
              </Row>

              {/* Job Title */}
              <Row className="mb-3">
                <Form.Label className="col-sm-4" htmlFor="Role">Role <span className="text-muted">(Optional)</span></Form.Label>
                <Col md={8} xs={12}>
                  <Form.Control type="text" placeholder="Enter Role" id="jobTitle" />
                </Col>
              </Row>

              {/* Save Changes Button */}
              <Row className="align-items-center">
                <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
                  <Button variant="primary" type="submit">
                    Save Changes
                  </Button>
                </Col>
              </Row>
            </Form>
            }
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default GeneralSetting;
