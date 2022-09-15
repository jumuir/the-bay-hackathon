import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Dress from '../../Assets/Images/floralchiffon-dress.jpg';
import Dress1 from '../../Assets/Images/chiffonwrapdress2.webp';
import Olive from '../../Assets/Images/olive.jpg';
import Green from '../../Assets/Images/green.jpg';
import Truck from '../../Assets/Icons/shipping-icon.svg';
import PayBright from '../../Assets/Icons/PayBrightAffirm_NoWhiteSpace_EN.svg';
import Star from '../../Assets/Icons/star-grey.svg';
import Gift from '../../Assets/Icons/gift-Icon.svg';
import Logo from '../../Assets/Logos/bay-logo.svg';
import Plus from '../../Assets/Icons/addicon.svg';
import './DetailsPage.scss';
import '../../Pages/BrowsePage/BrowsePage.scss';

const DetailsPage = () => {
  return (

    <div>
      <section className='browse__top'>
      <div className='browse__path-container'>
        <p className='browse__path'><span className='hover-line'>Home</span> / <span className='hover-line'>Women</span> / <span className='hover-line'>Women's Clothing</span> / <span className='hover-line'>Dresses</span></p>
      </div></section>
      
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={Dress} className="product-detail-image" alt='dress' />
            <img src={Dress1} className="product-detail-image" alt='back of the dress' />
          </div>
          <div className="small-images-container">

          </div>
        </div>

        <div className="product-detail-desc">
          <h1>Calvin Klein</h1>
          <h2>Floral Chiffon Wrap Midi Dress</h2>
          <p className="price">$179</p> <div className='sale-price'>$125.30</div>

          <p className="product-message-text">Clearance + Get $50 in HB Rewards points when you spend $250+</p>

          <div className="product-free-shipping">
            <div className="product-free-shipping-container">
              <div className="product-free-shipping-label">
                <img className="product-free-shipping-truck" src={Truck} alt='truck' />
                <div className="product-free-shipping-desc">
                  Free Shipping Available <span className="product-free-shipping-bold">See Details.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="product-message-section">
            <span className="product-message-text">
              Save 10.35*</span>
            with a Hudson’s Bay Mastercard®. <a href="https://www.thebay.com/content/instant-credit-offer" className="product-message-link">Apply Now</a>
            <div className="">or interest free payments of $17.25 by-weekly with
              <img src={PayBright} className="product-message-image" alt='paybright' /><a href="https://www.thebay.com/content/instant-credit-offer" className="product-message-link" >Learn more</a>
            </div>
          </div>

          <div class="product-gift-container">
            <img className="product-gift-box" src={Gift} alt='giftbox' />
            <div className="product-gift-desc">Eligible for Gift Receipt</div>
          </div>
          <div className="reviews">
            <div>
              <img src={Star} className='reviews-star' alt='grey star' />
              <img src={Star} className='reviews-star' alt='grey star' />
              <img src={Star} className='reviews-star' alt='grey star' />
              <img src={Star} className='reviews-star' alt='grey star' />
              <img src={Star} className='reviews-star' alt='grey star' />
            </div>
            <p className='reviews-number'>
              0 reviews
            </p>
          </div>

          <div className='product-sale-container'>
            <div className='product-sale-colour'>Colour: Olive </div>
            <img src={Olive} className="product-sale-image" alt='olive dress' />
            <img src={Green} className="product-sale-image" alt='green dress' />

            <div className='product-sale-size'>Size: 2</div>

            <ul class="product-sale-size-grid">
              <li className='product-sale-size-box'>2</li>
              <li className='product-sale-size-box'>4</li>
              <li className='product-sale-size-box'>6</li>
              <li className='product-sale-size-box'>8</li>
              <li className='product-sale-size-box'>10</li>
              <li className='product-sale-size-box'>12</li>
              <li className='product-sale-size-box'>14</li>
              <li className='product-sale-size-box'>16</li>
            </ul>

          </div>
          <div className="quantity">
            <p className="quantity-desc">
              <span className="minus"><AiOutlineMinus /></span>
              <span className="num">1</span>
              <span className="plus"><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" >Add to Bag</button>
          </div>

          <div className="product-details-bay">
            <img className="product-details-logo" src={Logo} alt='logo' />
            <div className="product-details-desc">
              Sold by The Bay</div>
          </div>
          <div className='product-details-desc'>Shipping & Pickup</div>
          <form>
            <div>
              <input type="radio" />
              <label for="shipto" >
                Ship this Item
              </label></div>
            <input type="radio" />
            <label for="shipto" >
              Pickup in Store
            </label>
          </form>

          <div className='product-details-blue'>Estimated Hudson’s Bay Rewards points earned on this item: <span>125</span> </div>

          <div className='product-sale-container'>
            <div className='product-details-desc-flex'>Details
              <img src={Plus} alt='plus' />
            </div>
            <ul>
              A midi dress covered in florals and a flattering self-belt at the waist
              <li>Crossover V-neck</li>
              <li>Three-quarter sleeves</li>
              <li>Elasticized cuffs</li>
              <li>Self-belt at the waist</li>
              <li>Back zip</li>
              <li>Floral print allover</li>
              <li>Chiffon fabric</li>
              <li>100% polyester</li>
              <li>Dry clean</li>
              <li>Imported</li>
            </ul>
            <ul className='product-details-list'>SIZE & FIT
              <li>Shift silhouette</li>
              <li>About 45.5'' from shoulder to hem</li></ul>
              Style Code: 0600092873016
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage