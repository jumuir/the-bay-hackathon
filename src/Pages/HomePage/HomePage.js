import React from 'react';
import './HomePage.scss';

const HomePage = () => {
  return (<>
    <section className='home__hero'>
      <div className='home__hero-overlay'></div>
      <h1 className='home__hero-title'>Father's Day</h1>
      <h1 className='home__hero-title'>SALES</h1>
    </section>
    <section className='home__categories'>
      <div className='home__categories-title-bar'>
        <h3 className='home__categories-title'>Shop by Category</h3>
        <p className='home__categories-all'>View All</p>
      </div>
      <div className='home__categories-cards'>
        <div className='home__categories-card'>
          <div className='home__categories-card-image home__categories-card--1'></div>
          <p className='home__categories-card-text'>Women</p>
        </div>
        <div className='home__categories-card'>
          <div className='home__categories-card-image home__categories-card--2'></div>
          <p className='home__categories-card-text'>Men</p>
        </div>
        <div className='home__categories-card'>
          <div className='home__categories-card-image home__categories-card--3'></div>
          <p className='home__categories-card-text'>Kids & Baby</p>
        </div>
        <div className='home__categories-card'>
          <div className='home__categories-card-image home__categories-card--4'></div>
          <p className='home__categories-card-text'>Home</p>
        </div>
        <div className='home__categories-card'>
          <div className='home__categories-card-image home__categories-card--5'></div>
          <p className='home__categories-card-text'>Electronics</p>
        </div>
        <div className='home__categories-card'>
          <div className='home__categories-card-image home__categories-card--6'></div>
          <p className='home__categories-card-text'>Handbags</p>
        </div>
        <div className='home__categories-card'>
          <div className='home__categories-card-image home__categories-card--7'></div>
          <p className='home__categories-card-text'>Beauty</p>
        </div>
        <div className='home__categories-card'>
          <div className='home__categories-card-image home__categories-card--8'></div>
          <p className='home__categories-card-text'>Luggage & Travel</p>
        </div>
        <div className='home__categories-card'>
          <div className='home__categories-card-image home__categories-card--9'></div>
          <p className='home__categories-card-text'>Jewellery & Watches</p>
        </div>
        <div className='home__categories-card'>
          <div className='home__categories-card-image home__categories-card--10'></div>
          <p className='home__categories-card-text'>HBC Stripes</p>
        </div>
      </div>
    </section>
    <section className='home__deals'>
      <h2 className='home__deals-title'>Shop Some of This Week's Deals</h2>
      <div className='home__deals-cards'>
        <div className='home__deals-card'>
          <div className='home__deals-card-image home__deals-card--1'></div>
          <h3 className='home__deals-card-title'>Up to 25% Off</h3>
          <p className='home__deals-card-text'>Select Bras & Underwear by Calvin Klein, Jockey, Wonderra & More</p>
          <button className='home__deals-card-button'>SHOP NOW</button>
        </div>
        <div className='home__deals-card'>
          <div className='home__deals-card-image home__deals-card--2'></div>
          <h3 className='home__deals-card-title'>Up to 40% Off</h3>
          <p className='home__deals-card-text'>Home</p>
          <button className='home__deals-card-button'>SHOP NOW</button>
        </div>
        <div className='home__deals-card'>
          <div className='home__deals-card-image home__deals-card--3'></div>
          <h3 className='home__deals-card-title'>Free Clinique Gift</h3>
          <p className='home__deals-card-text'>with your $55+ Clinique purchase. A $122 value.</p>
          <button className='home__deals-card-button'>SHOP NOW</button>
        </div>
      </div>
    </section>
    <section className='home__value'>
      <div className='home__value-cards'>
        <div className='home__value-card'>
          <div className='home__value-card-icon value-icon--1'></div>
          <h3 className='home__value-card-title'>Get <span className='bold'>$10 off</span> your next $50 purchase online when you sign up for email.</h3>
          <p className='home__value-card-text'></p>
        </div>
        <div className='home__value-card'>
          <div className='home__value-card-icon value-icon--2'></div>
          <h3 className='home__value-card-title'><span className='bold'>Free</span> Shipping Available. *</h3>
          <p className='home__value-card-text'>No minimum with Hudson's Bay Mastercard® or other $49+ orders.</p>
        </div>
        <div className='home__value-card'>
          <div className='home__value-card-icon value-icon--3'></div>
          <h3 className='home__value-card-title'>Hudson's Bay Rewards</h3>
          <p className='home__value-card-text'>Earn more for doing what you love and redeem points instantly on what matters to you.</p>
        </div>
        <div className='home__value-card'>
          <div className='home__value-card-icon value-icon--4'></div>
          <h3 className='home__value-card-title'>The Bay App</h3>
          <p className='home__value-card-text'>New ways to shop with at home and in-store pick up.</p>
        </div>
      </div>
    </section>
  </>)
}

export default HomePage