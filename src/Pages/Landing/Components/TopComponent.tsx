import React from 'react'
import { Button } from 'reactstrap'
import TopIcon from '../Icons/TopIcon'

const TopComponent = () => {
  return (
    <div className='dashboard-top d-flex align-items-center px-5'>
      <div>
        <h4>Schedule Your Availability</h4>
        <p className="small mt-1 mb-5 text-muted">Get in touch with your patient quickly</p>
        <Button color='amber' size='sm' className='text-white px-4 py-2'>Schedule an Availability</Button>
      </div>
      <div className="ml-auto">
        <TopIcon />
      </div>
    </div>
  )
}

export default TopComponent