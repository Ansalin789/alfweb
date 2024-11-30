// pages/index.js
import React from 'react';

const Process = () => {
  return (
    <div style={styles.container}>
      <div style={styles.infographic}>
        <div style={styles.leftCircle}>
          <h2 style={styles.title}>Business Infographics</h2>
        </div>
        <div style={styles.rightBoxes}>
          <div style={styles.box}>
            <div style={styles.icon}><span>🔍</span></div>
            <div>
              <h3 style={styles.heading}>Lorem Ipsum</h3>
              <p style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div style={styles.box}>
            <div style={styles.icon}><span>💡</span></div>
            <div>
              <h3 style={styles.heading}>Lorem Ipsum</h3>
              <p style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div style={styles.box}>
            <div style={styles.icon}><span>🎯</span></div>
            <div>
              <h3 style={styles.heading}>Lorem Ipsum</h3>
              <p style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8f8f8',
  },
  infographic: {
    display: 'flex',
    alignItems: 'center',
  },
  leftCircle: {
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  rightBoxes: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '20px',
  },
  box: {
    backgroundColor: '#ffffff',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    minWidth: '300px',
  },
  icon: {
    fontSize: '24px',
    marginRight: '15px',
  },
  heading: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '5px',
  },
  paragraph: {
    fontSize: '14px',
    color: '#555',
  },
};

export default Process;
