import React from 'react'
import { Row, Col, Button, Card, CardBody, Input, Table } from 'reactstrap'
import Available from './Icons/Available'
import Unavailable from './Icons/Unavailable'

const Search: React.FC<any> = ({ header, doBook, data }) => {
    const tableData = data
    return (
        <Card>
            <CardBody>
                <Table responsive>
                    <thead>
                        <tr className='text-uppercase'>
                            <th>care provider</th>
                            <th>Location</th>
                            <th>Zip Code</th>
                            <th>Status</th>
                            <th>Date {"&"} Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data: any, i: any) => (
                            <tr key={i}>
                                <td>{data.careProvider}</td>
                                <td>{data.location}</td>
                                <td>{data.zip}</td>
                                <td className={`${data.status === 'Available' ? 'text-alertGreen' : 'text-alertRed'}`}>
                                    {data.status === 'Available' ? <Available /> : <Unavailable />}
                                    &nbsp;
                                    {data.status}
                                </td>
                                <td>{data.date}-{data.time}</td>
                                <td className='cta-book' onClick={doBook}>Rebook Now {"->"}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <br />
                <Row>
                    <Col md='4'>
                        <span className='small'>Showing</span>
                        &nbsp;
                        <input type="number" min="1" max="25" value="25" className='page-number' />
                    </Col>
                    <Col md='5'></Col>
                    <Col>
                        <Button color='dark' outline className=''>Previous</Button>
                        &nbsp; &nbsp;
                        <span className='small'>1</span>
                        &nbsp; &nbsp;
                        <span className='small'>2</span>
                        &nbsp; &nbsp;
                        <span className='small'>3</span>
                        &nbsp; &nbsp;
                        <Button color='dark' outline className=''>Next</Button>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default Search