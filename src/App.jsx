import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nest from './assets/Header-nest.png'
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineRefresh } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import Browse from './assets/browse-header.svg'
import Deals from './assets/deals.svg'
import { SlEarphonesAlt } from "react-icons/sl";
import Fresh from './assets/home-bg-1.jpg'
import { PiTelegramLogo } from "react-icons/pi";
import Home from './companent/home/Home'
import Login from './companent/login/Login'
import { CiLocationOn } from "react-icons/ci";
import { GoStopwatch } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiPinterestLogoBold } from "react-icons/pi";
import { LuYoutube } from "react-icons/lu";
import { NavLink, Route, Routes } from 'react-router-dom'
import SIngleRoute from './companent/single-route/SIngleRoute'
import Auth from './companent/auth/Auth'
import Admin from './companent/Admin/Admin'

// import SingleRoute from './companent/single-route/SIngleRoute'



function App() {
//   const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false)
  console.log(toggle);

  return (
    <>
       <header className='header_top'>
        <div className="container">
            <div className="header_top_box">
                <span className='header_top_span_first'><p>About Us</p>| <p>MyAccount</p> | <p>Wishlist</p> | <p>Order Tracking</p></span>

                <span className='header_top_span_last'><p>Need help?</p> <p>Call Us:</p> <p className='header_top_span_last_par'> 1800 900  </p>  |  
                    <select className='select-1-1' name="" id="">
                        <option className='select-1' value="">English</option>
                        <option className='select-1' value="">Uzbek</option>
                        <option className='select-1' value="">Yaponia</option>
                    </select>
                      |  
                    <select className='select-1-1' name="" id="">
                        <option className='select-1' value="">USD</option>
                        <option className='select-1' value="">SOM</option>
                        <option className='select-1' value="">JP</option>
                    </select>
                </span>
            </div>
        </div>
       </header>


       <div className="row-first">

       </div>

       <section className="header_second">
        <div className="container">
            <div className="header_second_box">
              <NavLink to={'/'}>
              <img src={Nest} alt="" />
              </NavLink>
                <div className="header_second_search">
                    <div className="header_second_search_input">
                        <select className='header_second_search_select' name=""id="">
                            <option value="">All Categories  </option> 
                            <option value="">All Categories  </option> 
                            <option value="">All Categories  </option> 
                        </select>   
                        |    
                    <input type="text" placeholder=' Search for items' />
                    </div>
                        <FaSearch />
                        
                </div>

                <div className="header_second_location">
                    <SlLocationPin />.
                    <select name="" id="">
                        <option value="">Your Location</option>
                        <option value="">Your Location</option>
                    </select>
                </div>

                <div className="header_second_selection">
                    <NavLink to={'/'} className="header_second_selection_compare">
                    <HiOutlineRefresh />

                        <h3>HOME</h3>
                    </NavLink>
               
                    <div className="header_second_selection_compare">
                    <FaRegHeart />
                        <h3>Compare</h3>
                    </div>
                
                    <div className="header_second_selection_compare">
                    <IoCartOutline />

                        <h3>Compare</h3>
                    </div>
                    <NavLink to={'/login'} className="header_second_selection_compare">
                    <MdOutlinePersonOutline />

                        <h3>Compare</h3>
                    </NavLink>
                </div>
            

            </div>
        </div>
          
       </section>

       <div className="row_second"></div>

       <section className="header_last">
        <div className="container">
            <div className="header_last_box">
               <div className={`saidbar ${toggle ? "show" : ""}`}>
                 <div className="header_last_box_category">
                    <span className='header_last_box_category_span'> <img src={Browse} alt="" /> <p> Browse </p>
                        <select name="" id="">
                            <option value="">All Categories</option>
                            <option value="">All Categories</option>
                        </select>
                    </span>

                    <div className="header_last_deals">
                        <img src={Deals} alt="" />
                        <p>Deals</p>
                    </div>

                    <select className='header_last_select_home' name="" id="">
                        <option value="">Home</option>
                        <option value="">Home</option>
                        <option value="">Home</option>
                    </select>

                    <div className="header_last_select_home">
                        <p>Home</p>
                    </div>

                    <select className='header_last_select_home' name="" id="">
                        <option value="">Shop</option>
                        <option value="">Shop</option>
                        <option value="">Shop</option>
                    </select>

                    <select className='header_last_select_home' name="" id="">
                        <option value="">Vendors</option>
                        <option value="">Vendors</option>
                        <option value="">Vendors</option>
                    </select>

                    <select className='header_last_select_home' name="" id="">
                        <option value="">Mage menu</option>
                        <option value="">Mage menu</option>
                        <option value="">Mage menu</option>
                    </select>

                    <select className='header_last_select_home' name="" id="">
                        <option value="">Blog</option>
                        <option value="">Blog</option>
                        <option value="">Blog</option>
                    </select>

                    <div className="header_last_select_home">
                        <p>Contact</p>
                    </div>
                </div>
               </div>
                
                <div className="header_last_box_earphone">
                    <SlEarphonesAlt />
                    <div className="header_last_box_earphone_child">
                        <h2>1900-888</h2>
                        <h5>24/7 Support Center</h5>
                    </div>

                </div>
                <button className='btn-saidbar' onClick={() => setToggle(!toggle)}><CiMenuBurger className='menu-svg' /></button>
            </div>
        </div>
          {/* <div className={`saidbar ${toggle ? "show" : ""}`}>  </div> */}

       </section>
       
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products/:id' element={<SIngleRoute/>}/>
        <Route path='/' element={<Auth/>}>
            <Route path='/admin' element={<Admin/>}>

            </Route>

        </Route>
       </Routes>


       <footer>
        <section className="footer_top">
            <div className="container">
                <div className="footer_top_box">
                    <div className="footer_top_nest">
                        <img src={Nest} alt="" />
                        <p className='footer_top_nest_par_1'>Awesome grocery store website template</p>
                        <div className="footer_top_nest_par_2">
                            <span>< ><CiLocationOn />
                            <p>Address: 5171 W Campbell Ave</p></></span>
                            <p>undefined Kent, Utah 53127 United States</p>
                        </div>
                        <span className='paragriph_1-1'><SlEarphonesAlt />
                            <p>Call Us:(+91) - 540-025-124553</p></span>
                        <span className='paragriph_1-1'><PiTelegramLogo />
                            <p>Email:sale@Nest.com</p></span>
                        <span className='paragriph_1-1'><GoStopwatch />
                            <p>Hours:10:00 - 18:00, Mon - Sat</p></span>
                    </div>  

                    <div className="footer_top_nest footer_top_box_paragriph">
                        <h4>Company</h4>
                        <p>About Us</p>
                        <p>Delivery Information</p>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                        <p>Contact Us</p>
                        <p>Support Center</p>
                        <p>Careers</p>
                    </div>

                    <div className="footer_top_account">
                        <h2>Account</h2>
                        <p> Sign In</p>
                        <p>  View Cart</p>
                        <p>My Wishlist</p>
                        <p> Track My Order </p>
                        <p>Help Ticket</p>
                        <p>Shipping Details</p>
                        <p>Compare products </p>
                    </div>

                    <div className="footer_top_account">
                        <h2>Corparate</h2>
                        <p> Become a Vendor  </p>
                        <p>Affiliate Program </p>
                        <p>Farm Business</p>
                        <p> Farm Careers </p>
                        <p>Our Suppliers</p>
                        <p>Accessibility</p>
                        <p> Promotions</p>
                    </div>
                    <div className="footer_top_account">
                        <h2>Popular</h2>
                        <p> Milk & Flavoured Milk </p>
                        <p> Butter and Margarine </p>
                        <p>Eggs Substitutes</p>
                        <p> Marmalades </p>
                        <p> Sour Cream and Dips</p>
                        <p> Tea & Kombucha</p>
                        <p>Cheese </p>
                    </div>
                </div>
                <div className="row-4"></div>
            </div>
        </section>

        <section className="footer_bot">
            <div className="container">
                <div className="footer_bot_box">
                    <div className="footer_bot_text">
                        <span>2022 <p className='green'>Nest</p><p>- HTML Ecommerce Template</p></span>
                        <p>All rights reserved</p>
                    </div>

                    <div className="footer_bot_phone">
                        <div className="footer_bot_call">
                        <FiPhoneCall />

                            <div className="footer_bot_call_par">
                                <h2>1900 - 6666</h2>
                                <h5>Working 8:00 - 22:00</h5>
                            </div>
                        </div>
                        <div className="footer_bot_call">
                        <FiPhoneCall />
                            <div className="footer_bot_call_par">
                                <h2>1900 - 8888</h2>
                                <h5>24 / 7 Support Center</h5>
                            </div>
                        </div>
                    </div>

                    <div className="footer_bot_links">
                        <span><p className='footer_bot_links_parp'>Follow Us</p> <FaFacebookF /> <FaTwitter />
                         <FaInstagram /> <PiPinterestLogoBold /> <LuYoutube />
                        </span>
                        <p>Up to 15% discount on your first subscribe</p>
                    </div>
                </div>
            </div>
        </section>
       </footer>



     

    
     
    </>
  )
}

export default App

