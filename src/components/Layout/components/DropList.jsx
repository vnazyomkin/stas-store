import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import { selectCategories, selectParentCategories, selectShownCategories } from '../../../store/data/reducer'
import { changeShownCategories } from '../../../store/data/action'
import cl from '../styles/DropList.module.scss'
import Button from '../../ui/Button/Button'

const DropList = ({ isDropListOpened, setDropListOpened }) => {
  console.log('Render DropList') // мб стоит добавить useCallback на setDropListOpened
  const categories = useSelector(selectCategories)
  const parentCategories = useSelector(selectParentCategories)
  const shownCategories = useSelector(selectShownCategories)
  const dispatch = useDispatch()

  const titles = Object.keys(categories)

  return (
    <>
      {isDropListOpened &&
      <div className={cl.dropListContainer}>
        <div className={cl.dropList}>
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
        </div>
        <Button onClick={() => setDropListOpened(false)} text="К товарам"/>
      </div>
      }
    </>
  )
}

export default DropList

