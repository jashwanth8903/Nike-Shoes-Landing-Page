import React from 'react'
import './Services.css'

function Services() {
  return (
    <div>
        <div className="services mb-5" id="Servises">
                <h1><span>services</span></h1>

                <div class="services_cards">
                    <div class="services_box">
                        <i class="fa-solid fa-truck-fast"></i>
                        <h3>Fast Delivery</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                    </div>

                    <div class="services_box">
                        <i class="fa-solid fa-rotate-left"></i>
                        <h3>10 Days Replacement</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                    </div>

                    <div class="services_box">
                        <i class="fa-solid fa-headset"></i>
                        <h3>24 x 7 Support</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>

            </div>
    </div>
  )
}

export default Services