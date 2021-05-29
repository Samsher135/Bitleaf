import React from 'react'
import { Chart } from 'react-charts'
 
function MyChart() {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [{ x: 5, y: 12 }, { x: 2, y: 3 }, { x: 9, y: 10 }]
      },
      {
        label: 'Series 2',
        data: [{ x: 6, y: 10 }, { x: 3, y: 10 }, { x: 9, y: 10 }]
      },
      {
        label: 'Series 3',
        data: [{ x: 2, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
      }
    ],
    []
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
 
  return (
    <div
      style={{
        width: '400px',
        height: '200px'
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  )
}
export default MyChart