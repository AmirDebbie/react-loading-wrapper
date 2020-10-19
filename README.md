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
**loading:**
- Usage: this state will control the loading component if the state is null or false the loading will render else the children will render. 
- Type: Bool

## Options
---
**loadingComponent:**
- Usage: Replace the different spinner loading component with a different component.
- Type: JSX or String
- Default: Spinner
- String options: threeDots  

**color:**
- Usage: Changes the color of the loading component (wont work when using your own custom component).
- Type: String
- Default: blue

**backgroundColor:**
- Usage: Changes the color of the loading component (wont work when using your own custom component).
- Type: String
- Default: transparent
- Options: blue, pink, yellow, orange, red, black
 (all linear gradient)

**size:**
- Usage: Changes the size of the loading component (wont work when using your own custom component).
- Type: Number
- Default: 120px

**speed:**
- Usage: Changes the speed of the spinner loading component (works only with default the spinner).
- Type: String
- Options: slow, fast, extreme

**fullPage**
- Usage: Makes the loader component full page (wont work when using your own custom component).
- Type: Bool

## License

MIT © [AmirDebbie](https://github.com/AmirDebbie), [ShaharEli](https://github.com/ShaharEli)
