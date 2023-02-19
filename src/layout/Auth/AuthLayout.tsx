import Logo from 'components/Logo';
import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import "./_authLayout.scss";
import LoginImage from './svgs/LoginImage';

const AuthLayout: React.FC<any> = ({ children }) => {
    return (
        <div id="auth">
            <Container className='d-flex align-items-center' fluid>
                <Row className='w-100 vh-100 boxed'>
                    <Col lg="5" sm="6" className='m-auto'>
                        <Card>
                            <CardBody className='p-4'>
                                <Logo />
                                {children}
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm="6" className='crop'>
                        <img alt="EMR PORTAL"
                            //className="img-fluid"
                            loading='lazy'
                            style={{ objectFit: 'contain'}}
                            max-width="10%"
                            src={require(`./images/login.svg`).default}
                        />
                        <LoginImage />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AuthLayout;