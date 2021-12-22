import React from 'react'

const PageSwitcher = (count, index, shownCount, currentNum) => {
  const maxNum = Math.ceil(count / shownCount)
  <div>
    <ul>
      {maxNum < 5 ? (
        <div/>
      ) : (
        (new Array(3)).map((_, i) => <li>{i + 1}</li>)
        <li>...</li>
        <li>{maxNum}</li>
      )}
    </ul>
  </div>
}

export default PageSwitcher
