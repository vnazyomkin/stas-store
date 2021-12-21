import React from 'react'
import cl from './Card.module.scss'
import ImageSlider from '../ui/ImageSlider/ImageSlider'

const Card = ({ pictures, name, price, vendorCode, quantity }) => {
  return (
    <div className={cl.card}>
    <div className={cl['card__img-block']}>
      <ImageSlider pictures={pictures} name={name}/>
    </div>
      <div className={cl['card__title']}>{name}</div>
      <div className={cl['card__side-text']}>{`Количество: ${quantity[0]}`}</div>
      <div className={cl['card__side-text']}>{`Артикул: ${vendorCode[0]}`}</div>
      <div className={cl['card__price']}>{`${price} руб.`}</div>
  </div>
  )
}

export default Card