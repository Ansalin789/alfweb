import React from 'react';

const TimedContainers = () => {
  return (
    <div style={styles.container}>
      <div style={styles.infographicMain}>
        <div style={styles.mainCircle}>
          <h2 style={styles.mainTitle}>INFOGRAPHIC</h2>
          <p style={styles.subTitle}>Some Title Here</p>
        </div>

        <div className="arrow"></div>

        {/* Step 01 */}
        <div style={styles.stepItem}>
          <div style={styles.circle}>
            <div style={styles.circleContent}>
              <p style={styles.circleText} data-aos="fade-right">
                STEP 01
              </p>
              <img 
                src="assets/img/pl.png" 
                alt="Shape" 
                height={40} 
                width={40} 
                style={styles.circleImage} 
              />
            </div>
          </div>
          <p style={styles.stepText} data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div className="arrow"></div>
        
        {/* Add other steps */}
        {/* Step 02 */}
        <div style={styles.stepItem}>
          <div style={styles.circle}>
            <p style={styles.circleText} data-aos="fade-up">STEP 02</p>
          </div>
          <p style={styles.stepText} data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div className="arrow"></div>
        
        {/* Step 03 */}
        <div style={styles.stepItem}>
          <div style={styles.circle}>
            <p style={styles.circleText} data-aos="fade-right">STEP 03</p>
          </div>
          <p style={styles.stepText} data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>

      {/* Add the keyframes in a <style> block */}
      <style jsx>{`
        .arrow {
          width: 0;
          height: 0;
          border-left: 20px solid transparent;
          border-right: 20px solid transparent;
          border-top: 20px solid #36d1dc;
          margin: 20px 0;
          animation: moveArrow 2s ease-in-out infinite;
        }

        @keyframes moveArrow {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '20px',
  },
  infographicMain: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mainCircle: {
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #ff5f6d, #ffc371)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  mainTitle: {
    fontSize: '24px',
    margin: '0',
  },
  subTitle: {
    fontSize: '16px',
    margin: '5px 0 0 0',
  },
  steps: {
    display: 'flex',
    flexDirection: 'column',
  },
  stepItem: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
  },
  circle: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #36d1dc, #5b86e5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '18px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginRight: '20px',
  },
  circleContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  circleText: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '10px', // To add space between text and image
  },
  circleImage: {
    backgroundColor: '#fff',
    padding: '4px',
    borderRadius: '10px',
    marginLeft: '5px',
  },
  stepText: {
    fontSize: '14px',
    color: '#555',
    maxWidth: '300px',
  },
};

export default TimedContainers;
