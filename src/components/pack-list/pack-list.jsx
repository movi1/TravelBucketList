import React, { useState } from 'react';
import './pack-list.css';
import { Accordion, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import essentialsData from './essentials.json';

function PackList() {
  // Initialize activeKey with null to start with all accordions closed
  const [activeKey, setActiveKey] = useState(null);

  try {
    if (!essentialsData || typeof essentialsData !== 'object') {
      throw new Error('Invalid essentials data format.');
    }

    const categories = Object.keys(essentialsData);

    const handleAccordionChange = (newActiveKey) => {
      setActiveKey(newActiveKey);
    };

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
      </Container>
    );
  } catch (error) {
    console.error('Error in PackList component:', error.message);
    return <div>Error loading essentials data. Please check the data format.</div>;
  }
}

export default PackList;
