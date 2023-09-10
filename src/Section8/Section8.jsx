// const Section8 = () => {
//   return (
//     <div className="flex justify-center items-center p-24">
//       <div className="p-24 w-[1145px] bg-[#47474780] flex  flex-col justify-center items-center gap-5">
//         <h3 className="text-[53px] font-semibold text-white">
//           Subscribe Our Newsletter
//         </h3>
//         <div className="flex gap-3 rounded-md overflow-hidden ">
//           <input type="text" className="pl-5 outline-none" placeholder="Name" />
//           <input
//             type="email"
//             className="pl-5 outline-none"
//             placeholder="Enter your Email"
//           />
//           <button className="uppercase w-[116px] font-semibold  bg-[#E3B748] p-2">
//             send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Section8;

import styles from "./Section8.module.css";
const Section8 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>Subscribe Our Newsletter</h3>
        <div className={styles.inputs}>
          <input
            type="text"
            className={styles.nameinput}
            placeholder="Name"
          />
          <input
            type="email"
            className={styles.email}
            placeholder="Enter your Email"
          />
          <button className={styles.button}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Section8;
