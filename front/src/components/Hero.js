import React from 'react'
// import { NavLink } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const Hero = () => {
  return (
    <>
      <Header></Header>
    <section className="home-sec" id="home">
      <div className="container">
        <div className="home-content">
          <div className="row">
            <div className="col-lg-6 align-item-center">
              <div className="home-info">
                <h1>Alone we can do little, together we can do so much</h1>
                <h2>We <span>E-waste management</span> </h2>
                <h2>
                  manage your household electronic wastage
                </h2>

                <p>our foundation also focus on your benefits while collecting electronic wastage form you and pass on appropriate place. </p>
                {/* <NavLink to='/dashboard' className="buttons">
                  <a  className="btn1">Dashboard</a>
                </NavLink>
                <NavLink to='/services' className="buttons">
                  <a  className="btn1">Services</a>
                </NavLink> */}
              </div>
            </div>
            <div className="col-lg-6 order-first order-lg-last">
              <div className="img-sec">
                <img src="img/img-1.jpg" alt="home-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
    </>
  )
}

export default Hero