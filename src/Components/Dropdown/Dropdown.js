import React from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.scss';

const Dropdown = () => {
    return (<>
        <div className='dropdown__overlay'></div>
        <section className='dropdown__container'>
            <div className='dropdown__column'>
                <h2 className='dropdown__heading'>New Arrivals</h2>
                <h2 className='dropdown__heading'>Bay Everyday</h2>
                <h2 className='dropdown__heading'>Price Matched</h2>
                <h2 className='dropdown__heading'>Best Sellers</h2>
                <h2 className='dropdown__heading'>Fall Trends</h2>
                <h2 className='dropdown__heading'>Kleinfeld</h2>
                <h2 className='dropdown__heading'>Shop by Occasion</h2>
                <p className='dropdown__item'>Swim Drop</p>
                <p className='dropdown__item'>Resort Ready</p>
                <p className='dropdown__item'>Wedding Guest Shop</p>
                <h2 className='dropdown__heading'>Trending</h2>
                <p className='dropdown__item'>Best Under $50</p>
                <p className='dropdown__item'>It List</p>
                <p className='dropdown__item'>Layered Looks</p>
                <h2 className='dropdown__heading'>Young Adult</h2>
                <p className='dropdown__item'>Best Under $50</p>
                <p className='dropdown__item'>It List</p>
                <p className='dropdown__item'>Layered Looks</p>
                <h2 className='dropdown__heading red'>New Markdowns</h2>
            </div>

            <div className='dropdown__column'>
                <h2 className='dropdown__heading'>Clothing</h2>
                <p className='dropdown__item'>Activewear</p>
                <p className='dropdown__item'>Bras, Lingerie & Socks</p>
                <p className='dropdown__item'>Coats, Jackets & Blazers</p>
                <Link to='/dresses'>
                    <p className='dropdown__item'>Dresses</p>
                </Link>
                <p className='dropdown__item'>Jeans</p>
                <p className='dropdown__item'>Jumpsuits & Rompers</p>
                <p className='dropdown__item'>Loungewear</p>
                <p className='dropdown__item'>Matching Sets</p>
                <p className='dropdown__item'>Pajamas & Robes</p>
                <p className='dropdown__item'>Pants & Leggings</p>
                <p className='dropdown__item'>Shorts</p>
                <p className='dropdown__item'>Skirts</p>
                <p className='dropdown__item'>Sweaters & Cardigans</p>
                <p className='dropdown__item'>Sweatshirts & Hoodies</p>
                <p className='dropdown__item'>Swimsuits & Cover-ups</p>
                <p className='dropdown__item'>Tops</p>
            </div>
            
            <div className='dropdown__column'>
                <h2 className='dropdown__heading'>Shoes</h2>
                <p className='dropdown__item'>Boots</p>
                <p className='dropdown__item'>Comfort Shoes</p>
                <p className='dropdown__item'>Loafers & Oxfords</p>
                <p className='dropdown__item'>Sneakers</p>
                <p className='dropdown__item'>Slippers</p>
                <h2 className='dropdown__heading'>Handbags</h2>
                <p className='dropdown__item'>Backpacks</p>
                <p className='dropdown__item'>Crossbody Bags</p>
                <p className='dropdown__item'>Shoulder Bags</p>
                <p className='dropdown__item'>Totes</p>
                <p className='dropdown__item'>Wallets & Wristlets</p>
                <h2 className='dropdown__heading'>Pre-Loved</h2>
                <p className='dropdown__item'>Accessories</p>
                <p className='dropdown__item'>Clothing</p>
                <p className='dropdown__item'>Handbags</p>
                <p className='dropdown__item'>Shoes</p>
            </div>
            
            <div className='dropdown__column'>
                <h2 className='dropdown__heading'>Plus</h2>
                <h2 className='dropdown__heading'>Petite</h2>
                <h2 className='dropdown__heading'>Maternity</h2>
                <h2 className='dropdown__heading'>Accessories</h2>
                <p className='dropdown__item'>Hair Accessories</p>
                <p className='dropdown__item'>Hats</p>
                <p className='dropdown__item'>Scarves & Wraps</p>
                <p className='dropdown__item'>Sunglasses</p>
                <h2 className='dropdown__heading'>Jewellery & Watches</h2>
                <p className='dropdown__item'>Fine Jewellery</p>
                <p className='dropdown__item'>Jewellery</p>
                <p className='dropdown__item'>Watches</p>
                <p className='dropdown__item'>Sterling Silver</p>
                <h2 className='dropdown__heading'>Luggage & Travel</h2>
                <h2 className='dropdown__heading'>Shops & Guides</h2>
                <p className='dropdown__item'>Bra Fitting & Sizing Guide</p>
                <p className='dropdown__item'>The Watchesd Guide</p>
            </div>
        </section>
    </>)
}

export default Dropdown