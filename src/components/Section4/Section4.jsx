// import Image1 from "../../assests/ImgGallery/BussinessCard.png";
// import Image2 from "../../assests/ImgGallery/PartnershipCard.png";
// import Image3 from "../../assests/ImgGallery/RealEstateCard.png";
// import Image4 from "../../assests/ImgGallery/BussinessLawCard.png";
// import Image5 from "../../assests/ImgGallery/LandLordCard.png";
// import Image6 from "../../assests/ImgGallery/ElderCard.png";

// const Section4 = () => {
//   return (
//     <div className="flex flex-col justify-center gap-20 pb-24">
//       <h2 className="text-center text-white text-[54px] font-semibold">
//         Area of Practices
//       </h2>
//       <div className="flex flex-wrap justify-center gap-6 ">
//         {/* 1 */}
//         <div className="flex items-center  gap-6">
//           <div className="relative">
//             <img src={Image1} alt="businesslaw" />
//             <h3 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center font-semibold text-white text-[20px]">
//               BUSINESS LAW
//             </h3>
//           </div>
//           <div className="relative ">
//             <img src={Image2} alt="partnershiplaw" />
//             <h3 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center font-semibold text-white text-[20px]">
//               Partnership LAW
//             </h3>
//           </div>
//         </div>
//         {/* 2 */}
//         <div className="flex items-center  gap-6">
//           <div className="relative">
//             <img src={Image3} alt="businesslaw" />
//             <h3 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center font-semibold text-white text-[20px]">
//               REAL ESTATE LAW
//             </h3>
//           </div>
//           <div className="relative">
//             <img src={Image4} alt="partnershiplaw" />
//             <h3 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center font-semibold text-white text-[20px]">
//               BUSINESS LAW
//             </h3>
//           </div>
//         </div>
//         {/* 3 */}
//         <div className="flex items-center  gap-6">
//           <div className="relative">
//             <img src={Image5} alt="businesslaw" />
//             <h3 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center font-semibold text-white text-[20px]">
//               LANDLORD DISPUTES
//             </h3>
//           </div>
//           <div className="relative ">
//             <img src={Image6} alt="partnershiplaw" />
//             <h3 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center font-semibold text-white text-[20px]">
//               ELDER ABUSE
//             </h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Section4;

import Image1 from "../../assests/ImgGallery/BussinessCard.png";
import Image2 from "../../assests/ImgGallery/PartnershipCard.png";
import Image3 from "../../assests/ImgGallery/RealEstateCard.png";
import Image4 from "../../assests/ImgGallery/BussinessLawCard.png";
import Image5 from "../../assests/ImgGallery/LandLordCard.png";
import Image6 from "../../assests/ImgGallery/ElderCard.png";
import styles from "./Section4.module.css";

const Section4 = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Area of Practices</h2>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img src={Image1} alt="businesslaw" />
          <h3>BUSINESS LAW</h3>
        </div>
        <div className={styles.card2}>
          <img src={Image2} alt="partnershiplaw" />
          <h3>PARTENERSHIP LAW</h3>
        </div>
        <div className={styles.card3}>
          <img src={Image3} alt="businesslaw" />
          <h3>REAL ESTATE LAW</h3>
        </div>
        <div className={styles.card4}>
          <img src={Image4} alt="partnershiplaw" />
          <h3>BUSINESS LAW</h3>
        </div>
        {/* Row 3 */}
        <div className={styles.card5}>
          <img src={Image5} alt="businesslaw" />
          <h3>LANDLORD DISPUTES</h3>
        </div>
        <div className={styles.card6}>
          <img src={Image6} alt="partnershiplaw" />

          <h3>ELDER ABUSE</h3>
        </div>
      </div>
    </div>
  );
};

export default Section4;
