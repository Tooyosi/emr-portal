import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const MyCompAppointments = ({ allOrComplete, toggleAll, toggleComplete }) => {
  return (
    <Container className='bg-white mt-4 mx-3' fluid>
      <Row>
        <Col md="3">
          <h5
            onClick={toggleAll}
            className="mx-0 py-3"
          > <span className={`mx-0 py-3 ${allOrComplete === 'all' ? 'active-allOrCompleted' : ''}`}>
             My Appointments
          </span></h5>
        </Col>
        <Col md="4">
          <h5
          className="mx-0 py-3"
            onClick={toggleComplete}
          ><span
            className={`mx-0 py-3 ${allOrComplete === 'complete' ? 'active-allOrCompleted' : ''}`}>
              Completed Appointments
          </span></h5>
        </Col>
      </Row>
    </Container>
  )
}

export default MyCompAppointments