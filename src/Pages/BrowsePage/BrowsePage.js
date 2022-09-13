import React from 'react';
import './BrowsePage.scss';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const BrowsePage = () => {
  return (<>
    <section className='browse__hero'>
      <div className='browse__hero-overlay'></div>
      <h1 className='browse__hero-title'>Up to 60% off</h1>
      <h1 className='browse__hero-title'>Dresses</h1>
    </section>
    <section className='browse__top'>
      <div className='browse__path-container'>
        <p className='browse__path'><span className='hover-line'>Home</span> / <span className='hover-line'>Women</span> / <span className='hover-line'>Women's Clothing</span> / <span className='hover-line'>Dresses</span></p>
      </div>
      <div className='browse__title-container'>
        <h2 className='browse__title'>Dresses</h2>
        <h3 className='browse__count'>5,674 Items</h3>
      </div>
      <div className='browse__category-filters'>
        <button className='browse__category-filter browse__category-filter--active'>Style</button>
        <button className='browse__category-filter'>Occasion</button>
      </div>
      <div className='browse__categories'>
        <div className='browse__category-card'>
          <div className='browse__category-card-image browse__category-card-image--1'></div>
          <h3 className='browse__category-card-title'>Knit</h3>
        </div>
        <div className='browse__category-card'>
          <div className='browse__category-card-image browse__category-card-image--2'></div>
          <h3 className='browse__category-card-title'>Pleated</h3>
        </div>
        <div className='browse__category-card'>
          <div className='browse__category-card-image browse__category-card-image--3'></div>
          <h3 className='browse__category-card-title'>Retro Boho</h3>
        </div>
        <div className='browse__category-card'>
          <div className='browse__category-card-image browse__category-card-image--4'></div>
          <h3 className='browse__category-card-title'>Party</h3>
        </div>
        <div className='browse__category-card'>
          <div className='browse__category-card-image browse__category-card-image--5'></div>
          <h3 className='browse__category-card-title'>Cut-out</h3>
        </div>
        <div className='browse__category-card'>
          <div className='browse__category-card-image browse__category-card-image--6'></div>
          <h3 className='browse__category-card-title'>Mini</h3>
        </div>
      </div>
    </section>
    <section className='browse__body'>
      <div className='browse__body-filters'>
        <div className='browse__body-filters-search-bar'>
          <select defaultValue="" className='browse__body-filters-search'>
            <option value="">Sort by Featured</option>
          </select>
        </div>
        <div className='browse__filter-container'>
          <div className='browse__filter-header-container'>
            <h3 className='browse__filter-header'>Category</h3>
            <AiOutlineMinus />
          </div>
          <div className='browse__filter-subheader'></div>
          <h4 className='browse__filter-subheader hover-line'>Women's Clothing</h4>
          <h4 className='browse__filter-subheader bold hover-line'>Dresses</h4>
          <p className='browse__filter-type hover-line'>Bridesmaid Dresses</p>
          <p className='browse__filter-type hover-line'>Casual Dresses</p>
          <p className='browse__filter-type hover-line'>Cocktail & Party Dresses</p>
          <p className='browse__filter-type hover-line'>Formal Gowns</p>
          <p className='browse__filter-type hover-line'>Little Black Dresses</p>
          <p className='browse__filter-type hover-line'>Maternity Dresses</p>
          <p className='browse__filter-type hover-line'>Mother of the Bride Dresses</p>
          <h4 className='browse__filter-subheader underline hover-line'>View More</h4>
        </div>
        <div className='browse__filter-container'>
          <div className='browse__filter-header-container'>
            <h3 className='browse__filter-header'>Brand</h3>
            <AiOutlinePlus />
          </div>
        </div>
        <div className='browse__filter-container'>
          <div className='browse__filter-header-container'>
            <h3 className='browse__filter-header'>Price</h3>
            <AiOutlinePlus />
          </div>
        </div>
        <div className='browse__filter-container'>
          <div className='browse__filter-header-container'>
            <h3 className='browse__filter-header'>Size Range</h3>
            <AiOutlinePlus />
          </div>
        </div>
        <div className='browse__filter-container'>
          <div className='browse__filter-header-container'>
            <h3 className='browse__filter-header'>Size</h3>
            <AiOutlinePlus />
          </div>
        </div>
        <div className='browse__filter-container'>
          <div className='browse__filter-header-container'>
            <h3 className='browse__filter-header'>Colour</h3>
            <AiOutlinePlus />
          </div>
        </div>
        <div className='browse__filter-container'>
          <div className='browse__filter-header-container'>
            <h3 className='browse__filter-header'>Style</h3>
            <AiOutlinePlus />
          </div>
        </div>
        <div className='browse__filter-container'>
          <div className='browse__filter-header-container'>
            <h3 className='browse__filter-header'>Responsible</h3>
            <AiOutlinePlus />
          </div>
        </div>
        <div className='browse__filter-container'>
          <div className='browse__filter-header-container'>
            <h3 className='browse__filter-header'>Neckline</h3>
            <AiOutlinePlus />
          </div>
        </div>
        
      </div>
        
      <div className='browse__body-items'>  
      </div>
    </section>
  </>)
}

export default BrowsePage