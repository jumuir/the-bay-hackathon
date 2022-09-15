import React, { useState } from 'react';
import './Header.scss';
import { IoBagSharp, IoHeartOutline } from 'react-icons/io5';
import { ImLocation } from 'react-icons/im'
import Dropdown from '../Dropdown/Dropdown';
import { Link, useNavigate } from "react-router-dom";


const Header = () => {
    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
        setDropdown(true);
    };
    
    const onMouseLeave = () => {
        setDropdown(false);
    };

    const handleClick = () => {
        setDropdown(!dropdown);
    };
    
    const navigate = useNavigate();

    const openCart = () => {
        navigate(`/cart`)
      }


    return (<>
        <section className='header-banner'>
            <div className='header-banner__inner'>
                <div className='header-banner__inner-arrow-left'></div>
                <div className='header-banner__inner-text'>
                    <span>Free In-Store Returns. Exclusions Apply. </span>
                    <span className='underline'>DETAILS</span>
                </div>
                <div className='header-banner__inner-arrow-right'></div>
            </div>
        </section>
        <section className='header-main'>
            <div className='header-main__utils-container'>
                <p className='header-main__utils header-main__utils--border'>
                    Orders & Returns
                </p>
                <p className='header-main__utils header-main__utils--border'>
                    Gift Registry
                </p>
                <p className='header-main__utils'>
                    Français
                </p>
            </div>
            <div className='header-main__row'>
                <Link to='/'>
                    <div className='header-main__row-logo'></div>
                </Link>
                <div className='header-main__row-search-bar'>
                    <input className='header-main__row-search' placeholder='Search for Products or Brands'/>  
                </div>
                <div className='header-main__row-right'>
                    <div className='header-main__row-info'>
                        <p className='header-main__row-info--top'>Justin, Rewards Member</p>
                        <p className='header-main__row-info--bottom'> 0 Points Available</p>
                    </div>
                    <div className='header-main__row-locations'>
                        <ImLocation size={24}/>
                    </div>
                    <div className='header-main__row-wishlist'>
                        <IoHeartOutline size={24}/>
                    </div>
                    <div className='header-main__row-cart'>
                        <IoBagSharp onClick={openCart} size={24}/>
                    </div>
                </div>

            </div>
        </section>
        <section className='header-nav'>
            <div className='header-nav__item'>NEW</div>
            <div className='header-nav__item'>DESIGNER</div>
            <div className='header-nav__item' onMouseEnter={onMouseEnter} onClick={handleClick} onMouseLeave={onMouseLeave}>
                WOMEN
                {dropdown && <Dropdown /> }
            </div>
            <div className='header-nav__item'>SHOES</div>
            <div className='header-nav__item'>BEAUTY</div>
            <div className='header-nav__item'>MEN</div>
            <div className='header-nav__item'>KIDS & BABY</div>
            <div className='header-nav__item'>HOME</div>
            <div className='header-nav__item'>SPORTS & REC</div>
            <div className='header-nav__item'>EVERYTHING ELSE</div>
            <div className='header-nav__item'>OUR BRANDS</div>
            <div className='header-nav__item'><span className='red'>SALE</span></div>
            <div className='header-nav__item'>&#127873; GIFTS</div>
        </section>
    </>)
}

export default Header