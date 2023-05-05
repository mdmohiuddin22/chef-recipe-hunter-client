/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChepsInfo = () => {
    const [chefs ,setChefs]= useState([]);
     
    useEffect( ()=>{
        fetch('https://khabar-ghor-recipes-server-mdmohiuddin22.vercel.app/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error=> console.error(error))
        console.log(chefs)
    },[])
    return (
        <div>
        <h3>All Chefs</h3>
    {
     chefs.map(chef => <div key={chef.id} >
         <Link to={`/chef/${chef.id}`}><h3>{chef.name}</h3>
         </Link>
         <h2>{chef.experience}</h2>
         <h3>{chef.likes}</h3>
         <h3>{chef.age}</h3>
         <img src={chef.picture} alt="" />
         <h3>{chef.num_recipes}</h3>
         <button >{chef.view_recipes_button}</button>
     </div>)
     
    }
 </div>
    );
};

export default ChepsInfo;