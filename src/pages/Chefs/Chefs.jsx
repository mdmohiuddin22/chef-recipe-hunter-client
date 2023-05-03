/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Chefs = () => {
    const [chefs ,setChefs]= useState([]);
     
    useEffect( ()=>{
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error=> console.error(error))
    },[])
    return (
        <div>
           <h3>All Chefs</h3>
           {
            chefs.map(chef => <p key={chef.id} >
                <Link>{chef.name}</Link>
            </p>)
           }
        </div>
    );
};

export default Chefs;