import React from 'react';
import './BrowsePage.scss';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { IoHeartOutline } from 'react-icons/io5';

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
        <div className='browse__item-card'>
          <div className='browse__item-card-buy'>
            <p className='browse__item-card-buy-link'>ADD TO BAG</p>
          </div>
          <div className='browse__item-card-image browse__item-card-image--1'>
            <IoHeartOutline size={24}/>
          </div>
          <div className='browse__item-card-title-bar'>
            <h3 className='browse__item-card-title'>Two-Way Back-Zip Sheath Dress</h3>
            <p className='browse__item-card-rating'></p>
          </div >
          <p className='browse__item-card-discount'>30% off</p>
          <div className='browse__item-card-price-bar'>
            <p className='browse__item-card-price'>$118.30</p>
            <p className='browse__item-card-price--old'>$169</p>
          </div>
          <div className='browse__item-card-colours'>
            <div className=' browse__item-card-colour--active'>
              <div className='browse__item-card-colour' style={{backgroundColor:'#1E413B'}}></div>
            </div>
            <div className='browse__item-card-colour' style={{backgroundColor:'#173B99'}}></div>
            <div className='browse__item-card-colour' style={{backgroundColor:'#29282D'}}></div>
          </div>
        </div>

        <div className='browse__item-card'>
          <div className='browse__item-card-buy'>
            <p className='browse__item-card-buy-link'>ADD TO BAG</p>
          </div>
          <div className='browse__item-card-image browse__item-card-image--2'>
            <IoHeartOutline size={24}/>
          </div>
          <div className='browse__item-card-title-bar'>
            <h3 className='browse__item-card-title'>Munze Paisley Sweater Dress</h3>
            <p className='browse__item-card-rating'></p>
          </div >
          <div className='browse__item-card-price-bar'>
            <p className='browse__item-card-price'>$140</p>
          </div>
          <div className='browse__item-card-colours'>
          </div>
        </div>

        <div className='browse__item-card'>
          <div className='browse__item-card-buy'>
            <p className='browse__item-card-buy-link'>ADD TO BAG</p>
          </div>
          <div className='browse__item-card-image browse__item-card-image--3'>
            <IoHeartOutline size={24}/>
          </div>
          <div className='browse__item-card-title-bar'>
            <h3 className='browse__item-card-title'>Seersucker Shirtdress</h3>
            <p className='browse__item-card-rating'>&#9733; 5.0</p>
          </div >
          <p className='browse__item-card-discount'>50% off</p>
          <div className='browse__item-card-price-bar'>
            <p className='browse__item-card-price'>$29.99</p>
            <p className='browse__item-card-price--old'>$59</p>
          </div>
          <div className='browse__item-card-colours'>
            <div className=' browse__item-card-colour--active'>
              <div className='browse__item-card-colour' style={{backgroundColor:'#CCD0DC'}}></div>
            </div>
            <div className='browse__item-card-colour' style={{backgroundColor:'#BBB6BA'}}></div>
          </div>
        </div>

        <div className='browse__item-card'>
          <div className='browse__item-card-buy'>
            <p className='browse__item-card-buy-link'>ADD TO BAG</p>
          </div>
          <div className='browse__item-card-image browse__item-card-image--4'>
            <IoHeartOutline size={24}/>
          </div>
          <div className='browse__item-card-title-bar'>
            <h3 className='browse__item-card-title'>Sunray Cutout Midi Shift Dress</h3>
            <p className='browse__item-card-rating'></p>
          </div >
          <p className='browse__item-card-discount'>30% off</p>
          <div className='browse__item-card-price-bar'>
            <p className='browse__item-card-price'>$118.30</p>
            <p className='browse__item-card-price--old'>$169</p>
            <p className='browse__item-card-price-final'>Final Sale</p>
          </div>
          <div className='browse__item-card-colours'>
            <div className=' browse__item-card-colour--active'>
              <div className='browse__item-card-colour' style={{backgroundColor:'#004D81'}}></div>
            </div>
            <div className='browse__item-card-colour' style={{backgroundColor:'#2F222C'}}></div>
          </div>
        </div>

        <div className='browse__item-card'>
          <div className='browse__item-card-buy'>
            <p className='browse__item-card-buy-link'>ADD TO BAG</p>
          </div>
          <div className='browse__item-card-image browse__item-card-image--5'>
            <IoHeartOutline size={24}/>
          </div>
          <div className='browse__item-card-title-bar'>
            <h3 className='browse__item-card-title'>Ribbed Waist-Tie Midi Dress</h3>
            <p className='browse__item-card-rating'></p>
          </div >
          <div className='browse__item-card-price-bar'>
            <p className='browse__item-card-price'>$89</p>
          </div>
          <div className='browse__item-card-colours'>
            <div className=' browse__item-card-colour--active'>
              <div className='browse__item-card-colour' style={{backgroundColor:'#323137'}}></div>
            </div>
            <div className='browse__item-card-colour' style={{backgroundColor:'#D52844'}}></div>
          </div>
        </div>

        <div className='browse__item-card'>
          <div className='browse__item-card-buy'>
            <p className='browse__item-card-buy-link'>ADD TO BAG</p>
          </div>
          <div className='browse__item-card-image browse__item-card-image--6'>
            <IoHeartOutline size={24}/>
          </div>
          <div className='browse__item-card-title-bar'>
            <h3 className='browse__item-card-title'>Puffed-Sleeve Sheath Dress</h3>
            <p className='browse__item-card-rating'>&#9733; 4.7</p>
          </div >
          <div className='browse__item-card-price-bar'>
            <p className='browse__item-card-price'>$99.99</p>
          </div>
        </div>

        <div className='browse__item-card'>
          <div className='browse__item-card-buy'>
            <p className='browse__item-card-buy-link'>ADD TO BAG</p>
          </div>
          <div className='browse__item-card-image browse__item-card-image--7'>
            <IoHeartOutline size={24}/>
          </div>
          <div className='browse__item-card-title-bar'>
            <h3 className='browse__item-card-title'>Velvet Wrap Gown</h3>
            <p className='browse__item-card-rating'>&#9733; 3.5</p>
          </div >
          <div className='browse__item-card-price-bar'>
            <p className='browse__item-card-price'>$249</p>
          </div>
        </div>

        <div className='browse__item-card'>
          <div className='browse__item-card-buy'>
            <p className='browse__item-card-buy-link'>ADD TO BAG</p>
          </div>
          <div className='browse__item-card-image browse__item-card-image--8'>
            <IoHeartOutline size={24}/>
          </div>
          <div className='browse__item-card-title-bar'>
            <h3 className='browse__item-card-title'>Floral Chiffon Wrap Midi Dress</h3>
            <p className='browse__item-card-rating'></p>
          </div >
          <p className='browse__item-card-discount'>30% off</p>
          <div className='browse__item-card-price-bar'>
            <p className='browse__item-card-price'>$125.30</p>
            <p className='browse__item-card-price--old'>$179</p>
            <p className='browse__item-card-price-final'>Final Sale</p>
          </div>
          <div className='browse__item-card-colours'>
            <div className=' browse__item-card-colour--active'>
              <div className='browse__item-card-colour' style={{backgroundColor:'#6D5A3B'}}></div>
            </div>
            <div className='browse__item-card-colour' style={{backgroundColor:'#193738'}}></div>
          </div>
        </div>

        <div className='browse__item-card'>
          <div className='browse__item-card-buy'>
            <p className='browse__item-card-buy-link'>ADD TO BAG</p>
          </div>
          <div className='browse__item-card-image browse__item-card-image--9'>
            <IoHeartOutline size={24}/>
          </div>
          <div className='browse__item-card-title-bar'>
            <h3 className='browse__item-card-title'>A-line Rosette Lace Dress</h3>
            <p className='browse__item-card-rating'>&#9733; 4.8</p>
          </div >
          <p className='browse__item-card-discount'>25% off</p>
          <div className='browse__item-card-price-bar'>
            <p className='browse__item-card-price'>$299</p>
            <p className='browse__item-card-price--old'>$400</p>
          </div>
          <div className='browse__item-card-colours'>
            <div className=' browse__item-card-colour--active'>
              <div className='browse__item-card-colour' style={{backgroundColor:'#413F55'}}></div>
            </div>
            <div className='browse__item-card-colour' style={{backgroundColor:'#CCCCCC'}}></div>
          </div>
        </div>
      </div>
    </section>
  </>)
}

export default BrowsePage