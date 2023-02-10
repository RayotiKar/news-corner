import React from 'react'
import newspic1 from '../assets/news1.jpg'

const Card3 = () => {
  return (
    <div className="card-container">
        <div className="image-container">
            <img className= 'img1' src={newspic1} alt='img1'></img>
        </div>
        <div className="card-title">
            <h3>Some random News heading</h3>
        </div>
        <div className="card-body"> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean augue enim, consequat sed accumsan eget, aliquam sit amet sem. Curabitur et pellentesque augue.</p>
        </div>
        <div className="card-footer">
            12/3/22
            <a className="see-more-link" href="/">
                See More
            </a>
        </div>
    </div>
  )
}

export default Card3
