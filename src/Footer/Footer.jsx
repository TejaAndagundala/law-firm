// import logoImage from "../assests/logo.png";
// import instaLogo from "../assests/SocialMedia/InstagramLogo.png";
// import tweeterLogo from "../assests/SocialMedia/TweeterLogo.png";
// import facebookLogo from "../assests/SocialMedia/FacebookLogo.png";
// import pentrestLogo from "../assests/SocialMedia/PinterestLogo.png";

// const Footer = () => {
//   return (
//     <div className="bg-[#171717] flex flex-col p-24 gap-8 justify-center">
//       <div className="flex justify-between  ">
//         <img src={logoImage} alt="logoImage" />
//         <ul className="flex text-white text-[20px] font-semibold gap-10">
//           <a href="#">
//             <li>Home</li>
//           </a>
//           <a href="#">
//             <li>Attorneys</li>
//           </a>
//           <a href="#">
//             <li>Prectice Areas</li>
//           </a>
//           <a href="#">
//             <li>About Us</li>
//           </a>
//         </ul>
//         <div className="flex gap-5">
//           <a href="#">
//             <img src={instaLogo} alt="instalogo" />
//           </a>
//           <a href="#">
//             <img src={facebookLogo} alt="facebooklogo" />
//           </a>
//           <a href="#">
//             <img src={tweeterLogo} alt="tweeterLogo" />
//           </a>
//           <a href="#">
//             <img src={pentrestLogo} alt="pentrestlogo" />
//           </a>
//         </div>
//       </div>
//       <div className="text-center flex justify-center text-white items-center gap-10 font-semibold opacity-90">
//         <h3>© 2020 Acme. All right reserved.</h3>
//         <h3> Privacy Policy</h3>
//         <h3>Terms of Service</h3>
//       </div>
//     </div>
//   );
// };

// export default Footer;

// import logoImage from "../assests/LogoImg.png";
// import instaLogo from "../assests/SocialMedia/InstagramLogo.png";
// import tweeterLogo from "../assests/SocialMedia/TwitterLogo.png";
// import facebookLogo from "../assests/SocialMedia/FacebookLogo.png";
// import pentrestLogo from "../assests/SocialMedia/PinterestLogo.png";
// import styles from "./Footer.module.css";
// const Footer = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.footertop}>
//         <img src={logoImage} alt="logoImage" />
//       </div>
//       <ul className={styles.menu}>
//         <a href="#">
//           <li>Home</li>
//         </a>
//         <a href="#">
//           <li>Attorneys</li>
//         </a>
//         <a href="#">
//           <li>Practice Areas</li>
//         </a>
//         <a href="#">
//           <li>About Us</li>
//         </a>
//       </ul>
//       <div className={styles.socialicons}>
//         <a href="#">
//           <img src={instaLogo} alt="instalogo" />
//         </a>
//         <a href="#">
//           <img src={facebookLogo} alt="facebooklogo" />
//         </a>
//         <a href="#">
//           <img src={tweeterLogo} alt="tweeterLogo" />
//         </a>
//         <a href="#">
//           <img src={pentrestLogo} alt="pentrestlogo" />
//         </a>
//       </div>
//       <div className={styles.footerbottom}>
//         <h3>&copy; 2020 Acme. All right reserved.</h3>
//         <h3>Privacy Policy</h3>
//         <h3>Terms of Service</h3>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import logoImage from "../assests/LogoImg.png";
import instaLogo from "../assests/SocialMedia/InstagramLogo.png";
import tweeterLogo from "../assests/SocialMedia/TwitterLogo.png";
import facebookLogo from "../assests/SocialMedia/FacebookLogo.png";
import pentrestLogo from "../assests/SocialMedia/PinterestLogo.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    // <div className={styles.container}>
    //   <div className={styles.footerTop}>
    //     <img src={logoImage} alt="logoImage" />
    //   </div>
    //   <ul className={styles.menu}>
    //     <li>Home</li>
    //     <li>Attorneys</li>
    //     <li>Practice Areas</li>
    //     <li>About Us</li>
    //   </ul>
    //   <div className={styles.socialIcons}>
    //     <a href="#">
    //       <img src={instaLogo} alt="instalogo" />
    //     </a>
    //     <a href="#">
    //       <img src={facebookLogo} alt="facebooklogo" />
    //     </a>
    //     <a href="#">
    //       <img src={tweeterLogo} alt="tweeterLogo" />
    //     </a>
    //     <a href="#">
    //       <img src={pentrestLogo} alt="pentrestlogo" />
    //     </a>
    //   </div>
    //   <div className={styles.footerBottom}>
    //     <p>&copy; 2023 Acme. All rights reserved.</p>
    //     <p>Privacy Policy</p>
    //     <p>Terms of Service</p>
    //   </div>
    // </div>

    <footer className={styles.footer}>
      <div className={styles.footerleft}>
        <img src={logoImage} alt="Company Logo" />
      </div>
      <div className={styles.footermiddle}>
        <ul>
          <li>Home</li>
          <li>Attorneys</li>
          <li>Practice Areas</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className={styles.footerright}>
        <a href="#">
          <img src={instaLogo} alt="Instagram" />
        </a>
        <a href="#">
          <img src={facebookLogo} alt="Facebook" />
        </a>
        <a href="#">
          <img src={tweeterLogo} alt="twitter" />
        </a>
        <a href="#">
          <img src={pentrestLogo} alt="pinterest" />
        </a>
      </div>
      <div className={styles.footercompanydetails}>
        <p>@2020 Acme. All right reserved. </p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;
