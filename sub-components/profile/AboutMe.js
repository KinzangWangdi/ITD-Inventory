'use client';

// Import necessary libraries
import { Col, Row, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

// Profile component for both user and admin
const Profile = ({ user }) => {
  const [role, setRole] = useState('');
  const [profileData, setProfileData] = useState({
    dob: user?.dob || '01.10.1997',
    email: user?.email || 'user@example.com',
    phone: user?.phone || '+1234567890',
    location: user?.location || 'Not Available',
    gender: user?.gender || 'Not Specified', // Add gender field
    bio: user?.bio || 'This section can include a short bio or introduction.',
  });

  // Simulate fetching the user role (can be replaced with actual API or auth context)
  useEffect(() => {
    setRole(user?.role || 'User'); // Default to 'User' if no role is provided
  }, [user]);

  return (
    <Row className="justify-content-center mt-5">
      <Col xl={8} lg={10} md={12}>
        <Card className="shadow-sm">
          <Card.Body>
            {/* Profile header with role */}
            <div className="mb-4">
              <h4 className="mb-1">{role} Profile</h4>
            </div>

            {/* Profile Bio */}
            <div className="mb-4">
              <h6 className="text-uppercase fw-bold text-muted">Bio</h6>
              <p>{profileData.bio}</p>
            </div>

            {/* Profile Details */}
            <Row>
              <Col xs={12} md={6} className="mb-4">
                <h6 className="text-uppercase fw-bold text-muted">Gender</h6>
                <p>{profileData.gender}</p>
              </Col>
              <Col xs={12} md={6} className="mb-4">
                <h6 className="text-uppercase fw-bold text-muted">Role</h6>
                <p>{role}</p>
              </Col>
              <Col xs={12} md={6} className="mb-4">
                <h6 className="text-uppercase fw-bold text-muted">Date of Birth</h6>
                <p>{profileData.dob}</p>
              </Col>
              <Col xs={12} md={6} className="mb-4">
                <h6 className="text-uppercase fw-bold text-muted">Email</h6>
                <p>{profileData.email}</p>
              </Col>
              <Col xs={12} md={6} className="mb-4">
                <h6 className="text-uppercase fw-bold text-muted">Phone</h6>
                <p>{profileData.phone}</p>
              </Col>
              <Col xs={12} md={6} className="mb-4">
                <h6 className="text-uppercase fw-bold text-muted">Location</h6>
                <p>{profileData.location}</p>
              </Col>
            </Row>

          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Profile;
