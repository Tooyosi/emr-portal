import React, { useMemo, useState } from 'react'
import { Button, Card, CardBody, Col, Container, Row } from 'reactstrap'
import Search from './Search'
import SideComponent from './SideComponent'

const SearchInput: React.FC<any> = (props) => {

    return (<div className="nav-search d-flex">
        <img src={require("./Icons/search-icon.svg").default} alt="" />
        <input type="text" {...props} />
    </div>)
}
const tableData = [{
    careProvider: "Courtney Henry",
    location: "Seattle, USA",
    zip: "20030",
    date: "02 Jun, 2022",
    time: "17:00 - 17:30",

    status: "Scheduled"
}, {
    careProvider: "Arlene McCoy",
    location: "California, USA",
    zip: '35004',
    date: "02 Jun, 2022",
    time: "11:45 - 15:30",

    status: "Scheduled"
}, {
    careProvider: "Jacob Jones",
    location: "Montgomery, USA",
    zip: "40204",
    date: "02 Jun, 2022",
    time: "10:00 - 10:30",

    status: "Scheduled"
}, {
    careProvider: "Leslie Alexander",
    location: "Juneau, USA",
    zip: "21093",
    date: "02 Jun, 2022",
    time: "08:30 - 09:30",

    status: "Scheduled"
}, {
    careProvider: "Jane Cooper",
    location: "Phoenix, USA",
    zip: "04492",
    date: "02 Jun, 2022",
    time: "07:00 - 07:20",

    status: "Visited"
}]

const Doctor = () => {
    const [state, setState] = useState({
        stateFilter: "",
        cityFilter: "",
        zipFilter: ""
    })

    const [openModal, setOpenModal] = useState(false)
    const toggleModal = ()=> setOpenModal(!openModal);

    const handleChange = (e: any) => {
        setState((prev) => ({
            ...prev,
            [e.target.name]: [e.target.value]
        }))
    }
    const [dataToSend, setDataToSend] = useState(tableData)

    const doSearch = (e: any) => {
        e.preventDefault()
        const newData = tableData.filter((data) => {
            return data.location.includes(state.stateFilter) && data.location.includes(state.cityFilter) && data.zip.includes(state.zipFilter)
        })
        console.log({newData})
        setDataToSend(newData)
    }

    return (
        <Container>
            <Row>
                <Col sm="12">
                    <Card className='mt-4'>
                        <CardBody>
                            <h4 className='mb-3'>Search By Location</h4>
                            <form onSubmit={doSearch}>
                                <Row>
                                    <Col md="3">
                                        <SearchInput name="stateFilter" value={state.stateFilter} onChange={handleChange} placeholder="Search by State" />
                                    </Col>
                                    <Col md="3">
                                        <SearchInput name="cityFilter" value={state.cityFilter} onChange={handleChange} placeholder="Search by city" />
                                    </Col>
                                    <Col md="3">
                                        <SearchInput name="zipFilter" value={state.zipFilter} onChange={handleChange} placeholder="Search by zip code" />
                                    </Col>

                                    <Col md="3">
                                        <Button color='amber' type='submit' className='text-white px-5'>Search</Button>
                                    </Col>
                                </Row>
                            </form>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" className='mt-5'>
                    <h5>Search results</h5>
                    <Search data={dataToSend} doBook={toggleModal} doctor />
                </Col>
            </Row>
            <SideComponent open={openModal} toggle={toggleModal} />
        </Container>
    )
}

export default Doctor