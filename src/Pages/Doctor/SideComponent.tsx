import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import { DayPicker, DateRange } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import moment from 'moment';
import CustomModal from 'components/commons/CustomModal';
import CalenderIcon from './Icons/CalenderIcon';

const SideComponent: React.FC<any> = ({ open, toggle }) => {

    const [range, setRange] = useState<DateRange | any>({});
    const [activeTime, setActiveTime] = useState("All Day");
    const [openModal, setOpenModal] = useState(false)
    const toggleModal = () => setOpenModal(!openModal)
    return (
        <div className={`sideModal ${open && "show"}`}>
            <div className="sideModalAside pt-5 px-4">
                <Container>
                    <Row>
                        <Col md="12">
                            <h4>Set Availability</h4>
                            <p className='small'>Select your preferred date on the calender below to book a session with your care provider</p>

                            <hr />

                            <DayPicker
                                mode="range"
                                selected={range}
                                onSelect={setRange}
                                disabled={(date: Date) => {
                                    let now = moment().subtract(1, "day");
                                    return moment(date) < now;
                                }}
                            />
                        </Col>
                        <Col md="12">
                            <p className="small mt-5 mb-1">Available Time</p>
                            <Row>
                                {["All Day", "12:00 pm - 4:00 pm", "08:00 am - 12:00 pm", "4:00 pm - 8:00 pm"].map((time) => (
                                    <Col sm="6">
                                        <div className={`time-div ${time === activeTime && "active"} my-2 text-center`} onClick={() => setActiveTime(time)}>
                                            {time}
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        <Col className='mt-2'>
                            <div className="d-flex">
                                <Button color='dark' outline onClick={toggle} className=' px-3'>Cancel</Button>
                                <Button color='amber' onClick={toggleModal} className='ml-auto px-3 text-white'>Continue</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <CustomModal
                    isOpen={openModal}
                    toggle={toggleModal}
                    classProp="modal-sm"
                >
                    <div className='text-center'>
                        <CalenderIcon />
                        <div>
                            <h4>Book Session</h4>
                            <p className="small">You are about to book a session with this care provider</p>
                            <Button color='dark' onClick={() => {
                                toggleModal()
                                toggle()
                            }} className='text-white'>Book Session</Button>
                            <br />
                            <Button color='dark' outline onClick={toggleModal} className='mt-2 px-3'>Cancel</Button>
                        </div>
                    </div>
                </CustomModal>
            </div>
        </div>
    )
}

export default SideComponent