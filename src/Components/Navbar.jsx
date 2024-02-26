import React from 'react'
import { Link } from 'react-router-dom'
import SubNvbar from './SubNvbar'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" to="/">Reader Legacy</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-outline-success text-white" type="submit"><Link className='text-light' to="/login">Login/SignIn</Link></button>
                        </form>
                    </div>
                </div>
            </nav>
            <SubNvbar />
        </>
    )
}
