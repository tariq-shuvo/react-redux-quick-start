import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Alert from '../layout/Alert'

const Login = () => {
    const initialState = {
        emai: '',
        password:''
    }

    const [formData, setFormData] = useState(initialState)
    
    const {email, password} = formData

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <section className="container">
            <Alert />
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
            <form className="form" action="dashboard.html">
                <div className="form-group">
                <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChange={(e)=>onChange(e)}
                    required
                />
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e)=>onChange(e)}
                    required
                />
                </div>
                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
                Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
        </section>
    )
}

export default Login
