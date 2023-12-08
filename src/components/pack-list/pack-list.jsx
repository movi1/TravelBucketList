import React, { useState } from 'react';
import './pack-list.css';
import { Accordion, Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import essentialsData from './essentials.json';

function PackList() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [activeKey, setActiveKey] = useState(null);
  const [showAccordion, setShowAccordion] = useState(false); 

  const handleDestinationSelect = (destination) => {
    setSelectedDestination(destination);
    setShowAccordion(true); // Show accordion when a destination is selected
  };

  const handleAccordionChange = (newActiveKey) => {
    setActiveKey(newActiveKey);
  };

  const handleGoBack = () => {
    setSelectedDestination(null);
    setShowAccordion(false); // Hide accordion when going back
  };

  const renderDestinationSelection = () => {
    const iconStyle = {
      width: '200px',
      height: '150px',
      margin: '5px',
      background: 'none',
      border: 'none',
      padding: 0,
      position: 'relative', // Set position to relative for positioning the tooltip
    };
  
    const tooltipStyle = {
      position: 'absolute',
      top: '100%', // Position the tooltip below the button
      left: '50%', // Center the tooltip horizontally
      transform: 'translateX(-50%)',
      background: '#333',
      color: '#fff',
      padding: '5px',
      borderRadius: '5px',
      opacity: 0, // Initially hide the tooltip
      transition: 'opacity 0.3s ease', // Add a transition for a smooth fade-in effect
    };
  
    const handleHover = (event) => {
      const tooltip = event.currentTarget.querySelector('.tooltip');
      tooltip.style.opacity = 1;
    };
  
    const handleLeave = (event) => {
      const tooltip = event.currentTarget.querySelector('.tooltip');
      tooltip.style.opacity = 0;
    };
  
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Tell us about your trip:</h2>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <button
            onClick={() => handleDestinationSelect('Sun')}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            style={iconStyle}
          >
            <img src="/images/suntrim.png" alt="Sun" style={iconStyle} />
            <div className="tooltip" style={tooltipStyle}>
              Sun
            </div>
          </button>
          <button
            onClick={() => handleDestinationSelect('Snow')}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            style={iconStyle}
          >
            <img src="/images/snowtrim.png" alt="Snow" style={iconStyle} />
            <div className="tooltip" style={tooltipStyle}>
              Snow
            </div>
          </button>
          <button
            onClick={() => handleDestinationSelect('City')}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            style={iconStyle}
          >
            <img src="/images/citytrim.png" alt="City" style={iconStyle} />
            <div className="tooltip" style={tooltipStyle}>
              City
            </div>
          </button>
          <button
            onClick={() => handleDestinationSelect('Business')}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
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
  
  const renderAccordion = () => {
    try {
      const categories = Object.keys(essentialsData);
  
      return (
        <Container>
          <Row>
            {categories.map((category, index) => (
              <Col key={index} md={4}>
                <Accordion
                  activeKey={activeKey === index.toString() ? activeKey : undefined}
                  onSelect={handleAccordionChange}
                  defaultActiveKey={null}
                  alwaysOpen
                  allowToggle={true}
                >
                  <Accordion.Item eventKey={index.toString()}>
                    <Accordion.Header>{category}</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        {essentialsData[category].map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            ))}
          </Row>
          <Row>
            <Col>
              <Button variant="light" onClick={handleGoBack} className="mt-3">Back</Button> {/* Back button */}
            </Col>
          </Row>
        </Container>
      );
    } catch (error) {
      console.error('Error in PackList component:', error.message);
      return <div>Error loading essentials data. Please check the data format.</div>;
    }
  };
  
  return (
    <div>
      {selectedDestination ? renderAccordion() : renderDestinationSelection()}
    </div>
  );
}

export default PackList;