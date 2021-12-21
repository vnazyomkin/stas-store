import React, { useState, Fragment } from 'react'
import classNames from 'classnames'
import cl from './ImageSlider.module.scss'

const ImageSlider = ({ pictures, name }) => {
  // eslint-disable-next-line no-unused-vars
  const [shownIndex, setShownIndex] = useState(0)
  return (
    <div className={cl['image-slider']}>
      {pictures.map((picture, index) => (
        <Fragment key={picture}>
          <span 
            className={classNames(cl['image-slider__slide'], {  [cl['image-slider__slide_shown']]: index === shownIndex })}
            onMouseOver={() => setShownIndex(index)}
          />
          <>
            {index === shownIndex && (
              <div className={cl['image-slider__img-block']}>
                <img
                  className={cl['image-slider__img']}
                  src={picture}
                  alt={name}
                />
              </div>
            )}
          </>
        </Fragment>
      ))}
    </div>
  )
}

export default ImageSlider
