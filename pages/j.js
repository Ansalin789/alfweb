import React from 'react';
// import './styles.css';

const MyComponent = () => {
  return (
    <div className="main">
      <div className="card-area">
        <div className="card-section">
          <div className="card">
            <div className="flip-card">
              <div className="flip-card__container">
                <div className="card-front">
                  <div className="card-front__tp card-front__tp--city">
                    <h2 className="card-front__heading">City Tour</h2>
                    <p className="card-front__text-price">$150</p>
                    <div className="card-front__icon">🏙️</div>
                    <a href="#" className="card-front__text-view">View More</a>
                  </div>
                </div>
                <div className="card-back">
                  <div className="inside-page">
                    <div className="inside-page__container">
                      <h2 className="inside-page__heading">City Tour Details</h2>
                      <p className="inside-page__text">Explore the best cities...</p>
                      <a href="#" className="inside-page__btn inside-page__btn--city">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
