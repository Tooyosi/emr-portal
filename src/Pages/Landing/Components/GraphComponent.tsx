import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: [
      '',
      '',
      ''
    ],
    datasets: [{
      label: '',
      data: [16, 22, 62],
      backgroundColor: [
        'rgba(255, 83, 103, 1)',
        'rgba(246, 145, 28, 1)',
        'rgba(22, 158, 0, 1)'
      ],
      hoverOffset: 4
    }]
  };
const GraphComponent = () => {
  return (
    <Card>
        <CardBody>
            <h5>Weekly usage Chart</h5>
            <h6>1,234 <small className="text-muted">Users</small></h6>

            <hr />

            <Doughnut data={data} />

        </CardBody>
    </Card>
  )
}

export default GraphComponent