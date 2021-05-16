import { ResponsiveLine } from '@nivo/line'
import React from 'react'
import PropTypes from 'prop-types'

const LineChart = ({
  data
}) => (
  <ResponsiveLine
    data={data}
    margin={{
      top: 50, right: 50, bottom: 50, left: 60
    }}
    xScale={{ type: 'point' }}
    yScale={{
      type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: 'bottom',
      tickSize: 10,
      tickPadding: 5,
      tickRotation: 0
    }}
    axisLeft={{
      orient: 'left',
      tickSize: 10,
      tickPadding: 5,
      tickRotation: 0
    }}
    enableGridX={false}
    colors="#943FB9"
    enablePoints={false}
    enableArea
    enableCrosshair
    crosshairType="bottom"
    useMesh
  />
)

LineChart.defaultProps = {
  data: [{
    id: 'chartData',
    color: 'hsl(299, 70%, 50%)',
    data: [
      {
        x: 'Hoje',
        y: 1
      },
      {
        x: '7 dias',
        y: 10
      },
      {
        x: '15 dias',
        y: 25
      },
      {
        x: '30 dias',
        y: 30
      }
    ]
  }]
}

LineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    color: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.string,
      y: PropTypes.number
    }))
  }))
}

export default LineChart
