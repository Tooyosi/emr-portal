import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const SearchFrequentlyUsed = () => {
  return (
    <Container>
      <Row>
        <Col md="3">
          <h6 className='mx-0'>Search For Care Provider</h6>
        </Col>
        <Col md="4">
          <h6 className="mx-0">Frequently Used Care Provider</h6>
        </Col>
      </Row>
    </Container>
  )
}

export default SearchFrequentlyUsed