import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
        <footer>
                <div class="footer_main">
                    <div class="tag">
                        <h1>Contact</h1>
                        <a href="#srilanka"><i class="fa-solid fa-house"></i>123/Colombo/Sri Lanka</a>
                        <a href="#phoneno"><i class="fa-solid fa-phone"></i>+94 12 345 6789</a>
                        <a href="#contact"><i class="fa-solid fa-envelope"></i>contact@gmail.com</a>
                    </div>

                    <div class="tag">
                        <h1>Get Help</h1>
                        <a href="#FAQ" class="center">FAQ</a>
                        <a href="#shippping" class="center">Shipping</a>
                        <a href="#returns" class="center">Returns</a>
                        <a href="#payment" class="center">Payment Options</a>
                    </div>

                    <div class="tag">
                        <h1>Our Stores</h1>
                        <a href="#srilanka" class="center">Sri Lanka</a>
                        <a href="#usa" class="center">USA</a>
                        <a href="#india" class="center">India</a>
                        <a href="#japan" class="center">Japan</a>
                    </div>

                    <div class="tag">
                        <h1>Follw Us</h1>
                        <div class="social_link">
                            <a href="#facebook"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#twitter"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#instagram"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#linkedin"><i class="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    <div class="tag">
                        <h1>Newsletter</h1>
                        <div class="search_bar">
                            <input type="text" placeholder="You email id here"/>
                                <button type="submit">Subscribe</button>
                        </div>
                    </div>

                </div>
            </footer>
    </div>
  )
}

export default Footer