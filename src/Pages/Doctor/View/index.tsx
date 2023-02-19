import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import MessagingIcon from './Icons/Messaging'
import ProfileProfileIcon from './Icons/Profile'

const ViewDetails = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <Row>
                <Col>
                    <div className="d-flex align-items-center mt-4">
                        <div className="back" onClick={()=> navigate(-1)}>
                            &#60;
                        </div>
                        <p className='mb-0 ll-3'>Back</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className='mt-4'>
                        <CardBody>
                            <div className="d-flex align-items-center">
                                <ProfileProfileIcon />
                                <div className='ml-4'>
                                    <h5 className='text-amber'>Care Provider’s Name</h5>
                                    <p className='small mb-0'><span className="text-muted">Last Login:</span> <b>Aug 24, 2022, 12:00:00 AM</b></p>
                                </div>
                            </div>
                        </CardBody>
                        <hr />
                        <CardBody>
                            <div className="d-flex align-items-center">
                                {[
                                    {
                                        header: "Patient ID",
                                        content: "125620900"
                                    },
                                    {
                                        header: "Total Appointments",
                                        content: "2,838"
                                    },
                                    {
                                        header: "Phone Number",
                                        content: "+44 000 00 0000"
                                    },
                                    {
                                        header: "Email",
                                        content: "darmieey@gmail.com"
                                    }
                                ].map((data, i) => (
                                    <div key={i} className="mr-5">
                                        <p className="small text-muted mb-0">{data.header}</p>
                                        <p className="small mb-0">{data.content}</p>
                                    </div>
                                ))}
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                    <h6>Appointment History</h6>
                    <Card>
                        <CardBody className='vh-50'>
                            <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "300px" }}>
                                <div className='text-center'>
                                    <MessagingIcon />
                                    <h5>No History Yet</h5>
                                    <p className="small text-muted">
                                        Your appointment history will <br /> be listed here
                                    </p>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ViewDetails