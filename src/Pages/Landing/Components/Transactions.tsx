import React, { useState } from 'react'
import { Card, CardBody, Button, Input, Table, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import CaretIcon from '../Icons/CaretIcon'
import Available from 'Pages/Doctor/Icons/Available'
import DimAvailable from 'Pages/Doctor/Icons/DimAvailable'
import CustomModal from 'components/commons/CustomModal'
import CancelAlert from 'Pages/Appointments/Icons/CancelAlert'
import CancelSuccess from 'Pages/Appointments/Icons/CancelSuccess'
import SideComponent from 'Pages/Doctor/SideComponent'

const Transactions: React.FC<any> = ({ header, data }) => {

    const [openModal, setOpenModal] = useState(false)
    const toggleModal = () => {
        setOpenModal(!openModal)
        toggleCancel()
    }
    const [cancelled, setCancelled] = useState(false)
    const toggleCancel = () => openModal === true ? setCancelled(true) : setCancelled(false)

    const [openDatePicker, setOpenDatePicker] = useState(false)
    const toggleDatePicker = () => setOpenDatePicker(!openDatePicker)

    const tableData = data || [{
        careProvider: "Courtney Henry",
        date: "02 Jun, 2022",
        time: "17:00 - 17:30",
        diagnosis: "Upper Abdomen General – Test Code 2705",
        status: "Scheduled"
    }, {
        careProvider: "Arlene McCoy",
        date: "02 Jun, 2022",
        time: "11:45 - 15:30",
        diagnosis: "Upper Abdomen General – Test Code 2705",
        status: "Scheduled"
    }, {
        careProvider: "Jacob Jones",
        date: "02 Jun, 2022",
        time: "10:00 - 10:30",
        diagnosis: "Upper Abdomen General – Test Code 2705",
        status: "Scheduled"
    }, {
        careProvider: "Leslie Alexander",
        date: "02 Jun, 2022",
        time: "08:30 - 09:30",
        diagnosis: "Upper Abdomen General – Test Code 2705",
        status: "Scheduled"
    }, {
        careProvider: "Jane Cooper",
        date: "02 Jun, 2022",
        time: "07:00 - 07:20",
        diagnosis: "Upper Abdomen General – Test Code 2705",
        status: "Visited"
    }]
    return (
        // <Card>
        //     <CardBody>
        <div>
            <h6 className='mb-4'>{header}</h6>
            <Table responsive>
                <thead>
                    <tr className='text-uppercase'>
                        <td className='zero-opacity'>
                            <Input type='checkbox' />
                        </td>
                        <th>Time</th>
                        <th>care provider</th>
                        <th>Diagnosis</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((data: any, i: any) => (
                        <tr key={i}
                            className={`${data.completed === true ? 'completed' : ''}`}>
                            <td>
                                <Input type='checkbox' />
                            </td>
                            <td>{data.time}</td>
                            <td>{data.careProvider}</td>
                            <td>{data.diagnosis}</td>
                            <td>{data.date}</td>
                            <td>
                                {data.status === 'Scheduled' ? <Available /> : <DimAvailable />}
                                &nbsp;
                                {data.status}
                            </td>
                            <td>
                                <UncontrolledDropdown>
                                    <DropdownToggle color='transparent' size='md' className='caret mt-0'>
                                        <CaretIcon />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem onClick={toggleDatePicker}>Reschedule Appointment</DropdownItem>
                                        <DropdownItem href={`/appointment/${i}`}>View Details</DropdownItem>
                                        <DropdownItem onClick={toggleModal}>Cancel Appointment</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <CustomModal
                isOpen={openModal}
                toggle={toggleModal}
                classProp="modal-md"
            >
                <div className='text-center'>
                    <div>
                        { !cancelled ? <CancelAlert /> : <CancelSuccess />}
                        <h4 className='mt-4'>{ !cancelled ? 'Cancel Appointment' : 'Appointment Cancelled' }</h4>
                        {!cancelled ? <p className="small">You are about to cancel an appointment with a care provider.</p> : <></>}
                        <Button color='amber px-2' onClick={() => !cancelled ? toggleCancel() : toggleModal()}
                            className='text-white'> {`${!cancelled ? 'Cancel Appointment' : 'Return To Appointments '}`}
                        </Button>
                        <br />
                        <Button color='dark' outline onClick={toggleModal} className='my-3 px-5'>Cancel</Button>
                    </div>
                </div>
            </CustomModal>

            <SideComponent open={openDatePicker} toggle={toggleDatePicker} />
        </div>
        //     </CardBody>
        // </Card>
    )
}

export default Transactions