import React, { useState } from 'react'
import { Button, Col, Container, Row, Card, CardBody } from 'reactstrap'
import { DayPicker, DateRange } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import moment from 'moment';
import CustomModal from 'components/commons/CustomModal';
import CalenderIcon from './Icons/CalenderIcon';
import CancelSuccess from 'Pages/Appointments/Icons/CancelSuccess';

const SideComponent: React.FC<any> = ({ open, toggle }) => {


    const [selected, setSelected] = useState<DateRange | any>({});
    const [activeTime, setActiveTime] = useState("All Day");
    const [openModal, setOpenModal] = useState(false);
    const [dateOrTime, setDateOrTime] = useState('date');
    const toggleModal = () => setOpenModal(!openModal);
    const doContinue = () => dateOrTime === 'date' ? setDateOrTime('time') : toggleModal()
    const doCancel = () => {
        toggle();
        setTimeout(() => setDateOrTime('date'), 1000);
    }

    return (
        <div className={`sideModal ${open && "show"}`}>
            <div className="sideModalAside pt-5 px-4">

                <Container className='d-flex align-items-center fluid'>
                    <Row className='w-100'>
                        <Col lg="5" md="8" className='m-auto'>
                            <Row className='align-items-center mb-3'>
                                <Col sm="1" className='backarrow'>
                                    {/* <Button style={{backgroundImage:"url('./images/LeftArrow.svg')", backgroundSize:"cover", width:"40px", height:"40px"}}></Button> */}
                                    <img loading='lazy' alt="Back"
                                        // style={{ width: "500%", height: "500%"}}
                                        onClick={ () => dateOrTime === 'date' ? doCancel() : setDateOrTime('date') }
                                        src={require(`./images/LeftArrow.svg`).default}
                                    />
                                </Col>
                                <Col sm="2">
                                    Back
                                </Col>
                            </Row>
                            <Card>
                                <CardBody className='p-4'>
                                    <Row>

                                        {dateOrTime === 'date' ?
                                            <Col sm="12">
                                                <h4 className='font-weight-bold'>Set Date Availability</h4>
                                                <p className='small'>Select your preferred date on the calender below to book a session with your care provider</p>

                                                <hr />

                                                <DayPicker
                                                    mode="range"
                                                    selected={selected}
                                                    onSelect={setSelected}
                                                    disabled={(date: Date) => {
                                                        let now = moment().subtract(1, "day");
                                                        return moment(date) < now;
                                                    }}
                                                />
                                            </Col> :
                                            <Col sm="12">
                                                <h4 className='font-weight-bold'>Set Time Availability</h4>
                                                <Row>
                                                    {["All Day", "12:00 pm - 1:00 pm", "1:00 pm - 2:00 pm", "3:00 pm - 4:00 pm", "4:00 pm - 5:00 pm"].map((time) => (
                                                        <Col sm="12">
                                                            <div className={`time-div ${time === activeTime && "active"} my-2 text-center`} onClick={() => setActiveTime(time)}>
                                                                {time}
                                                            </div>
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </Col>}
                                    </Row>
                                    <Row>
                                        <Col className='mt-2 mx-3' sm="12">
                                            <div className="d-flex">
                                                <Button color='dark' outline onClick={ () => dateOrTime === 'date' ? doCancel() : setDateOrTime('date') } className=' px-3'>Cancel</Button>
                                                <Button color='amber' onClick={doContinue} className='ml-auto px-3 mr-3 text-white'>{dateOrTime === 'date' ? 'Continue' : 'Book Session '}</Button>
                                            </div>
                                        </Col>
                                    </Row>


                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>


                <CustomModal
                    isOpen={openModal}
                    toggle={toggleModal}
                    classProp="modal-sm"
                >
                    <div className='text-center'>
                        <div>
                            <CancelSuccess />
                            <h4 className='mt-4'>Reschedule Successful</h4>
                            <p className="small">You have successfully rescheduled a booking with a care provider.</p>
                            <Button color='amber px-2' onClick={() => {
                                toggleModal();
                                doCancel();
                            }}
                                className='text-white'> Return To Appointments
                            </Button>
                            <br />
                            <Button color='dark' outline onClick={toggleModal} className='my-3 px-5'>Cancel</Button>
                        </div>
                    </div>
                </CustomModal>
            </div>
        </div>
    )
}

export default SideComponent