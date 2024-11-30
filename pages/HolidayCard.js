import React from 'react';
// import './styles.css';

const HolidayCard = () => {
  return (
    <div className="main">
      <div className="card-area">
        <div className="card-section">
          {/* Card 1 */}
          <div className="card">
            <div className="flip-card">
              <div className="flip-card__container">
                <div className="card-front">
                  <div className="card-front__tp card-front__tp--city">
                    <h2 className="card-front__heading">Quran</h2>
                    <p className="card-front__text-price"></p>
                    <div className="card-front__icon"></div>

                  </div> 
                  <a href="quran" className="card-front__text">View More</a>
                </div>
                <div className="card-back">
                  <div className="inside-page">
                    <div className="inside-page__container">
                      <h2 className="inside-page__heading"> Quran</h2>
                      <p className="inside-page__text">The Quran guides with wisdom</p>
                      <a href="quran" className="inside-page__btn inside-page__btn--city">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card1">
            <div className="flip1-card1">
              <div className="flip1-card1__container1">
                <div className="card1-front1">
                  <div className="card1-front1__tp1 card1-front1__tp1--city1">
                    <h2 className="card1-front1__heading1">Arabic</h2>
                    <p className="card1-front1__text1-price1"></p>
                    <div className="card1-front1__icon1"></div>
                  </div>
                  <a href="quran" className="card1-front1__text1">View More</a>
                </div>
                <div className="card1-back1">
                  <div className="inside1-page1">
                    <div className="inside1-page1__container1">
                      <h2 className="inside1-page1__heading1">Arabic</h2>
                      <p className="inside1-page1__text1">Arabic is a beautiful, rich language</p>
                      <a href="#" className="inside1-page1__btn1 inside1-page1__btn1--city1">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card2">
            <div className="flip2-card2">
              <div className="flip2-card2__container2">
                <div className="card2-front2">
                  <div className="card2-front2__tp2 card2-front2__tp2--city2">
                    <h2 className="card2-front2__heading2">Islamic Studies</h2>
                    <p className="card2-front2__text2-price2"></p>
                    <div className="card2-front2__icon2"></div>
                  </div>
                  <a href="quran" className="card2-front2__text2">View More</a>
                </div>
                <div className="card2-back2">
                  <div className="inside2-page2">
                    <div className="inside2-page2__container2">
                      <h2 className="inside2-page2__heading2">Islamic Studies</h2>
                      <p className="inside2-page2__text2">Islamic Studies explores Islam's beliefs, history</p>
                      <a href="#" className="inside2-page2__btn2 inside2-page2__btn2--city2">Learn Now</a>
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

export default HolidayCard;
