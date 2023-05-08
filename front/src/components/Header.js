import React, { useEffect, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const nav = useNavigate()

  let [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  })

  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')
  let [show, setShow] = useState(false);

  const handleShowPassword = () => {
    setShow(!show);
  };

  let name, value

  const handleInput = (e) => {
    name = e.target.name
    value = e.target.value

    console.log(value)

    setUser({
      ...user,
      [name]: value
    })
  }

  const postData = async (e) => {
    e.preventDefault()

    const { username, email, password } = user

    const res = await fetch("/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username, email: email, password: password
      })
    })

    const data = await res.json()

    if (res.status === 422 || res.status === 4000 || !data) {
      alert("Fill up the details first")
    }
    else if (res.status === 401) {
      alert("Email is already exist")
    }
    else if (res.status === 402) {
      alert("Username is already exist")
    }
    else {
      alert("Registration Successfull")
      setUser({
        username: '',
        email: '',
        password: ''
      })
    }
  }

  const submit = async (e) => {
    e.preventDefault()

    const res = await fetch("/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })

    const data = await res.json()

    if (res.status == 422 || !data) {
      alert("Credentials Are Not Matching")
    }
    else {
      alert("Logged-In Successfully")
      setUsername("")
      setPassword("")
      nav("/")
    }

  }

  return (
    <>
      <div className="fixed-top">

        <header>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <Link className="navbar-brand " to="/">E-WASTE MANAGEMENT FOUNDATION</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/donation">Categories</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/mission">Mission</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link " to='/login' >Sign in</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link " to='/register'>Sign up</NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>

        <div className="cont-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <p>Contact No : <a href="tel: +91 8469557424">+91 8469557424</a></p>
              </div>
              <div className="col-lg-6">
                <div className="social">
                  <a href="/"><img src="img/icons/facebook.png" alt="facebook" /></a>
                  <a href="#"><img src="img/icons/instagram.png" alt="inatagram" /></a>
                  <a href="#"><img src="img/icons/youtube.png" alt="youtube" /></a>
                  <a href="#"><img src="img/icons/linkedin.png" alt="linkedin" /></a>
                  <a href="#"><img src="img/icons/gmail.png" alt="gmail" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      

      {/* sign up  */}
      {/* <div className="modal fade" id="signupModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="signupModalLabel">SIGN-UP</h5><br></br>
              <h5 className="modal-title fw-bold" id="signupModalLabel">E-WASTE MANAGEMENT FOUNDATION</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="text" name='username' id='username' className="form-control" onChange={handleInput} value={user.username} placeholder="Username" aria-label="Username"
                  aria-describedby="basic-addon1" />
              </div>

              <form method='POST'>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" name='email' id='email' className="form-control" onChange={handleInput} value={user.email}
                    aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type={show ? 'text' : 'password'} name='password' id='password' className="form-control" onChange={handleInput} value={user.password} />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck2" checked={show}
                    onChange={handleShowPassword} />
                  <label className="form-check-label" for="exampleCheck1">Show Password</label>
                </div>
                <div>
                  Alredy Have an Account
                  <button type="button" className="btn btn-outline-primary mx-2" data-bs-toggle="modal"
                    data-bs-target="#loginModal">
                    Login
                  </button>
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Exit</button>
                  <button type="submit" className="btn btn-primary" onClick={postData}>Sign up</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div> */}
    </>
  )
}

export default Header