import React from 'react'
import { Card, CardBody, Input, Table } from 'reactstrap'

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
                                <td>{data.status}</td>
                                <td>{data.date}-{data.time}</td>
                                <td className='cta-book' onClick={doBook}>Book Now {"->"}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    )
}

export default Search