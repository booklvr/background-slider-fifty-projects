import React, { useState } from 'react'

const images = [
  'https://images.unsplash.com/photo-1610282356727-c3a6442630de?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1610295365106-3d22aafbf6f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
  'https://images.unsplash.com/photo-1610295434404-8ea904930a12?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1589101165312-aa513dcef377?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1602096334807-55adcc5c230b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
]

const BackgroundSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  

  return (
    <div
      className='background'
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className='slider-container'>
        <div
          className='slide'
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        ></div>
        <button
          className='arrow left-arrow'
          id='left'
          onClick={() =>
            setCurrentIndex(() =>
              currentIndex > 0 ? currentIndex - 1 : images.length - 1
            )
          }
        >
          <i className='fas fa-arrow-left'></i>
        </button>

        <button
          className='arrow right-arrow'
          id='right'
          onClick={() =>
            setCurrentIndex(() =>
              currentIndex < images.length - 1 ? currentIndex + 1 : 0
            )
          }
        >
          <i className='fas fa-arrow-right'></i>
        </button>
      </div>
    </div>
  )
}

export default BackgroundSlider
