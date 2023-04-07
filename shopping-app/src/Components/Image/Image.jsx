import React from 'react'
import MyComponent from './Slider'
import './Image.css'

export default function Image({setShowSlider}) {
  return (
    <div className='image'>
        <MyComponent setShowSlider={setShowSlider} />
    </div>
  )
}
