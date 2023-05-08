import React from 'react'

const Services = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <div className="heading">
                    <h2>
                        Give Details
                    </h2>
                    <p>Fill this form for provide details regarding your E-waste device</p>
                </div>
                <div className="row">
                    <div className="col-lg-12 mt-5">
                        <form className="contact-form" action="#">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Your First Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Your last Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Mobile No." />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control"
                                                        placeholder="Your E-mail Address" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <select name="donation" id="donation">
                                                        <option value="">Choose Category of Waste</option>
                                                        <option value="food">Mobile</option>
                                                        <option value="clothes">Laptop</option>
                                                        <option value="footware">Other electronic device</option>

                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <textarea className="form-control" name="text" id="" cols="90" rows="1"
                                                        placeholder="Enter Cause Of Your Device Damage"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <textarea className="form-control" name="text" id="" cols="90" rows="1"
                                                        placeholder="Enter Some Details Of Your Device"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label>Your Image File
                                                        <input type="file" name="myImage" accept="image/png, image/gif, image/jpeg" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Address" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="arearowmargin">
                                                    <div className="col-lg-6">
                                                        <div className="col-lg-12">
                                                            <div className="form-group areamargin">
                                                                <input type="text" className="form-control" placeholder="Your Area" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" placeholder="Your City" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Your State" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Your Pincode" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-12 mt-3">
                                            <button type="submit" className="btn1 mt-5" >Submit Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services