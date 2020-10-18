import React, { useState } from 'react'

import { Loading } from 'react-loading-wrapper'
import 'react-loading-wrapper/dist/index.css'

const App = () => {
  const [loading, setLoading] = useState(true)

  return (
    <Loading loading={loading}>
      <h1>Hello World</h1>
    </Loading>
  )
}

export default App
