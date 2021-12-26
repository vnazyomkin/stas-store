import React, { Fragment } from 'react'
import classNames from 'classnames'
import cl from './PageSwitcher.module.scss'

const getPageNumArray = (currentPage, maxNum) => {
  const result = [1]
  if (maxNum === 1) return result
  for (let i = currentPage - 2; i < currentPage + 3; i++) {
    if (i > 1 && i < maxNum) result.push(i)
  }
  result.push(maxNum)
  return result
}

const PageSwitcher = ({ itemCount,  shownItemCount, currentPage, setCurrentPage }) => {
  if (!itemCount) return null
  const maxNum = Math.ceil(itemCount / shownItemCount)
  const pageNumArray = getPageNumArray(currentPage, maxNum)
  return (
    <div className='page-switcher'>
      <ul className={cl['page-switcher__pages']}>
        {pageNumArray.map((num) => (
          <Fragment key={num}>
            {num === maxNum && maxNum - pageNumArray[pageNumArray.length - 2] > 1 &&
              <span className={cl['page-switcher__ellipsis']}>...</span>}
            <li
              className={classNames(cl['page-switcher__page'], { [cl['page-switcher__page--current']]: num === currentPage })}
              onClick={() => setCurrentPage(num)}
            >
              {num}
            </li>
            {num === 1 && pageNumArray[1] > 2 &&
              <span className={cl['page-switcher__ellipsis']}>...</span>}
          </Fragment>
        ))}
      </ul>
    </div>
  )
}

export default PageSwitcher
