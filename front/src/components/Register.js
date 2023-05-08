import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const nav = useNavigate();

    let [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    })

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
            nav("/login");
        }
    }

    return (
        <div>
            <form method='POST'>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" name='username' id='username' className="form-control" onChange={handleInput} value={user.username} placeholder="Username" aria-label="Username"
                        aria-describedby="basic-addon1" />
                </div>
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

                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Exit</button>
                <button type="submit" className="btn btn-primary" onClick={postData}>Sign up</button>
            </form>
        </div>

    )
}

export default Register
