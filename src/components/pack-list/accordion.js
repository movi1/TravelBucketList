import React from 'react';
import { Accordion, Container, Row, Col, Button } from 'react-bootstrap';

const AccordionComponent = ({ activeKey, handleAccordionChange, handleGoBack, handlePrint, printing, essentialsData }) => {
    const categories = ["🎫 Essentials", "🧳 Clothes", "🛫 Carry-On", "🔌 Misc", "💄 Make-Up", "🌍 Your Trip"];

  return (
    <Container>
      <Row>
        {categories.map((category, index) => (
          <Col key={index} md={4}>
            <Accordion
              activeKey={activeKey === index.toString() ? activeKey : undefined}
              onSelect={handleAccordionChange}
              defaultActiveKey={categories.map((_, i) => i.toString())}
              allowToggle={true}
            >
              <Accordion.Item eventKey={index.toString()}>
                <Accordion.Header>{category}</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    {essentialsData && essentialsData[category] ? (
                      essentialsData[category].map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))
                    ) : null}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <Button variant="light" onClick={handleGoBack} className="mt-3">Back</Button>
        </Col>
        <Col>
          <Button variant="light" onClick={handlePrint} className="mt-3 mx-auto" disabled={printing}>
            {printing ? 'Printing...' : 'Print Checklist'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AccordionComponent;
