import React from 'react'
import { Link } from 'react-router-dom'

export default function SubNvbar() {
    return (
        <>
            <div className='main_sub_navbar'>
                <div className="sub_nvbar_username ">
                    <div className='w-50 fs-4 fw-bold '> Abhishek Kumar Pandey</div>
                    <div className='w-45'>
                        <form action="">
                            <input className=" btn-outline-success rounded" type="text" />
                            <button class="btn btn-outline-success text-dark fw-bold ms-2 " type="submit">Search</button>

                        </form>
                    </div>
                </div>
                <div className="sub_navbar">
                    <div>
                        <Link className='sub_navbar_elements' to="/">Home</Link>
                    </div>
                    <div>
                        <Link className='sub_navbar_elements' to="/blog">Blog</Link>
                    </div>
                    <div>
                        <Link className='sub_navbar_elements' to="">Gallary</Link>
                    </div>
                    <div>
                        <Link className='sub_navbar_elements' to="">About</Link>
                    </div>
                    <div>
                        <Link className='sub_navbar_elements' to="">Contect</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
