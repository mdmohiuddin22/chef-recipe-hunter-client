/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
// /* eslint-disable no-unused-vars */
// import React, { useContext } from 'react';
// import { Button } from 'react-bootstrap';
// import { FaGithub, FaGoogle} from "react-icons/fa";
// import { AuthContext } from '../AuthProvider/AuthProvider';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Login = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     console.log('login page location', location,signIn)
//     return (
//         <div>
//           <div>
//         <div className="container">
//           <div className="row d-flex justify-content-center align-items-center">
//             <div className="col-md-6 ">
//               <div className="border w-100 m-auto text-center p-5">
//                 <form action="">
//                   <input
//                     // onChange={(e) => setEmail(e.target.value)}
//                     className="email p-3 m-2"
//                     type="email"
//                     placeholder="enter your email"
//                   />
//                   <input
//                     // onChange={(e) => setPassword(e.target.value)}
//                     className="password p-3 m-2"
//                     type="password"
//                     placeholder="enter your password"
//                   />
//                   <button
//                     // onClick={handleLogin}
//                     className="btn btn-info w-75 p-2 mt-3"
//                   >
//                     Login
//                   </button>
//                   <p className="p-2">
//                     <small className="text-info">
//                       are you new? register here..
//                     </small>
//                   </p>
//                 </form>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <img
//                 className="w-100"
//                 src="https://i.postimg.cc/Px19hvYp/login.jpg"
//                 alt=""
//               />
//             </div>
//             {/* <SocialLoginBtn></SocialLoginBtn> */}
//           </div>
//         </div>
//       </div>
//              <Button className='mb-2' variant="outline-primary"> <FaGoogle/> Login With Google</Button>
// <br />
//              <Button variant="outline-secondary"> <FaGithub/> Login With Github</Button>
//         </div>
//     );
// };

// export default Login;




import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle} from "react-icons/fa";
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location,signIn)
    const from = location.state?.from?.pathname || '/chefs' 

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
               <Button className='mb-2' variant="outline-primary"> <FaGoogle/> Login With Google</Button>
 <br />
  <Button variant="outline-secondary"> <FaGithub/> Login With Github</Button>
        </Container>
    );
};

export default Login;
