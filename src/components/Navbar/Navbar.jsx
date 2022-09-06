import React from 'react'
import "./Navbar.css"

const Navbar = () => {

    return (
        <div>
            <nav className="app__wrapper navbar navbar-expand-lg Navbar__container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" >La Maison</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav Navbar__menu">
                
                            <a className="nav-link Navbar__item" aria-current="page" href="#">Home</a>
                            <a className="nav-link Navbar__item" href="#">About Us</a>
                            <a className="nav-link Navbar__item" href="#">Properties</a>
                            <a className="nav-link Navbar__item" href='#'>Agents</a>

                            <button className='btn btn-outline-secondary Navbar__btn'>Find a Home</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar