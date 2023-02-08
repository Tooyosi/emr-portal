import Logo from 'components/Logo';
import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import "./_authLayout.scss";

const AuthLayout: React.FC<any> = ({ children }) => {
    return (
        <div id="auth">
            <Container className='d-flex align-items-center' fluid>
                <Row className='w-100'>
                    <Col lg="5" sm="6" className='m-auto'>
                        <Card>
                            <CardBody className='p-4'>
                                <Logo />
                                {children}
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <img alt="Back"
                            // className="img-fluid"
                            loading='lazy'
                            style={{ overflow: "clip", overscrollBehavior: "none" }}
                            max-width="10%"
                            src={require(`./images/login.svg`).default}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AuthLayout;