import React from 'react'
import Card from './Card/Card'
import cl from './Cards.module.scss'

// const getClass = (el, mod) => `card${el ? '__' + el : ''}${mod ? '_' + mod : ''}`

const Cards = ({ cards }) => {
  // useStyles(s)
  return (
    <div className={cl.cards}>
    {cards.map(({ picture: pictures, $: attributes, name, price_Roznica_Web: prices, vendorCode, quantity }) => (
      <Card key={vendorCode} pictures={pictures} name={name} price={prices && prices[0]} quantity={quantity && quantity[0]} vendorCode={vendorCode}/>
    ))}
  </div>
  )
}

export default Cards
