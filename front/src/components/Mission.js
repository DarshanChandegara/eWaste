import React from 'react'
import Header from './Header'

const Mission = () => {
  return (
    <>
      <Header></Header>
      <section className="mission" id="mission-id">
        <div className="container">
          <div className="heading">
            <h2>Our Missions</h2>
            <p>We have collected household <span>electronic e-waste devices </span>and provide respective company.</p>

          </div>
          <div className="gallery-sec">
            <div className="container">
              <div className="image-container">
                <div className="image"><img src="img/miss/1.jpg" alt="img" /></div>
                <div className="image"><img src="img/miss/2.jpg" alt="img" /></div>
                <div className="image"><img src="img/miss/3.jpg" alt="img" /></div>
                <div className="image"><img src="img/miss/4.jpg" alt="img" /></div>
                <div className="image"><img src="img/miss/5.jpg" alt="img" /></div>
                <div className="image"><img src="img/miss/6.jpg" alt="img" /></div>
              </div>
            </div>
            <div className="pop-image">
              <span>&times;</span>
              <img src="img/gallery/1.jpg" alt="gallery-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Mission