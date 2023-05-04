/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const Chefs = () => {
    const {id,name} =useParams();
    return (
        <div>
       <h2>All Recipes :{id}</h2>
       
         
        </div>
    );
};

export default Chefs;