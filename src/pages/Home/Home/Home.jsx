/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Home = () => {
  const [chefsData ,setChefsData]= useState([]);
  fetch('https://khabar-ghor-recipes-server-mdmohiuddin22.vercel.app/chefs')
  .then((response)=>response.json())
  .then((data)=> setChefsData(data));
//  console.log(chefsData)
    return (
        <div>

{
  
}
       {/* {chefsData[0]?.chef?.map((chef) => (
          <div key={chef?.id} className="chef-card">
            <h2>{chef?.name}</h2>
            <p>{chef?.description}</p>
            <ul>
              {chef?.items?.map((item) => (
                <li key={item?.id}>
                  {item?.name} - ${item?.price}
                </li>
              ))}
            </ul>
            <p>Price: ${chef?.price}</p>
            <p>Duration: {chef?.duration}</p>
            <Link to={`/chefs/${chef?.id}`}>
              <button>Details</button>
            </Link>
          </div>
        ))}  */}
        </div>
    );
};

export default Home;