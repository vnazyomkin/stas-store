import React from 'react'
import Card from './Card/Card'
import ErrorBlock from '../ui/ErrorBlock/ErrorBlock'
import cl from './Cards.module.scss'

const Cards = ({ cards }) => {
  
  return (
    <div className={cl.cards}>
    {cards.map(({ picture: pictures, $: attributes, name, price_Roznica_Web: prices, vendorCode, quantity }) => (
      <Card key={vendorCode} pictures={pictures} name={name} price={prices && prices[0]} quantity={quantity && quantity[0]} vendorCode={vendorCode}/>
    ))}
    {!cards.length && 
      <ErrorBlock errorText='Не выбрана категория товара. Посмотреть все категории можно в "Товары"'/>
    }
  </div>
  )
}

export default Cards
