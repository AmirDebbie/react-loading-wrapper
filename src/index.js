import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types'

export function Loading({
  loadingComponent,
  loading,
  fullPage,
  color,
  speed,
  size,
  backgroundColor,
  children
}) {
  const [component, setComponent] = useState(loadingComponent)
  const [animationSpeed, setAnimationSpeed] = useState('')
  const [backgroundImage, setBackgroundImage] = useState('')
  const circularMotion = useRef()

  useEffect(() => {
    console.log(component)
    if (component === 'threeDots') {
      if (speed === 'slow') setAnimationSpeed('1s')
      else if (speed === 'fast') setAnimationSpeed('0.4s')
      else if (speed === 'extreme') setAnimationSpeed('0.2s')
    } else {
      if (speed === 'slow') setAnimationSpeed('3s')
      else if (speed === 'fast') setAnimationSpeed('1s')
      else if (speed === 'extreme') setAnimationSpeed('0.5s')
    }

    if (backgroundColor === 'black') {
      setBackgroundImage(
        'linear-gradient(225deg, #595357 0%, #242225 50%, #404548 100%)'
      )
    } else if (backgroundColor === 'blue') {
      setBackgroundImage('linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)')
    } else if (backgroundColor === 'pink') {
      setBackgroundImage('linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)')
    } else if (backgroundColor === 'yellow') {
      setBackgroundImage('linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%')
    } else if (backgroundColor === 'orange') {
      setBackgroundImage('linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)')
    } else if (backgroundColor === 'red') {
      setBackgroundImage('linear-gradient(147deg, #ffbc3b 0%, #FF2525 74%)')
    }
  }, [speed])

  if (!loadingComponent) {
    loadingComponent = (
      <div
        className={styles.loaderContainer}
        style={{
          backgroundImage: backgroundImage ? backgroundImage : 'transparent',
          position: fullPage ? 'absolute' : '',
          top: fullPage ? '0' : '',
          left: fullPage ? '0' : '',
          width: fullPage ? '100vw' : '100%',
          height: fullPage ? '100vh' : '100%'
        }}
      >
        <div
          ref={circularMotion}
          className={styles.loader}
          style={{
            height: size ? size : 120,
            width: size ? size : 120,
            borderWidth: size < 50 ? 7 : 14,
            borderTopWidth: size < 50 ? 7 : 14,
            borderTopColor: color ? color : '#3498db',
            animationDuration: animationSpeed ? animationSpeed : '2s'
          }}
        ></div>
      </div>
    )
  } else if (loadingComponent === 'threeDots') {
    loadingComponent = (
      <div
        className={styles.threeDots}
        style={{
          backgroundImage: backgroundImage ? backgroundImage : 'transparent',
          position: fullPage ? 'absolute' : '',
          top: fullPage ? '0' : '',
          left: fullPage ? '0' : '',
          width: fullPage ? '100vw' : '100%',
          height: fullPage ? '100vh' : '100%'
        }}
      >
        <span
          style={{
            backgroundColor: color ? color : '#111',
            animationDuration: animationSpeed ? animationSpeed : '0.6s'
          }}
        ></span>
        <span
          style={{
            backgroundColor: color ? color : '#111',
            animationDuration: animationSpeed ? animationSpeed : '0.6s'
          }}
        ></span>
        <span
          style={{
            backgroundColor: color ? color : '#111',
            animationDuration: animationSpeed ? animationSpeed : '0.6s'
          }}
        ></span>
      </div>
    )
  }
  return loading ? loadingComponent : children
}

export default Loading
