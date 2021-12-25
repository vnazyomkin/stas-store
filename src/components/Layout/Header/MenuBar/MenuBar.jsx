import React, { useState } from 'react'
import classNames from 'classnames'
import cl from './MenuBar.module.scss'

const MenuBar = ({ categories, shownCategories, setShownCategories }) => {
  const [isDropListOpened, setDropListOpened] = useState(false)
  console.log('categories', categories)
  console.log('shownCategories', shownCategories)
  // console.log('categories', categories)
  const titles = Object.keys(categories)

  return (
    <div className={cl.menuBar}>
      <ul className={cl.menuItems}>
        <li>
          <div className={cl.menuItem} onClick={() => setDropListOpened(prevState => !prevState)}>Каталог</div>
        </li>
      </ul>
      {isDropListOpened && <div className={cl.dropList}>
        {titles.map(title => (
          <div>
            <h3>{title}</h3>
            <ul className={cl.categories}>
              {categories[title].map(({ name, id }) => (
              <li 
                key={id}
                className={classNames(cl.category, { [cl['category--chosen']]: shownCategories.includes(id) })}
                onClick={() => setShownCategories((prevState) => (
                  shownCategories.includes(id) ? prevState.filter(item => item !== id) : [...prevState, id]
                ))}
              >{name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>}
    </div>
  )
}

export default MenuBar
