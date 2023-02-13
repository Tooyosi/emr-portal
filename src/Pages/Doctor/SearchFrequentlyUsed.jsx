import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const SearchFrequentlyUsed = ({ searchOrFrequentlyUsed, toggleSearch, toggleFreq}) => {
  return (
    <Container className=' border-bottom px-2 py-2 mt-2' fluid>
      <Row>
        <Col md="3">
          <h6
            onClick={toggleSearch}
            className='mx-0 py-3'
          ><span className={`mx-0 py-3 ${searchOrFrequentlyUsed === 'search' ? 'active-allOrCompleted' : ''}`}>
            Search For Care Provider
          </span>

          </h6>
        </Col>
        <Col md="4">
          <h6
            onClick={toggleFreq}
            className='mx-0 py-3'>
            <span className={`mx-0 py-3 ${searchOrFrequentlyUsed === 'frequentlyUsed' ? 'active-allOrCompleted' : ''}`}>
              Frequently Used Care Provider
            </span>
          </h6>
        </Col>
      </Row>
    </Container>
  )
}

export default SearchFrequentlyUsed