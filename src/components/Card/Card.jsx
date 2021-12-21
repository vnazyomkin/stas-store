import React from 'react'
import cl from './Card.module.scss'

const Card = ({ picture, name, price, vendorCode, quantity }) => {
  return (
    <div className={cl.card}>
    <div className={cl['card__img-block']}>
      <img
          className={cl['card__img']}
          src={picture}
          alt={name}/>
    </div>
      <div className={cl['card__title']}>{name}</div>
      <div className={cl['card__side-text']}>{`Количество: ${quantity[0]}`}</div>
      <div className={cl['card__side-text']}>{`Артикул: ${vendorCode[0]}`}</div>
      <div className={cl['card__price']}>{`${price} руб.`}</div>
  </div>
  )
}

export default Card
