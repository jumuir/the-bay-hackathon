import React from 'react';
import './Footer.scss';
import { FaFacebookF, FaInstagram, FaPinterest, FaYoutube, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='footer__container'>
        <div className='footer__top'>
            <div className='footer__column'>
                <h3 className='footer__column-title'>Customer Support</h3>
                <p className='footer__column-item'>Contact Us</p>
                <p className='footer__column-item'>Help & FAQs</p>
                <p className='footer__column-item'>Shipping & Return Policies</p>
                <p className='footer__column-item'>Orders & Returns</p>
            </div>
            <div className='footer__column'>
                <h3 className='footer__column-title'>Shop With Us</h3>
                <p className='footer__column-item'>Brands A-Z</p>
                <p className='footer__column-item'>Gift Cards</p>
                <p className='footer__column-item'>SMS Updates</p>
                <p className='footer__column-item'>Kleinfeld Bridal</p>
            </div>
            <div className='footer__column'>
                <h3 className='footer__column-title'>Services</h3>
                <p className='footer__column-item'>PayBright</p>
                <p className='footer__column-item'>HB Credit from Neo</p>
                <p className='footer__column-item'>Financial Services</p>
                <p className='footer__column-item'>Total Guard Product Protection</p>
            </div>
            <div className='footer__column'>
                <h3 className='footer__column-title'>About Us</h3>
                <p className='footer__column-item'>The Bay Digital Careers</p>
                <p className='footer__column-item'>Hudson's Bay Retail Careers</p>
                <p className='footer__column-item'>Services</p>
                <p className='footer__column-item'>Become an Affiliate</p>
                <p className='footer__column-item'>Marketplace</p>
                <p className='footer__column-item'>HB Charter for Change</p>
                <p className='footer__column-item'>Zellers</p>
                <p className='footer__column-item'>Trade Program</p>
            </div>
        </div>
        <div className='footer__bottom'>
            <div className='footer__social-container'>
                <a className='footer__social' href='https://www.facebook.com/TheBay'>
                    <FaFacebookF />
                </a>
                <a className='footer__social' href='https://www.instagram.com/hudsonsbay/'>
                    <FaInstagram />
                </a>
                <a className='footer__social' href='https://twitter.com/hudsonsbay'>
                    <FaTwitter />
                </a>
                <a className='footer__social' href='https://www.youtube.com/thebay'>
                    <FaYoutube />
                </a>
                <a className='footer__social' href='https://www.pinterest.com/thebay'>
                    <FaPinterest />
                </a>
            </div>
            <div className='footer__legal-container'>
                <div className='footer__legal-links'>
                <p className='footer__legal-link'>Privacy Policy</p>
                <p className='footer__legal-border'></p>
                <p className='footer__legal-link'>Terms & Conditions</p>
                <p className='footer__legal-border'></p>
                <p className='footer__legal-link'>Site Feedback</p>
                </div>
                <p className='footer__legal-copyright'>© 2022 The Bay Limited Partnership</p>
            </div>
        </div>
    </section>
  )
}

export default Footer