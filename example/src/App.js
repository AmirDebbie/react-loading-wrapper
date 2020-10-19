import React, { useState } from 'react'

import { Loading } from 'react-loading-wrapper'
import 'react-loading-wrapper/dist/index.css'

const App = () => {
  const [loading, setLoading] = useState(true)

  return (
    <div
      style={{
        height: 200,
        width: 200,
        border: 'solid black 3px',
        margin: 300
      }}
    >
      <Loading color='red' loadingComponent='threeDots' loading={true}>
        <h1>Hello World</h1>
      </Loading>
    </div>
  )
}

export default App
