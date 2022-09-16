import React from 'react';
import './CartPage.scss';
import '../../Components/Header/Header.scss';
import '../../Pages/BrowsePage/BrowsePage.scss';
import '../../Pages/DetailsPage/DetailsPage.scss';
import { AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import {FaChevronRight} from 'react-icons/fa';
import Close from '../../Assets/Icons/close-icon.svg';
import Dress from '../../Assets/Images/floralchiffon-dress.jpg';
import PuffDress from '../../Assets/Images/puffedsleeve-dress.jpg';
import Plus from '../../Assets/Icons/addicon.svg';
import FauxJacket from '../../Assets/Images/fauxjacket.jpg';


const CartPage = () => {
  return (
    <>
    <div className='shopping-bag'>
    <div className='shopping-bag-container'><span>Shopping Bag (1)</span>
    <section className='shopping-bag__body'>
    <div className='shopping-bag-items'>
    <section className='shopping-bag-nav'>
            <div className='shopping-bag__item'>Item(s)</div>
            <div className='shopping-bag__item'>Delivery</div>
            <div className='shopping-bag__item'>Price</div>
            <div className='shopping-bag__item'>Qty</div>
            <div className='shopping-bag__item'>Total</div>
        </section>
    
      <div className='shopping-bag__item-card'>
      <div className='shopping-bag__item-card-image'>
        <img src={Dress} alt='dress'/>
      </div>
      <div className='shopping-bag__item-card-title-bar'>
       <h3 className='shopping-bag__item-card-title'>Calvin Klein</h3>
       <p className='shopping-bag__item-card-desc'>Floral Chiffon Midi Dress</p>
       <p className='shopping-bag__item-card-desc'>item no: 78691296</p>
       <p className='shopping-bag__item-card-desc'>Size: 2</p>
       <p className='shopping-bag__item-card-desc'>Colour: Fall Green</p>
       <p className='shopping-bag__item-card-sale'>Final Sale</p>
      </div>

      <div className='shopping-bag__item-card-delivery'>
      <form>
        <div className='bag-input'>
              <input type="radio" />
              <label htmlFor="shipto" >
                Ship this Item
              </label></div>
              <div className='bag-input'>   
            <input type="radio" />
            <label htmlFor="shipto" >
              Pickup in Store
            </label></div>
          </form>
      </div>
    
     <div className='shopping-bag__item-card-price-bar'>
      <p className='shopping-bag__item-card-price--old'>$179</p>
      <p className='shopping-bag__item-card-price'>$125.30</p>
     </div>
     
     <div className='shopping-bag__item-card-qty'>
            <p className="shopping-bag__quantity-desc">
              <span className="shopping-bag__minus"><AiOutlineMinus /></span>
              <span className="shopping-bag__num">1</span>
              <span className="shopping-bag__plus"><AiOutlinePlus /></span>
            </p>
     </div>
    
     <div className='shopping-bag__item-card-total'>
      <p  className='shopping-bag__item-card-sum'>$125.30</p>
     </div>

     <div className='shopping-bag__item-card-icon'>
      <img src={Close} alt='close'/>
     </div>

      </div>
     </div>

     
     
     <div className='shopping-bag-summary'>
      <div className='shopping__summary-container'>
        <h2 className='shopping__summary-title'>Order Summary</h2>

        <div className='shopping__summary-order-container'>
          <h3 className='shopping__summary-order-subtotal'>Subtotal</h3>
          <div className='shopping__summary-order-num'>$491.60</div>
        </div>

        <div className='shopping__summary-order-container'>
          <h3 className='shopping__summary-order-subtotal'>Shipping Fee</h3>
          <div className='shopping__summary-order-num'>FREE</div>
        </div>

        <div className='shopping__summary-order-container'>
          <h3 className='shopping__summary-order-subtotal'>GST/HST</h3>
          <div className='shopping__summary-order-num'>$63.90</div>
        </div>
        <div className='shopping__summary-order-line'></div>

        <div className='shopping__summary-order-container'>
          <h3 className='shopping__summary-order-subtotal shopping__summary-order-num-bold'>Estimated Total</h3>
          <div className='shopping__summary-order-num shopping__summary-order-num-bold'>$688.24</div>
        </div>

        <div className='shopping__summary-order-container'>
          <h3 className='shopping__summary-order-subtotal'>HB Reward Points</h3>
          <div className='shopping__summary-order-num shopping__summary-order-num-bold'>491</div>
        </div>
        <p className='shopping__summary-order-desc'>Items are not reserved until checkout is complete</p>
        <div className='shopping__summary-order-line'></div>

        <div className='shopping__summary-order-container'>
          <h3 className='shopping__summary-order-subtotal'>Promo Code</h3>
          <img className='shopping__summary-order-num' src={Plus} alt='plus'/>
        </div>

      </div>
     </div>

      
    </section>

    <div className='wish-list__title'>Wish List (2)</div>
    <section className='shopping-bag__body'>
    <div className='shopping-bag-items'>
    <section className='shopping-bag-nav'>
            <div className='shopping-bag__item'>Item(s)</div>
            <div className='shopping-bag__item'>Delivery</div>
            <div className='shopping-bag__item'>Price</div>
            <div className='shopping-bag__item'>Qty</div>
            <div className='shopping-bag__item'>Total</div>
        </section>
    
      <div className='shopping-bag__item-card'>
      <div className='shopping-bag__item-card-image'>
        <img src={PuffDress} alt='dress'/>
      </div>
      <div className='shopping-bag__item-card-title-bar'>
       <h3 className='shopping-bag__item-card-title'>Free People</h3>
       <p className='shopping-bag__item-card-desc'>Puffed-Sleeve Sheath Dress</p>
       <p className='shopping-bag__item-card-desc'>item no: 78691296</p>
       <p className='shopping-bag__item-card-desc'>Size: XS</p>
       <p className='shopping-bag__item-card-desc'>Colour: Black</p>
      </div>

      <div className='shopping-bag__item-card-delivery'>
      <form>
            <div className='bag-input'>
              <input type="radio" />
              <label htmlFor="shipto" >
                Ship this Item
              </label></div>
            <div className='bag-input'>
            <input type="radio" />
            <label htmlFor="shipto" >
              Pickup in Store
            </label></div>
          </form>
      </div>
    
     <div className='shopping-bag__item-card-price-bar'>
      <p className='shopping-bag__item-card-price'>$99</p>
     </div>
     
     <div className='shopping-bag__item-card-qty'>
            <p className="shopping-bag__quantity-desc">
              <span className="shopping-bag__minus"><AiOutlineMinus /></span>
              <span className="shopping-bag__num">1</span>
              <span className="shopping-bag__plus"><AiOutlinePlus /></span>
            </p>
     </div>
    
     <div className='shopping-bag__item-card-total'>
      <p  className='shopping-bag__item-card-sum'>$99</p>
     </div>

     <div className='shopping-bag__item-card-icon'>
      <img src={Close} alt='close'/>
     </div>

      </div>
     </div>
     
     <div className='shopping-bag-summary'>
      <div className='shopping__summary-container'>

      <div className="buttons">
            <button type="button" className="add-to-cart" >Checkout</button>
          </div>

          <div className="buttons">
            <button type="button" className="shopping__summary-paypal" ></button>
          </div>
         
          <div className='shopping__summary-order-container'>
          <h3 className='shopping__summary-order-subtotal'>Continue Shopping</h3>
          <div className='shopping__summary-num'><FaChevronRight/></div>
          </div>
      </div>
     </div>

      
    </section>

    <section className='shopping-bag__body'>
    <div className='shopping-bag-items'>
    
      <div className='shopping-bag__item-card'>
      <div className='shopping-bag__item-card-image'>
        <img src={FauxJacket} alt='dress'/>
      </div>
      <div className='shopping-bag__item-card-title-bar'>
       <h3 className='shopping-bag__item-card-title'>Free People</h3>
       <p className='shopping-bag__item-card-desc'>Relaxed Fit Faux Fur Jacket</p>
       <p className='shopping-bag__item-card-desc'>item no: 47655392</p>
       <p className='shopping-bag__item-card-desc'>Size: XS</p>
       <p className='shopping-bag__item-card-desc'>Colour: Mesa Rose</p>
      </div>

      <div className='shopping-bag__item-card-delivery'>
      <form>
      <div className='bag-input'>

              <input type="radio" />
              <label htmlFor="shipto" >
                Ship this Item
              </label></div>
            <div className='bag-input'>

            <input type="radio" />
            <label htmlFor="shipto" >
              Pickup in Store
            </label></div>
          </form>
      </div>
    
     <div className='shopping-bag__item-card-price-bar'>
      <p className='shopping-bag__item-card-price'>$248</p>
     </div>
     
     <div className='shopping-bag__item-card-qty'>
            <p className="shopping-bag__quantity-desc">
              <span className="shopping-bag__minus"><AiOutlineMinus /></span>
              <span className="shopping-bag__num">1</span>
              <span className="shopping-bag__plus"><AiOutlinePlus /></span>
            </p>
     </div>
    
     <div className='shopping-bag__item-card-total'>
      <p  className='shopping-bag__item-card-sum'>$248</p>
     </div>

     <div className='shopping-bag__item-card-icon'>
      <img src={Close} alt='close'/>
     </div>

      </div>
     </div>

     
     
     <div className='shopping-bag-summary'>
      <div className='shopping__sumarry-container'></div>
     </div>

      
    </section>
    </div>
    </div>
    </>
  )
}

export default CartPage