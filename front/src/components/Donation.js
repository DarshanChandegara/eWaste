import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Donation = () => {
  return (
    <>
    <Header></Header>
    <section className="don-sec" id="donation">
      <div className="container">
        <div className="heading">
          <h2>We manage electronic wastage like..</h2>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="don-box">
              <img src="img/don/1.jpg" alt="img" />
              <h3>Mobiles</h3>
              <p>This category include all mobile type e-waste devices.</p>
              <Link to="/services" className="btn1">Sell Now</Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="don-box">
              <img src="img/don/2.jpg" alt="img" className='laptops' />
              <h3>Laptops</h3>
              <p>This category include all laptop and computer type e-waste devices.</p>
              <Link to="/services" className="btn1">Sell Now</Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="don-box">

              <img src="img/don/3.jpg" alt="img" className='laptops' />
              <h3>Others</h3>
              <p>This category include all other except laptop and mobile type e-waste devices.</p>

              <Link to="/services" className="btn1">Sell Now</Link>

            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default Donation