import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import GraphComponent from './Components/GraphComponent'
import Metrics from './Components/Metrics'
import TopComponent from './Components/TopComponent'
import Transactions from './Components/Transactions'


export const Landing: React.FC<any> = () => {

    return (
        <div id="dashboard" className='mt-5'>
            <Container>
                <Row>
                    <Col sm="12">
                        <TopComponent />
                    </Col>
                </Row>
                <Row className='my-4'>
                    <Metrics />
                </Row>
                <Row>
                    <Col lg="8">
                        <Transactions partialiew header="Recent Appointments"/>
                    </Col>
                    <Col lg="4">
                        <GraphComponent />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
