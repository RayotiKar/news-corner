import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'


const Newscorner = () => {
  return (
    <div className="news-corner">
      <div className="heading">NEWS CORNER</div>
      <div className="cards">
            <Card1/>
            <Card2/>
            <Card3/>

      </div>
    </div>
  )
}

export default Newscorner
