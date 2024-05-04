import React, { useState, useEffect } from "react";
import "./Home.css";
import { PiTelegramLogo } from "react-icons/pi";
import Fresh from "../../assets/home-bg-1.jpg";
import Food1 from "../../assets/food-1.svg";
import Food2 from "../../assets/food-2.svg";
import Food3 from "../../assets/food-3.svg";
import Food4 from "../../assets/food-4.svg";
import Food5 from "../../assets/food-5.svg";
import Food6 from "../../assets/food-6.svg";
import Food7 from "../../assets/food-7.svg";
import Food8 from "../../assets/food-8.svg";
import Food9 from "../../assets/food-9.svg";
import Food10 from "../../assets/food-10.svg";
import Opion1 from "../../assets/opion-1.svg";
import Opion2 from "../../assets/opion-2.svg";
import Opion3 from "../../assets/opion-3.svg";
import All from "../../assets/alll.svg";
import Star from "../../assets/star-product.svg";
import { IoCartOutline } from "react-icons/io5";
import axios from "../../api/index";
import { Link, NavLink } from "react-router-dom";
import Hero from "../../assets/hero-bg.png";
import Inter1 from "../../assets/inter-1.png";
import Inter2 from "../../assets/inter-2.png";
import Inter3 from "../../assets/inter-3.png";
import Inter4 from "../../assets/inter-4.png";
import Inter5 from "../../assets/inter-5.png";
import Hero2 from '../../assets/home-bg-1.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/products?limit=15")
      .then((arr) => setData(arr.data))
      .catch((arrr) => console.log("arrr>>>>", arrr));
  }, []);

  let links = data?.map((el) => (
    <div className="product_card">
      <button className="product_card_button_1">Hot</button>
      <Link to={`/products/${el.id}`}>
        <img className="product_card_img_api" src={el.image} alt="" />
      </Link>
      <div className="product_card_texts">
        <p className="product_card_par_1">Snak</p>
        <h3 className="product_card_h3">{el.title}</h3>
        <span className="product_card_span">
          <img src={Star} alt="" /> <p className="product_card_par_2"> (4.0)</p>
        </span>
        <p className="product_card_par_3">
          By <p className="product_card_par_4">NestFood</p>
        </p>
        <div className="product_card_price">
          <span className="product_card_price_span">
            <h3 className="product_card_price_span_first">{el.price}</h3>{" "}
            <p className="product_card_price_span_under">$28.8</p>
          </span>
          <button className="product_card_price_button">
            <IoCartOutline /> Add
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <section className="hero">
        <div className="container">


        <Swiper navigation={true} 
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
         loop={true} modules={[Navigation, Autoplay]} className="mySwiper">
        <SwiperSlide>
        <div className="logo_box">
            <div className="hero_text">
              <h1>Stay home & get your daily needs from our shop</h1>
              <span className="hero_text_span">
                Start You'r Daily Shopping with <p>Nest Mart </p>
              </span>
              <div className="hero_text_search">
                <div className="hero_text_search_input">
                  <PiTelegramLogo className="fresh_search_svg" />
                  <input type="text" placeholder="Your email address" />
                </div>
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="logo_box">
            <div className="hero_text">
              <h1>Stay home & get your daily needs from our shop</h1>
              <span className="hero_text_span">
                Start You'r Daily Shopping with <p>Nest Mart </p>
              </span>
              <div className="hero_text_search">
                <div className="hero_text_search_input">
                  <PiTelegramLogo className="fresh_search_svg" />
                  <input type="text" placeholder="Your email address" />
                </div>
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>


          {/* <div className="logo_box">
            <div className="hero_text">
              <h1>Stay home & get your daily needs from our shop</h1>
              <span className="hero_text_span">
                Start You'r Daily Shopping with <p>Nest Mart </p>
              </span>
              <div className="hero_text_search">
                <div className="hero_text_search_input">
                  <PiTelegramLogo className="fresh_search_svg" />
                  <input type="text" placeholder="Your email address" />
                </div>
                <button>Subscribe</button>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <section className="food">
        <div className="container">
          <div className="food_box">
            <h1>Featured Categories</h1>
            <p>Cake & Milk</p>
            <p>Coffes & Teas</p>
            <span>Pet Foods</span>
            <p>Vegetables</p>
          </div>

          <div className="food_cards">
            <div className="food_card item1">
              <img src={Food1} alt="" />
              <h3>Cake & Milk</h3>
              <p>26 items</p>
            </div>
            <div className="food_card item2">
              <img src={Food2} alt="" />
              <h3>Oganic Ciwi</h3>
              <p>28 items</p>
            </div>
            <div className="food_card item3">
              <img src={Food3} alt="" />
              <h3>Peach</h3>
              <p>14 items</p>
            </div>
            <div className="food_card item4">
              <img src={Food4} alt="" />
              <h3>Read Apple</h3>
              <p>54 items</p>
            </div>
            <div className="food_card item5">
              <img src={Food5} alt="" />
              <h3>Snac</h3>
              <p>56 items</p>
            </div>
            <div className="food_card item6">
              <img src={Food6} alt="" />
              <h3>Vegetables</h3>
              <p>72 items</p>
            </div>
            <div className="food_card item7">
              <img src={Food7} alt="" />
              <h3>Sravberry</h3>
              <p>36 items</p>
            </div>
            <div className="food_card item8">
              <img src={Food8} alt="" />
              <h3>Black Plum</h3>
              <p>123 items</p>
            </div>
            <div className="food_card item9">
              <img src={Food9} alt="" />
              <h3>Custard Apple</h3>
              <p> 34 items</p>
            </div>
            <div className="food_card item10">
              <img src={Food10} alt="" />
              <h3>Coffe item Tea</h3>
              <p>89 items</p>
            </div>
          </div>

          <div className="food_opion">
            <div className="food_opion_card">
              <img src={Opion1} alt="" />
              <div className="food_opion_text">
                <h3>Everyday Fresh & Clean with Our Products</h3>
                <button>Shop Now</button>
              </div>
            </div>
            <div className="food_opion_card">
              <img src={Opion2} alt="" />
              <div className="food_opion_text">
                <h3>Everyday Fresh & Clean with Our Products</h3>
                <button>Shop Now</button>
              </div>
            </div>
            <div className="food_opion_card">
              <img src={Opion3} alt="" />
              <div className="food_opion_text">
                <h3>Everyday Fresh & Clean with Our Products</h3>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="products">
        <div className="container">
          <div className="products_title">
            <h3>Populr Products</h3>
            <span className="products_title_span">
              <p className="product_all">All</p> <p>Milks & Dairies</p>
              <p>Coffes & Teas</p>
              <p>Pet Foods</p>
              <p>Meats</p>
              <p>Vegetables</p>
              <p>Fruist</p>
            </span>
          </div>
          <div className="products_box">
            {/* <div className="product_card">
                <button className='product_card_button_1'>Hot</button>
                <img src={All} alt="" />
                <div className="product_card_texts">
                <p className='product_card_par_1'>Snak</p>
                <h3 className='product_card_h3'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h3>
                <span className='product_card_span'><img src={Star} alt="" /> <p className='product_card_par_2'> (4.0)</p></span>
                <p className='product_card_par_3'>By <p className='product_card_par_4'>NestFood</p></p>
                <div className="product_card_price">
                    <span className='product_card_price_span'><h3>$28.85</h3> <p>$28.8</p></span>
                    <button className='product_card_price_button'><IoCartOutline /> Add</button>
                </div>
                </div>
            </div> */}

            {links}
          </div>
        </div>
      </section>


      <section className="hero">
        <div className="container">
          <div className="hero_box">
            <div className="hero_text">
              <h1>Stay home & get your daily needs from our shop</h1>
              <span className="hero_text_span">
                Start You'r Daily Shopping with <p>Nest Mart </p>
              </span>
              <div className="hero_text_search">
                <div className="hero_text_search_input">
                  <PiTelegramLogo className="fresh_search_svg" />
                  <input type="text" placeholder="Your email address" />
                </div>
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="inter">
        <div className="container">
          <div className="inter_box">
            <div className="inter_card">
              <img src={Inter1} alt="" />
              <div className="inter_card_text">
                <h3>Best prices & offers</h3>
                <p>Orders $50 or more</p>
              </div>
            </div>
            <div className="inter_card">
              <img src={Inter2} alt="" />
              <div className="inter_card_text">
                <h3>Free delivery</h3>
                <p>24/7 amazing services</p>
              </div>
            </div>
            <div className="inter_card">
              <img src={Inter3} alt="" />
              <div className="inter_card_text">
                <h3>Great daily deal</h3>
                <p>When you sign up</p>
              </div>
            </div>
            <div className="inter_card">
              <img src={Inter4} alt="" />
              <div className="inter_card_text">
                <h3>Wide assortment</h3>
                <p>Mega Discounts</p>
              </div>
            </div>
            <div className="inter_card">
              <img src={Inter5} alt="" />
              <div className="inter_card_text">
                <h3>Easy returns</h3>
                <p>Within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
