/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */




import React from 'react';
import { Card } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
           <Card>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted">Footer</Card.Footer>
    </Card> 
        </div>
    );
};

export default Home;