import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import cl from './MenuBar.module.scss'
import { selectCategories, selectShownCategories } from '../../../../store/data/reducer'
import { changeShownCategories } from '../../../../store/data/action'

const MenuBar = () => {
  const categories = useSelector(selectCategories)
  const shownCategories = useSelector(selectShownCategories)
  const dispatch = useDispatch()

  const [isDropListOpened, setDropListOpened] = useState(false)
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
                onClick={() => dispatch(changeShownCategories(shownCategories.includes(id) ? shownCategories.filter(item => item !== id) : [...shownCategories, id]))}
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
