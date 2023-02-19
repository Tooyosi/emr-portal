import Transactions from 'Pages/Landing/Components/Transactions'
import React, { useMemo, useState } from 'react'
import { Button, Col, Container, Input, Row, Card, CardBody } from 'reactstrap'
import MyCompAppointments from './MyCompAppointments'
import { Link } from "react-router-dom"

const allTableData = [{
    careProvider: "Courtney Henry",
    date: "02 Jun, 2022",
    time: "17:00 - 17:30",
    diagnosis: "Upper Abdomen General – Test Code 2705",
    status: "Scheduled",
    completed: false
}, {
    careProvider: "Arlene McCoy",
    date: "02 Jun, 2022",
    time: "11:45 - 15:30",
    diagnosis: "Upper Abdomen General – Test Code 2705",
    status: "Scheduled",
    completed: false
}, {
    careProvider: "Jacob Jones",
    date: "02 Jun, 2022",
    time: "10:00 - 10:30",
    diagnosis: "Upper Abdomen General – Test Code 2705",
    status: "Scheduled",
    completed: false
}, {
    careProvider: "Leslie Alexander",
    date: "02 Jun, 2022",
    time: "08:30 - 09:30",
    diagnosis: "Upper Abdomen General – Test Code 2705",
    status: "Scheduled",
    completed: false
}, {
    careProvider: "Jane Cooper",
    date: "02 Jun, 2022",
    time: "07:00 - 07:20",
    diagnosis: "Upper Abdomen General – Test Code 2705",
    status: "Visited",
    completed: true
}]

const SearchInput: React.FC<any> = (props) => {

    return (<div className="nav-search d-flex">
        <img src={require("../Doctor/Icons/search-icon.svg").default} alt="" />
        <input type="text" {...props} />
    </div>)
}


const Appointments = () => {
    const [state, setState] = useState<any>({
        showOnly: '',
        search: ''
    })

    const [allOrComplete, setAllOrComplete] = useState<any>('all')

    const toggleComplete = () => {
        allOrComplete === 'all' ? setAllOrComplete('complete') : setAllOrComplete(allOrComplete);
    }
    const toggleAll = () => {
        allOrComplete === 'complete' ? setAllOrComplete('all') : setAllOrComplete(allOrComplete);
    }

    const tableData = useMemo(() => {
        if (allOrComplete === 'complete') {
            return allTableData.filter((data: any) => data.completed === true)
        } else {
            return allTableData;
        }
    }, [allOrComplete])

    const filterData = useMemo(() => {
        if (state.showOnly === "") {
            return tableData
        } else {
            return tableData.filter((data: any) => data.status.toLocaleLowerCase() === state.showOnly)
        }
    }, [state.showOnly, tableData])

    const searchData = useMemo(() => {
        if (state.search === "") {
            return filterData
        } else {
            return filterData.filter((data: any) => data.careProvider.includes(state.search))
        }
    }, [state.search, filterData])

    const doFilter = (data: any) => {
        setState((prev: any) => (
            {
                ...prev,
                showOnly: data
            }
        ))
    }

    const doSearch = (data: any) => {
        setState((prev: any) => (
            {
                ...prev,
                search: data
            }
        ))
    }


    const handleChange = (e: any) => {
        console.log(e.target.value)
        doSearch(e.target.value)
    }

    return (
        <Container>
            <Row className='book-appointment py-4 mx-0 align-bottom w-100'>
                <Col>
                    <h4 className='text-white my-0'>Book Quick Care Provider Appointments Easily</h4>
                    <p className='text-white mb-3 mt-1'>With EMR, you can book, search, reschedule appointments with care providers anytime.</p>
                    <Link to="/doctor">
                        <Button color='amber' className='text-white mt-2'>+ Book Appointment </Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <MyCompAppointments allOrComplete={allOrComplete} toggleAll={toggleAll} toggleComplete={toggleComplete} />
            </Row>
            <Row>
                <Card className='w-100 mx-3 mt-3'>
                    <CardBody>
                        <Row className="my-2" >
                            <Col md="6">
                                <h5 className='text-amber'>
                                    {allOrComplete === 'all' ? 'Upcoming Appointments' : 'Completed Appointments'}
                                </h5>

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
                            <Col>
                                <SearchInput name="searchCareProvider"
                                    //value={state.stateFilter}
                                    onChange={handleChange}
                                    placeholder="Search care provider" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mt-1">
                                <Transactions data={searchData} />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Row>
        </Container>
    )
}

export default Appointments