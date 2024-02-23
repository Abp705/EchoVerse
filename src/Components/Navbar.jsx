import React from 'react'
import{ Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-secondary-subtle">
                <div class="container-fluid">
                    <Link class="fs-3 fw-bold fst-italic d-flex flex-row" to="#">Echo <p className='navbar_para fst-italic text-success'>Verse</p></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <form class="d-flex" role="search">
                            <button class="btn btn-outline-success" type="submit">SignIn/LogIn</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
