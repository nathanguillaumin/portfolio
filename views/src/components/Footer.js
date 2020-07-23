import React from 'react';
import '../styles/footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
  return (
    <div className='footer'>
        <ul className='info-contact'>
            <li><i class="fas fa-phone"></i>  07 86 83 67 83</li>
            <li><i class="fas fa-at"></i>  nathan.guillaumin@outlook.com</li>
        </ul>
        <ul className='nav-footer'>
        <li><a href='https://www.linkedin.com/in/nathanguillaumin/' target='_blank' rel='noopener noreferrer'><LinkedInIcon fontSize='large' /></a></li>
            <li><a href='https://www.facebook.com/nathan.guillaumin/'target='_blank' rel='noopener noreferrer'><FacebookIcon fontSize='large' /></a></li>
            <li><a href='https://twitter.com/GuillauminNath2' target='_blank' rel='noopener noreferrer'><TwitterIcon fontSize='large' /></a></li>
        </ul>
    </div>
  );
};

export default Footer;
