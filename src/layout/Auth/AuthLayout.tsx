import Logo from 'components/Logo';
import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import "./_authLayout.scss";

const AuthLayout: React.FC<any> = ({ children }) => {
    return (
        <div id="auth">
            <Container className='d-flex align-items-center'>
                <Row className='w-100'>
                    <Col lg="5" md="8" className='m-auto'>
                        <Card>
                            <CardBody className='p-4'>
                                <Logo />
                                {children}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AuthLayout;