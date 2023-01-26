import React from 'react'
import { Card, CardBody, Input, Table, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import CaretIcon from '../Icons/CaretIcon'

const Transactions: React.FC<any> = ({ header, partialiew, data }) => {
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
        <Card>
            <CardBody>
                <h6 className='mb-4'>{header}</h6>
                <Table responsive>
                    <thead>
                        <tr className='text-uppercase'>
                            <td>
                                <Input type='checkbox' />
                            </td>
                            {!partialiew && <th>Time</th>}
                            <th>care provider</th>
                            <th>Diagnosis</th>
                            <th>Date</th>
                            {!partialiew && <th>Status</th>}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data: any, i: any) => (
                            <tr key={i}>
                                <td>
                                    <Input type='checkbox' />
                                </td>
                                {!partialiew && <td>{data.time}</td>}
                                <td>{data.careProvider}</td>
                                <td>{data.diagnosis}</td>
                                <td>{data.date}</td>
                                {!partialiew && <td>{data.status}</td>}
                                <td>
                                    <UncontrolledDropdown>
                                        <DropdownToggle color='transparent' size='md' className='caret mt-0'>
                                                <CaretIcon />
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>Reschedule Appointment</DropdownItem>
                                            <DropdownItem href={`/appointment/${i}`}>View Details</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    )
}

export default Transactions