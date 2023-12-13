// destination.js
import React from 'react';


const Destination = ({ handleDestinationSelect, handleHover, handleLeave }) => {
  const iconStyle = {
    width: '200px',
    height: '150px',
    margin: '5px',
    background: 'none',
    border: 'none',
    padding: 0,
    position: 'relative',
  };

  const tooltipStyle = {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#333',
    color: '#fff',
    padding: '5px',
    borderRadius: '5px',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  };

  const handleHoverEffect = (event) => {
    const tooltip = event.currentTarget.querySelector('.tooltip');
    tooltip.style.opacity = 1;
  };

  const handleLeaveEffect = (event) => {
    const tooltip = event.currentTarget.querySelector('.tooltip');
    tooltip.style.opacity = 0;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 className="tell-us-text">Tell us about your trip:</h2>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button
          onClick={() => handleDestinationSelect('Sun')}
          onMouseEnter={(e) => {
            handleHover(e);
            handleHoverEffect(e);
          }}
          onMouseLeave={(e) => {
            handleLeave(e);
            handleLeaveEffect(e);
          }}
          style={iconStyle}
        >
          <img src="/images/suntrim.png" alt="Sun" style={iconStyle} />
          <div className="tooltip" style={tooltipStyle}>
            Sun
          </div>
        </button>
        <button
          onClick={() => handleDestinationSelect('Snow')}
          onMouseEnter={(e) => {
            handleHover(e);
            handleHoverEffect(e);
          }}
          onMouseLeave={(e) => {
            handleLeave(e);
            handleLeaveEffect(e);
          }}
          style={iconStyle}
        >
          <img src="/images/snowtrim.png" alt="Snow" style={iconStyle} />
          <div className="tooltip" style={tooltipStyle}>
            Snow
          </div>
        </button>
        <button
          onClick={() => handleDestinationSelect('City')}
          onMouseEnter={(e) => {
            handleHover(e);
            handleHoverEffect(e);
          }}
          onMouseLeave={(e) => {
            handleLeave(e);
            handleLeaveEffect(e);
          }}
          style={iconStyle}
        >
          <img src="/images/citytrim.png" alt="City Break" style={iconStyle} />
          <div className="tooltip" style={tooltipStyle}>
            City
          </div>
        </button>
        <button
          onClick={() => handleDestinationSelect('Business')}
          onMouseEnter={(e) => {
            handleHover(e);
            handleHoverEffect(e);
          }}
          onMouseLeave={(e) => {
            handleLeave(e);
            handleLeaveEffect(e);
          }}
          style={iconStyle}
        >
          <img src="/images/officetrim.png" alt="Business" style={iconStyle} />
          <div className="tooltip" style={tooltipStyle}>
            Business
          </div>
        </button>
      </div>
    </div>
  );
};

export default Destination;