import React, { Component } from 'react';

class CTA extends Component {
  render() {
    return (
      <div className="ceo-cod-area" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center">
            {/* YouTube Video Section */}
            <div className="col-lg-6 col-md-12">
              <div className="video-container" style={{ margin: '20px' }}>
                <iframe
                  width="95%"
                  height="400"
                  src="https://www.youtube.com/embed/AlFurqanAcademyDelhi" // Updated to embed link
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    borderTopLeftRadius: '70px',
                    borderBottomRightRadius: '50px',
                    borderBottomLeftRadius: '10px',
                    borderTopRightRadius: '10px',
                  }}
                ></iframe>
              </div>
            </div>

            {/* CTA Section */}
            <div className="col-lg-6 col-md-12">
              <div className="cta-container" style={ctaContainerStyle}>
                {/* Content */}
                <div className="cta-content">
                  <h2 className="cta-title">Get personalized learning recommendations</h2>
                  <p className="cta-description">
                    Answer a few questions to receive tailored suggestions for your study plan.
                  </p>
                  <button className="cta-button">
                    Create Your Study Plan  <i className="bi bi-plus" />
                    {/* <i className="icon" style={iconStyle}></i> */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Internal CSS Styles */}
        <style jsx>{`
          .cta-title {
            font-size: 24px;
            font-weight: bold;
          }

          .cta-description {
            font-size: 16px;
            margin: 10px 0;
          }

          .cta-button {
            padding: 9px 14px 14px 42px;
            font-family: "Fira Sans", sans-serif;
            font-weight: 500;
            color: #fff;
            background: #e63946;
            display: inline-block;
            border-radius: 30px;
            border: 1px solid #e63946;
            position: relative;
            z-index: 1;
            overflow: hidden;
            margin-top: 38px;
            transition: color 0.3s;
          }

          .cta-button:before {
            position: absolute;
            content: "";
            z-index: -1;
            top: 0;
            right: 0;
            height: 100%;
            width: 0;
            background: #fff;
            border-radius: 30px;
            transition: 0.5s;
          }

          .cta-button:hover {
            color: #e63946;
          }

          .cta-button:hover:before {
            width: 100%;
            left: 0;
          }

          .cta-button i {
            font-size: 20px;
            width: 30px;
            height: 30px;
            line-height: 32px;
            border-radius: 25px;
            text-align: center;
            background: #fff;
            color: #e63946;
            display: inline-block;
            margin-left: 14px;
            position: relative;
            top: 3px;
            transition: 0.5s;
          }

          .cta-button:hover i {
            background: #e63946;
            color: #fff;
          }
        `}</style>
      </div>
    );
  }
}

const ctaContainerStyle = {
  backgroundColor: '#f8f9fa',
  padding: '30px',
  borderRadius: '30px', // Curved corners
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional shadow for depth
  textAlign: 'center',
  position: 'relative',
};

const iconStyle = {
  fontSize: '20px',
  width: '30px',
  height: '30px',
  lineHeight: '32px',
  borderRadius: '25px',
  textAlign: 'center',
  background: '#fff',
  color: '#e63946',
  display: 'inline-block',
  marginLeft: '14px',
  position: 'relative',
  top: '3px',
  transition: '0.5s',
};

export default CTA;
