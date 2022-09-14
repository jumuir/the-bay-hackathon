import React from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Dress from '../../Assets/Images/floralchiffon-dress.jpg';
import Truck from '../../Assets/Icons/shipping-icon.svg';
import Gift from '../../Assets/Icons/gift-Icon.svg';
import './DetailsPage.scss';

const DetailsPage = () => {
  return (
    
<div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={Dress} className="product-detail-image" alt='dress' />
          </div>
          <div className="small-images-container">
            
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>Gabby Skye</h1>
          <h2>Floral-Print Chiffon Highneck Mini Dress</h2>
          <p className="price">$138</p>

          <p className="product-message-text">Clearance * Get $50 in HB Rewards points when you spend $250</p>

          <div className="product-free-shipping">
            <div className="product-free-shipping-container">
              <div className="product-free-shipping-label">
                <img className="product-free-shipping-truck" src={Truck} alt='truck' />
                <p className="product-free-shipping-desc">
                  <span className="product-free-shipping-bold">Free shipping*</span> on orders over $49 from The Bay</p>
              </div>
            </div>
          </div>

          <div className="product-message-section">
<span className="product-message-text">
Save 20.70*</span>
with a Hudson’s Bay Mastercard®. <a href="https://www.thebay.com/content/instant-credit-offer"className="product-message-link">Apply Now</a>
</div>

<div  class="product-gift-container">
<img className="product-gift-box" src={Gift} alt='giftbox' />
<div className="product-gift-desc">Eligible for Gift Receipt</div>
</div>

<div className='product-sale-container'>
  <div className='product-sale-colour'>Colour: BLACK </div>
  <div className='product-sale-size'>Size</div>

  <fieldset>
<legend className='product-sale-size-chart'></legend>
<ul  class="product-sale-size-grid">
<li className='product-sale-size-box'>2</li>
<li className='product-sale-size-box'>4</li>
<li className='product-sale-size-box'>6</li>
<li className='product-sale-size-box'>8</li>
<li className='product-sale-size-box'>10</li>
<li className='product-sale-size-box'>12</li>
 <li className='product-sale-size-box'>14</li>
 <li className='product-sale-size-box'>16</li>
</ul>
</fieldset>

</div>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (10)
            </p>
          </div>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus"><AiOutlineMinus /></span>
              <span className="num">1</span>
              <span className="plus"><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" >Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
            </div>
          </div>
      </div>
    </div>
  )
}

export default DetailsPage