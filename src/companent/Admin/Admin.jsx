import React from 'react'
import './Admin.css'
import { CiLocationOn } from "react-icons/ci";
import Xarita from '../../assets/xarita.svg'
import Woman from '../../assets/woman.svg'

function Admin() {
  return (
    <div>
          <div className="admin">
        <div className="container">
          <div className="admimn__cards">
            <div className="admin__card">
                <h2>How can help you ?</h2>
                <h1>Admin panel</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.</p>
            </div>
                <div className='div'>
                <div className="admin__card">
               <h3>01. Visit Feedback</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.</p>
                <h2>03.Billing Inquiries</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.</p>
            </div>
            <div className="admin__card">
               <h3>02. Employer Services</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.</p>
                <h2>04.General Inquiries</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.</p>
            </div>
                </div>
          </div>
            <img className='png' src={Xarita} alt="" />
            <div className="locations">
                <div className="locat__card">
                   <h2>Office</h2>
                   <p>205 North Michigan Avenue, Suite 810</p>
                   <p>Chicago, 60601, USA</p>
                   <p>Phone: (123) 456-7890</p>
                   <p>Email: contact@Evara.com</p>
                   <button><CiLocationOn />View Map</button>
                </div>
                <div className="locat__card">
                   <h2>Studio</h2>
                   <p>205 North Michigan Avenue, Suite 810</p>
                   <p>Chicago, 60601, USA</p>
                   <p>Phone: (123) 456-7890</p>
                   <p>Email: contact@Evara.com</p>
                   <button><CiLocationOn />View Map</button>
                </div>
                <div className="locat__card">
                   <h2>Shop</h2>
                   <p>205 North Michigan Avenue, Suite 810</p>
                   <p>Chicago, 60601, USA</p>
                   <p>Phone: (123) 456-7890</p>
                   <p>Email: contact@Evara.com</p>
                   <button><CiLocationOn />View Map</button>
                </div>
            </div>
            <div className="form__title">
              <h2>Contact From</h2>
              <h1>Drop Us a Line</h1>
              <p>Your email address will not be published. Required fields are marked *</p>
               <div className="form__df">
               <div className="form__content">
                <div>
                <span className='span'>
                  <input type="text" placeholder='First Name' />
                  <input type="text" placeholder='Your Phone' />
                </span>
                <span className='span'>
                 <input type="text" placeholder='Your email' />
                  <input type="text" placeholder='Subject' />
                </span>
                </div>
                <input className='input' type="text" />
                 </div>
                 <img src={Woman} alt="" />
               </div>
              <button>Send Massage</button>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Admin
