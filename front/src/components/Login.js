import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    const nav = useNavigate();

    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')
    let [show, setShow] = useState(false);

    const handleShowPassword = () => {
        setShow(!show);
    };

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
        <div className="login">
            <h2>Sign-in E-WASTE MANAGEMENT FOUNDATION</h2>
            <form method="POST">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" className="form-control" name='username' id='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" aria-label="Username"
                        aria-describedby="basic-addon1" />
                </div>

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type={show ? 'text' : 'password'} className="form-control" name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={show}
                        onChange={handleShowPassword} />
                    <label className="form-check-label" for="exampleCheck1">Show Password</label>
                </div>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Exit</button>
                <button type="button" className="btn btn-primary" onClick={submit}>Login</button>
            </form>
        </div>

        // <div className="modal-body">
        //     <form method='POST'>
        //         <div className="input-group mb-3">
        //             <span className="input-group-text" id="basic-addon1">@</span>
        //             <input type="text" className="form-control" name='username' id='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" aria-label="Username"
        //                 aria-describedby="basic-addon1" />
        //         </div>

        //         <div className="mb-3">
        //             <label for="exampleInputPassword1" className="form-label">Password</label>
        //             <input type={show ? 'text' : 'password'} className="form-control" name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        //         </div>
        //         <div className="mb-3 form-check">
        //             <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={show}
        //                 onChange={handleShowPassword} />
        //             <label className="form-check-label" for="exampleCheck1">Show Password</label>
        //         </div>

        //         <div className="modal-footer">
        //             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Exit</button>
        //             <button type="button" className="btn btn-primary" onClick={submit}>Login</button>
        //         </div>
        //     </form>
        // </div>
    );
}

export default Login;
