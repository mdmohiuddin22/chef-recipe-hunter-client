/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub, FaGoogle} from "react-icons/fa";

const Login = () => {
    return (
        <div>
            <h3>Login With</h3>
             <Button className='mb-2' variant="outline-primary"> <FaGoogle/> Login With Google</Button>
<br />
             <Button variant="outline-secondary"> <FaGithub/> Login With Github</Button>
        </div>
    );
};

export default Login;