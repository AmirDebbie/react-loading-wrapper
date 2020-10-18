# react-loading-wrapper

> Loading component to wrap around content that waits for a loading state.

[![NPM](https://img.shields.io/npm/v/react-loading-wrapper.svg)](https://www.npmjs.com/package/react-loading-wrapper) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-loading-wrapper
```

## Usage 
---

```jsx
import React, { useState } from 'react'

import { Loading } from 'react-loading-wrapper'
import 'react-loading-wrapper/dist/index.css'

const App = () => {
  const [loading, setLoading] = useState(true)

  return (
    <Loading 
    loading={loading}>
      <h1>Hello World</h1>
    </Loading>
  )
}

export default App
```


## Options
---
loadingComponent: JSX 

color: String


## License

MIT © [AmirDebbie](https://github.com/AmirDebbie), [ShaharEli](https://github.com/ShaharEli)
