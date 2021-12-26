import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import cl from '../styles/DropList.module.scss'
import { selectCategories, selectParentCategories, selectShownCategories } from '../../../store/data/reducer'
import { changeShownCategories } from '../../../store/data/action'

const DropList = ({ isDropListOpened }) => {
  const categories = useSelector(selectCategories)
  const parentCategories = useSelector(selectParentCategories)
  const shownCategories = useSelector(selectShownCategories)
  const dispatch = useDispatch()

  const titles = Object.keys(categories)

  return (
    <>
      {/* <ul className={cl.menuItems}>
        <li>
          <div className={cl.menuItem} onClick={() => setDropListOpened(prevState => !prevState)}>Каталог</div>
        </li>
      </ul> */}
      {isDropListOpened && <div className={cl.dropList}>
        {titles.map(title => (
          <div>
            <div className={cl.title}>{parentCategories[title] ? parentCategories[title].name : 'Другие'}</div>
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
    </>
  )
}

export default DropList

