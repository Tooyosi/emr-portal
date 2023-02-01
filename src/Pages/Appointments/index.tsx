import Transactions from 'Pages/Landing/Components/Transactions'
import React, { useMemo, useState } from 'react'
import { Button, Col, Container, Input, Row } from 'reactstrap'

const tableData = [{
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

const Appointments = () => {
    const [state, setState] = useState<any>({
        showOnly: ''
    })

    const filterData = useMemo(() => {
        if (state.showOnly === "") {
            return tableData
        } else {
            return tableData.filter((data) => data.status.toLocaleLowerCase() === state.showOnly)
        }
    }, [state.showOnly])

    const doFilter = (data: any) => {
        setState((prev: any) => (
            {
                ...prev,
                showOnly: data
            }
        ))
    }

    return (
        <Container>
            <Row className='book-appointment py-5 align-bottom'>
                <Button color='amber' className='text-white ml-2'>+ New Appointment</Button>
            </Row>
            <Row className="mt-5" >
                <Col md="6">
                    <h4 className='mb-3'>Appointments</h4>

                </Col>
                <Col md="6" className='text-left text-md-right'>
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <Input checked={state.showOnly === "visited"} onClick={() => doFilter("visited")} type='checkbox' color='amber' />
                            <label htmlFor="">Show Only Visited</label>
                        </div>
                        <div>
                            <Input checked={state.showOnly === "scheduled"} onClick={() => doFilter("scheduled")} type='checkbox' color='amber' />
                            <label htmlFor="">Show Only Scheduled</label>
                        </div>
                        {/* <Button color='amber' className='text-white'>+ New Appointment</Button> */}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="mt-5">
                    <Transactions data={filterData} />
                </Col>
            </Row>
        </Container>
    )
}

export default Appointments