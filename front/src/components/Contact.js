import React, { useState } from 'react'
import Header from './Header'

const Contact = () => {
  let [userdata, setUserdata] = useState({
    name: '',
    mobile: '',
    address: '',
    message: ''
  })

  const handleInput = (e) => {
    let name = e.target.name
    let value = e.target.value
    
    console.log(value);
    setUserdata({
      ...userdata,
      [name]: value
    })
  }
  
  const sendData = async (e) => {

    e.preventDefault()
    console.log(1);
    
    const { name, mobile, address, message } = userdata
    
    const res = await fetch("/contact", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,mobile,address,message
      })
    })  

    console.log(11);
    const data =await res.json();
    console.log(12);
    
    if (res.status === 422 || !data) {
      alert("Fill all the datails ")
    }
    else if (res.status === 401) {
      alert("User is not Authorized , Kindly first log in ")
    }
    else if (res.status === 402) {
      alert("No token available")
    }
    else if (res.status === 200) {
      alert("Message sent successfully");
      
      setUserdata({
        name: '',
        mobile: '',
        address: '',
        message: ''
      })
    }
    // else{
    //   alert("Internal Error")
    // }

  }
  return (
    <>
      <Header></Header>
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="heading">
            <h2>Connect With Us</h2>
            {/* <p>Fill this form, our team will collect your <span>Donation</span> or <span>Wastage</span> from your place.</p> */}
            <p>Fill this regarding any <span>issues</span> while working with our website.</p>
          </div>
          <div className="row">
            <div className="col-lg-12 mt-5">
              <form className="contact-form">
                <div className="row">
                  <div className="col-lg-12">
                    <form method='POST'>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="col-lg-12">
                            <div className="form-group">
                              <input type="text" className="form-control" name='name' onChange={handleInput} value={userdata.name} placeholder="Your Name" />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <input type="number" className="form-control" name='mobile' onChange={handleInput} value={userdata.mobile} placeholder="Mobile No." />
                            </div>
                          </div>
                          {/* <div className="col-lg-12">
                          <div className="form-group">
                            <select name="donation" id="donation">
                              <option value="">Choose Donation or Wastage</option>
                              <option value="food">Food</option>
                              <option value="clothes">Clothes</option>
                              <option value="footware">Footware</option>
                              <option value="books">Books</option>
                              <option value="fund">Fund</option>
                              <option value="gadget">Ele. Gadgets</option>
                            </select>
                          </div>
                        </div> */}

                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input type="text" className="form-control" name='address' onChange={handleInput} value={userdata.address} placeholder="Address" />
                          </div>
                          <div className="form-group">
                            <textarea className="form-control" name="message" onChange={handleInput} value={userdata.message} id="" cols="90" rows="1" placeholder="Message"></textarea>
                          </div>
                        </div>
                        <div className="col-md-12 mt-3">
                          <button href="#" className="btn1 mt-5" onClick={sendData}>Submit Details</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact