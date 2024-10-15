'use client'
// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import {
  AboutMe,
  ProfileHeader,
} from 'sub-components'

const Profile = () => {
  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Overview"/>

      {/* Profile Header  */}
      <ProfileHeader />

      {/* content */}
      <div className="py-3">
        <Row>

          {/* About Me */}
          <AboutMe />

          
        </Row>
      </div>

    </Container>
  )
}

export default Profile