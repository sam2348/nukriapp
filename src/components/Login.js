import React,{useRef} from 'react'
import photo from './photo.jpg'
import {NavLink} from 'react-router-dom';

const Login = () => {
    const ref = useRef();
    const inputChange =()=>{
        ref.current.style.backgruondColor = "red";
    }
  return (
    <div>
        <section className="vh-100">
        <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
                <img src={photo} width={550}/>
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 border-end border-bottom border-2 rounded-5 pb-3">
                <form>
                {/* Email input */}
                <div className="form-outline mb-4">
                    <input type="email" ref={ref} id="form3Example3" className="form-control form-control-lg" 
                     placeholder="Enter a valid email address" onClick={inputChange} required />
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                    <input type="password" id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" required />
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    {/* Checkbox */}
                    <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3" />
                    <label className="form-check-label" htmlFor="form2Example3">
                        Remember me
                    </label>
                    </div>
                    <a href="#!" className="text-body">Forgot password?</a>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="submit" className="btn btn-primary btn-lg" style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Login</button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <NavLink to="/Signup" className="link-danger">Register</NavLink></p>
                </div>
                </form>
            </div>
            </div>
        </div>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
            {/* Copyright */}
            <div className="text-white mb-3 mb-md-0">
            Copyright © 2020. All rights reserved.
            </div>
            {/* Copyright */}
            {/* Right */}
            <div>
            <a href="#!" className="text-white me-4">
                <i className="fab fa-facebook-f" />
            </a>
            <a href="#!" className="text-white me-4">
                <i className="fab fa-twitter" />
            </a>
            <a href="#!" className="text-white me-4">
                <i className="fab fa-google" />
            </a>
            <a href="#!" className="text-white">
                <i className="fab fa-linkedin-in" />
            </a>
            </div>
            {/* Right */}
        </div>
        </section>
    </div>
  )
}

export default Login