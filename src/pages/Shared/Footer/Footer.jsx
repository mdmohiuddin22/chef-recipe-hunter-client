/* eslint-disable no-unused-vars */
import React from "react"
import { FaFacebook, FaFacebookMessenger, FaPhone, FaYoutube} from "react-icons/fa";
import { ImMail2 } from "react-icons/im";

const Footer = () => <footer className="page-footer font-small blue pt-4 d-flex flex-column min-vh-100">
    <div className="container-fluid text-center text-md-left  mt-auto">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">KHABAR GHOR RECIPES</h5>
                <p>Our fish feed machines are built to last, with durable materials and advanced engineering. Want to make your own fish feed and save feed costs? Click to see our fish feed machine! Engineer Profession Guide. Turnkey Solutions Support. Free Feed Making Formula. Free Machine Fittings.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">About Us</h5>
                <ul className="list-unstyled">
                    <li><a href="#!"><h2><FaFacebook></FaFacebook></h2></a></li>
                    <li><a href="#!"><h2><FaYoutube></FaYoutube></h2></a></li>

                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Contact Us</h5>
                <ul className="list-unstyled">
                    <li><a href="#!"><h3><FaFacebookMessenger></FaFacebookMessenger></h3></a></li>
                    <li><a href="#!"><h3><FaPhone></FaPhone></h3></a></li>
                    <li><a href="#!"><h3><ImMail2></ImMail2></h3></a></li>
                
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright:
        <a href="https://mdbootstrap.com/"> KHABAR Ghor Recipes</a>
    </div>

</footer>

export default Footer