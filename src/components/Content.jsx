import React from 'react'

import "../styles/Content.css"
import Counter from './Counter'

const Content = () => {
  return (
    <div className='content'>
        <div className="counter-container">
            <Counter/>
        </div>

    </div>
  )
}

export default Content