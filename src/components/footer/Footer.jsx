import './Footer.css';

import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="foooter">
      <div className="elements">
        <NavLink to="/">
          <h5 className="padding-text-foot">Home</h5>
        </NavLink>
        <h5>|</h5>
        <h5>Terms and Conditions </h5>
        <h5>|</h5>
        <h5>Privacy Policy</h5>
        <h5>|</h5>
        <h5>Collection Statement</h5>
        <h5>|</h5>
        <h5>Help</h5>
        <h5>|</h5>
        <h5>Manage Account</h5>
      </div>
      <div>
        <h5 className="letrasdistinta">
          Copyright © 2016 DEMO Streaming. All Rights Reserved
        </h5>
      </div>
      <div className="allicons">
        <div className="iconsrrss1">
          <img
            className="facebookicon"
            src="https://res.cloudinary.com/dpsqwk5qg/image/upload/v1678458762/iconsrrss/facebook-white_u96si3.svg"
            alt="facebooklogo"
          />
          <img
            className="twitericon"
            src="https://res.cloudinary.com/dpsqwk5qg/image/upload/v1678458703/iconsrrss/twitter-white_tjp9vq.svg"
            alt="twiterlogo"
          />
          <img
            className="instagramicon"
            src="https://res.cloudinary.com/dpsqwk5qg/image/upload/v1678458724/iconsrrss/instagram-white_ks5wwd.svg"
            alt="instagramlogo"
          />
        </div>
        <div className="iconsrrss2">
          <img
            className="appleicon"
            src="https://res.cloudinary.com/dpsqwk5qg/image/upload/v1678460618/iconsrrss/app-store_nq9gxy.svg"
            alt="applelogo"
          />
          <img
            className="googleicon"
            src="https://res.cloudinary.com/dpsqwk5qg/image/upload/v1678460632/iconsrrss/play-store_r4vpob.svg"
            alt="googlelogo"
          />
          <img
            className="microsofticon"
            src="https://res.cloudinary.com/dpsqwk5qg/image/upload/v1678460641/iconsrrss/windows-store_qcmppb.svg"
            alt="microsoftlogo"
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
