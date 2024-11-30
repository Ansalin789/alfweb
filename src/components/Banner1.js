import React from 'react';
import Link from 'next/link'; // Import Link for navigation

const Banner1 = () => {
  const styles = {
    background: {
      position: 'relative',
      width: '100vw',
      height: '100vh',
      backgroundColor: '#0A0E1A',
      overflow: 'hidden',
    },
    circle: {
      position: 'absolute',
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      border: '2px solid #fff',
      top: '70%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      opacity: 0.1,
    },
    smallCircle: {
      position: 'absolute',
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      border: '1px solid #555',
      top: '30%',
      left: '20%',
      opacity: 0.2,
    },
    triangle: {
      position: 'absolute',
      width: 0,
      height: 0,
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      borderBottom: '20px solid #fff',
      top: '85%',
      left: '80%',
      opacity: 0.2,
    },
    crosses: {
      position: 'absolute',
      top: '20%',
      left: '10%',
      display: 'flex',
      gap: '10px',
    },
    cross: {
      position: 'relative',
      width: '15px',
      height: '15px',
      display: 'inline-block',
    },
    crossBeforeAfter: (color) => ({
      content: '""',
      position: 'absolute',
      top: 0,
      left: '50%',
      width: '2px',
      height: '15px',
      backgroundColor: color,
      transform: 'translateX(-50%)',
    }),
    semiCircleContainer: {
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '300px',
      height: '150px',
    },
    semiCircle: {
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      borderTopLeftRadius: '150px',
      borderTopRightRadius: '150px',
    },
    innerSemiCircle: {
      position: 'absolute',
      bottom: '5px',
      left: '50%',
      width: '250px',
      height: '130px',
      backgroundColor: '#0A0E1A',
      borderTopLeftRadius: '130px',
      borderTopRightRadius: '130px',
      transform: 'translateX(-50%)',
    },
    patternContainer: {
      position: 'absolute',
      bottom: 0,
      left: '59%',
      width: '200px',
      height: '100px',
      transform: 'translateX(-50%) translateY(-50px)',
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gridGap: '19px',
      padding: '10px',
      paddingTop: '0px',
      marginBottom: '50px',
    },
    gridItem: {
      width: '6px',
      height: '6px',
      backgroundColor: '#1e2a38',
      border: '1px solid #58647a',
    },
    redDot: {
      backgroundColor: '#e63946',
    },
    dotGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      marginLeft: '10px',
    },
    dot: {
      width: '5px',
      height: '5px',
      backgroundColor: '#58647a',
      borderRadius: '50%',
    },
    bannerContentH3: {
      background: 'rgba(255, 255, 255, 0.1)',
      display: 'inline-block',
      fontSize: '16px',
      color: '#fff',
      padding: '10px 23px 10px 82px',
      fontWeight: 500,
      borderRadius: '30px',
      position: 'relative',
      marginBottom: '22px',
    },
    bannerContentH3Before: {
      position: 'absolute',
      content: '""',
      left: '22px',
      top: '19px',
      height: '2px',
      width: '45px',
      background: '#e63946',
    },
    bannerContentH1: {
      fontSize: '70px',
      color: '#fff',
      margin: 0,
      fontWeight: 600,
    },
    bannerContentP: {
      color: '#fff',
      fontSize: '24px',
      padding: '30px 0 24px',
    },
    bannerButton: {
      display: 'inline-block',
      background: '#e63946',
      padding: '14px 35px',
      color: '#fff',
      borderRadius: '30px',
      position: 'relative',
      zIndex: 1,
    },
    bannerButtonBefore: {
      position: 'absolute',
      content: '""',
      zIndex: -1,
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      borderRadius: '30px',
      background: '#10102e',
      transform: 'scale(0)',
      transition: '0.5s',
    },
    bannerYearThumb: {
      position: 'absolute',
      right: '-158px',
      top: '-25px',
    },
    bannerThumb: {
      marginLeft: '900px',
      paddingTop: '150px',
    },
  };

  return (
    <div style={styles.background}>
      {/* Background shapes */}
      <div style={styles.circle}></div>
      <div style={styles.smallCircle}></div>
      <div style={styles.triangle}></div>
      
      {/* Crosses */}
      <div style={styles.crosses}>
        <div style={styles.cross}>
          <span style={styles.crossBeforeAfter('#fff')}></span>
          <span style={{ ...styles.crossBeforeAfter('#fff'), transform: 'translateX(-50%) rotate(90deg)' }}></span>
        </div>
        <div style={styles.cross}>
          <span style={styles.crossBeforeAfter('#ff0000')}></span>
          <span style={{ ...styles.crossBeforeAfter('#ff0000'), transform: 'translateX(-50%) rotate(90deg)' }}></span>
        </div>
        <div style={styles.cross}>
          <span style={styles.crossBeforeAfter('#fff')}></span>
          <span style={{ ...styles.crossBeforeAfter('#fff'), transform: 'translateX(-50%) rotate(90deg)' }}></span>
        </div>
      </div>

      {/* Semi-circle container at the bottom */}
      <div style={styles.semiCircleContainer}>
        <div style={styles.semiCircle}></div>
        <div style={styles.innerSemiCircle}></div>
      </div>
      
      {/* Pattern inside semi-circle */}
      <div style={styles.patternContainer}>
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.gridItem,
              ...(i % 7 === 0 ? styles.redDot : {}),
            }}
          ></div>
        ))}
      </div>

      {/* Banner Content */}
      <div style={{ position: 'absolute', top: '30%', left: '5%' }}>
        <h3 style={styles.bannerContentH3}>
          <span style={styles.bannerContentH3Before}></span>
          Welcome to Our Academy
        </h3>
        <h1 style={styles.bannerContentH1}>Learn Arabic & Quran</h1>
        <p style={styles.bannerContentP}>
          Join us for an amazing learning experience.
        </p>
        <Link href="/enroll" style={styles.bannerButton}>
          Enroll Now
          <span style={styles.bannerButtonBefore}></span>
        </Link>
      </div>

      {/* Year Thumbnail */}
      <img style={styles.bannerYearThumb} src="/images/year-thumb.png" alt="Year Thumbnail" />

      {/* Additional Banner Thumbnail */}
      <div className="banner-thumb" style={styles.bannerThumb}>
        <img src="/assets/img/banner img.png" alt="Banner Thumbnail" style={{ width: '100%' }} />
      </div>
      
      {/* Pagination bullets */}
      <div style={styles.bannerListPaginationBullets}>
        <span style={styles.dotGrid}>
          {[...Array(5)].map((_, index) => (
            <span key={index} style={styles.dot}></span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Banner1;
