import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Completd from '../Icons/Completd'
import Scheduled from '../Icons/Scheduled'
import Total from '../Icons/Total'

const metricsData = [{
    number: "89,935",
    info: "Total Patients",
    icon: Total
}, {
    number: "89,935",
    info: "Scheduled Patients",
    icon: Scheduled
}, {
    number: "89,935",
    info: "Completed Schedules",
    icon: Completd
}]
const Metrics = () => {
    return (
        <>
            {metricsData.map(({ number, info, icon: Icon }) => (
                <Col lg="4" md="6" key={number}>
                    <Card>
                        <CardBody>
                            <div className="d-flex align-items-center">
                                <div>
                                    <h3>{number}</h3>
                                    <p className="small text-muted">
                                        {info}
                                    </p>
                                </div>
                                <div className="ml-auto">
                                    <Icon />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}

export default Metrics