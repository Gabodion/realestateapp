import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className='app__wrapper'>
            <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 justify-content-end">
                {/* <div class="col mb-3">
                   
                    <p class="text-muted">© 2022</p>
                </div>

                <div class="col mb-3">

                </div> */}
                
                <div class="col mb-3">
                    <h5 className='fw-bold mb-4'>Quick Links</h5>
                    <ul class="nav flex-column me-auto">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted Footer__link">Home</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted Footer__link">About</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted Footer__link">Services</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted Footer__link">Blog</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted Footer__link">Contact</a></li>
                    </ul>
                </div>

                <div class="col mb-3">
                    <h5 className='fw-bold mb-4'>Services</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted Footer__link">About Us</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted Footer__link">Blog & Articles</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted Footer__link">Terms and Conditions</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted Footer__link">Privacy Policy</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted Footer__link">Contact</a></li>
                    </ul>
                </div>

                <div class="col mb-3">
                    <h5 className='fw-bold mb-4'>Contact</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted Footer__link">Address: Floor 20 Ozumba Mbadiwe</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted Footer__link">Victoria Island Lagos State</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted Footer__link">Phone: 09022222222, 0903333333</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted Footer__link">Email: Realestate@gmail.com</a></li>
                       
                    </ul>
                </div>
              
            </footer>
        </div>
    )
}

export default Footer