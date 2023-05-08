import React from 'react'
import Header from './Header'

const About = () => {
  return (
    <>
    <Header></Header>
    <section className="about-sec" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 about-img">
            <img src="img/img-2.jpeg" alt="about" />
          </div>
          <div className="col-lg-8 order-first order-lg-last">
            <div className="heading">
              <h2>What We Do & Why We Do</h2>
            </div>
            <p>Every one know in day to day life there are some wasted electronic devices produces in many houses. we are one type of E-waste management foundation which collect your this E-waste devices efficient manner with proper management. we also pass on this device to respective company which use very efficiently in their work. our main goal is to provide a friendly and peacefully environment for management of E-waste.</p>
            <p>Generally you know many people throw their e-waste device in dustbin because they don’t know that many parts of this devices are useful. After that their parts are collected from garbage and people don’t get any thing. There are some people who run much for sell their e-waste device. So we solve both type of people problem through website and provide something for their e-waste device for this we make this awesome website. Our work also saved environment.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About