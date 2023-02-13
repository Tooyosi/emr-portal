import React, { useMemo, useState } from 'react'
import { Button, Card, CardBody, Col, Container, Row } from 'reactstrap'
import Search from './Search'
import SideComponent from './SideComponent'
import SearchFrequentlyUsed from './SearchFrequentlyUsed'

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

    status: "Available"
}, {
    careProvider: "Arlene McCoy",
    location: "California, USA",
    zip: '35004',
    date: "02 Jun, 2022",
    time: "11:45 - 15:30",

    status: "Available"
}, {
    careProvider: "Jacob Jones",
    location: "Montgomery, USA",
    zip: "40204",
    date: "02 Jun, 2022",
    time: "10:00 - 10:30",

    status: "Available"
}, {
    careProvider: "Leslie Alexander",
    location: "Juneau, USA",
    zip: "21093",
    date: "02 Jun, 2022",
    time: "08:30 - 09:30",

    status: "Unavailable"
}, {
    careProvider: "Jane Cooper",
    location: "Phoenix, USA",
    zip: "04492",
    date: "02 Jun, 2022",
    time: "07:00 - 07:20",

    status: "Unavailable"
}]

const Doctor = () => {
    const [state, setState] = useState({
        stateFilter: "",
        cityFilter: "",
        zipFilter: ""
    })

    const [openModal, setOpenModal] = useState(false)
    const toggleModal = () => setOpenModal(!openModal);

    const [careProvider, setCareProvider] = useState(false)
    const toggleCareProvider = () => setCareProvider(!careProvider)


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
        console.log({ newData })
        setDataToSend(newData)
    }

    const [searchOrFrequentlyUsed, setsearchOrFrequentlyUsed] = useState<any>('search')

    const toggleFreq = () => {
        searchOrFrequentlyUsed === 'search' ? setsearchOrFrequentlyUsed('frequentlyUsed') : setsearchOrFrequentlyUsed(searchOrFrequentlyUsed);
    }
    const toggleSearch = () => {
        searchOrFrequentlyUsed === 'frequentlyUsed' ? setsearchOrFrequentlyUsed('search') : setsearchOrFrequentlyUsed(searchOrFrequentlyUsed);
    }

    return (
        <Container fluid>
            <Row>
                <Col sm="12">
                    <SearchFrequentlyUsed searchOrFrequentlyUsed={searchOrFrequentlyUsed} toggleSearch={toggleSearch} toggleFreq={toggleFreq} />
                    {searchOrFrequentlyUsed === 'search' &&
                        <Card className='mt-2'>
                            <CardBody>
                                {/* <h4 className='mb-3'>Search By Location</h4> */}
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
                        </Card>}
                </Col>
            </Row>

            {searchOrFrequentlyUsed === 'search' &&
            <Row  className='mh-100 mt-3'>
                <Col>
                    <Card>
                        <CardBody className='justify-content-center text-center py-5 h-100'>
                            <br /><br /><br />
                            <img loading='lazy' alt="Back" className='img-fluid my-3'
                                // style={{ width: "500%", height: "500%"}}
                                src={require(`./images/EmptySearch.svg`).default}
                            />
                            <p>Your search result will display here</p>
                            <br /><br /><br />
                        </CardBody>
                    </Card>
                </Col>
            </Row>}

            {searchOrFrequentlyUsed === 'frequentlyUsed' &&
                <Row>
                    <Col sm="12" className='mt-2'>
                        <h5>Frequently Used</h5>
                        <Search data={dataToSend} doBook={toggleModal} doctor />
                    </Col>
                </Row>}
            <SideComponent open={openModal} toggle={toggleModal} />
        </Container>
    )
}

export default Doctor