// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const ChepsInfo = () => {
//     const [chefs ,setChefs]= useState([]);
     
//     useEffect( ()=>{
//         fetch('https://khabar-ghor-recipes-server-mdmohiuddin22.vercel.app/chefs')
//         .then(res => res.json())
//         .then(data => setChefs(data))
//         .catch(error=> console.error(error))
//         console.log(chefs)
//     },[])
//     return (
//         <div>
//         <h3>All Chefs</h3>
//     {
//      chefs.map(chef => <div className='card ' key={chef.id} >
//          <Link to={`/chef/${chef.id}`}><h3 className='card-title'>{chef.name}</h3>
//          </Link>
//       <div  className='card'>
//       <img className='img-fluid rounded mx-auto' src={chef.picture} alt="" />
//       <h2>Experience: {chef.experience}</h2>
//          <h3>Likes: {chef.likes}</h3>
//          <h3> Age: {chef.age}</h3>
        
//          <h3>Number Of Recipes: {chef.num_recipes}</h3>
//          <Button >View Details</Button>
         
//       </div>
       
//      </div>)}
//  </div>
//     );

// };

// export default ChepsInfo;


/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChepsInfo = () => {
    const [chefs, setChefs] = useState([]);
    const [loading, setLoading] = useState(true);
     
    useEffect(() => {
        fetch('https://khabar-ghor-recipes-server-mdmohiuddin22.vercel.app/chefs')
        .then(res => res.json())
        .then(data => {
            setChefs(data);
            setLoading(false);
        })
        .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h3 className='font-bold text-3xl mt-10 text-teal-400'>Chefs Section</h3>
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                chefs.map(chef => (
                    <div className='card ' key={chef.id}>
                       
                            <h3 className='card-title'>{chef.name}</h3>
                       
                        <div  className='card'>
                            <img className='img-fluid rounded mx-auto' src={chef.picture} alt="" />
                            <h2>Experience: {chef.experience}</h2>
                            <h3>Likes: {chef.likes}</h3>
                            <h3> Age: {chef.age}</h3>
                            <h3>Number Of Recipes: {chef.num_recipes}</h3>
                            <Link to={`/chef/${chef.id}`}>      <Button>View Details</Button>  </Link>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ChepsInfo;
