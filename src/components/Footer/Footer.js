import React from 'react'
import { Link } from 'react-router-dom';
import { ImFacebook2 } from "react-icons/im";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import './Footer.css'


function Footer() {
    return (
        <div className='footer'>
            <div className='footer-contact'>
                <Link className='footer-link'>About Us</Link>
                <Link className='footer-link'>Contact Us</Link>
                <Link className='footer-link'>Support</Link>
                <Link className='footer-link'>Privecy Policy</Link>
                <div className='footer-socials'>
                    <Link className='social-link'> <ImFacebook2 /> </Link>
                    <Link className='social-link'> <CiTwitter /> </Link>
                    <Link className='social-link'> <FaInstagram /> </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;