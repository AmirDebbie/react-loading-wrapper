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
      loading={loading}
      // Optional props
      color='orange'
      backgroundColor='blue'
      fullPage
      size={100}
      speed='fast'
      loadingComponent={<MyLoadingComponent />} // Use your own component for the loading screen is you want
    >
      <h1>Hello World</h1>
    </Loading>
  )
}

export default App
```

## Required
---
loading:\
type: state\
usage: this state will control the loading component if the state is null or false the loading will render else the children will render. 


## Options
---
**loadingComponent:**
- type: JSX 
- default: spinner

**color:**
- type: String
- default: blue

**backgroundColor:**
- type: String
- default: transparent
- options: blue, pink, yellow, orange, red, black
 (all linear gradient)

**size:**
- type: Number
- default: 120px

**speed:**
- type: String
- options: slow, fast, extreme

## License

MIT © [AmirDebbie](https://github.com/AmirDebbie), [ShaharEli](https://github.com/ShaharEli)
