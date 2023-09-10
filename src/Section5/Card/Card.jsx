// const Card = ({ imageUrl, fullName, designation, content }) => {
//   return (
//     <div className="hover:bg-[#2E2E2E] rounded-lg w-[359px] p-10 flex flex-col gap-5 border border-[#2E2E2E]">
//       <img src={imageUrl} className="w-[90px] h-[90px]" alt={fullName} />
//       {/* text part */}
//       <div className="flex flex-col gap-4">
//         <div className="flex flex-col">
//           <h3 className="text-white text-[24px] font-semibold">{fullName}</h3>
//           <h4 className="text-white text-[14px] font-semibold">
//             {designation}
//           </h4>
//         </div>
//         <p className="text-white opacity-30 ">{content}</p>
//       </div>
//     </div>
//   );
// };

// export default Card;
import styles from "./Card.module.css";
const Card = ({ imageUrl, fullName, designation, content }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={imageUrl} className={styles.image} alt={fullName} />
      <div className={styles.text}>
        <div className={styles.innerText}>
          <h3 className={styles.fullname}>{fullName} </h3>
          <p className={styles.designationt}>{designation}</p>
        </div>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
};

export default Card;
