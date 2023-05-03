/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';

const Main = () => {
    return (
        <div>
           <Header></Header> 
           <Container>
      <Row>
        <Col className='text-center'><h2>Main Content comming</h2></Col>
      </Row>
    </Container>
           <Footer></Footer>
        </div>
    );
};

export default Main;