import React from 'react';
import './Main.css';

function Main() {
    return (
        <div>
            <section className='section-container container-fluid mb-5'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <div className="logo navbar-brand">
                            <h1>Shoe<span>s</span></h1>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item"><a className="nav-link" href="#Home">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#Products">Products</a></li>
                                <li className="nav-item"><a className="nav-link" href="#Review">Review</a></li>
                                <li className="nav-item"><a className="nav-link" href="#Servises">Services</a></li>
                                
                            </ul>
                            <div className="icons gap-4">
                                <i className="fa-solid fa-heart"></i>
                                <i className="fa-solid fa-cart-shopping"></i>
                                <i className="fa-solid fa-user"></i>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="main" id="Home">
                    <div className="main_content">
                        <div className="main_text">
                            <h1 className='main_text_h1 display-1'>NIKE<br /><span>Collection</span></h1>
                            <p>
                            Nike offers an extensive collection of athletic apparel, footwear, and accessories catering to various sports and lifestyles. Their range includes iconic sneakers like Air Max and Jordan, performance-driven gear for running, training, and basketball, as well as collaborations with designers and athletes, reflecting innovation and style in sports fashion.
                            </p>
                        </div>
                        <div className="social_icon">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                        <div className="button">
                            <a href="#shop-now" className="btn btn-primary">SHOP NOW</a>
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>

                    </div>
                    <div className="main_image">
                        <img src="/image/shoes.png" alt="Nike Shoes" className="img-fluid" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main;
