import React from 'react'
import classNames from 'classnames'
import cl from './PageSwitcher.module.scss'

const getPageNumArray = (currentPage, maxNum) => {
  const result = []
  for (let i = currentPage - 2; i < currentPage + 3; i++) {
    if (i > 0 && i < maxNum) result.push(i)
  }
  result.push(maxNum)
  return result
}

const PageSwitcher = ({ itemCount,  shownItemCount, currentPage, setCurrentPage }) => {
  if (!itemCount) return null
  const maxNum = Math.ceil(itemCount / shownItemCount)
  console.log('itemCount', itemCount)
  const pageNumArray = getPageNumArray(currentPage, maxNum)
  console.log('pageNumArray', pageNumArray)
  return (
    <div className='page-switcher'>
      <ul className={cl['page-switcher__pages']}>
        {pageNumArray.map((num) => (
          <li 
            key={num}
            className={classNames(cl['page-switcher__page'], { [cl['page-switcher__page--current']]: num === currentPage })}
            onClick={() => setCurrentPage(num)}
            >{num}</li>
        ))}
      </ul>
    </div>
  )
}

export default PageSwitcher
