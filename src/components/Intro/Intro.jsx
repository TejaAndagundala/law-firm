// const Intro = () => {
//   return (
//     <div className="flex justify-between p-24 text-white justify-center">
//       <div className="w-[50%] pl-52 pr-24 ">
//         <h2 className="text-[53px] font-semibold">Let’s Introduce Ourself</h2>
//       </div>

//       <div className="h-[206px] border border-[#6A6A6A]"></div>

//       <div className="w-[50%] flex flex-col pl-40 gap-3 pr-20 ">
//         <h2 className="text-[32px]">Criminal Lawyer</h2>
//         <p className="text-white opacity-30 w-[450px]">
//           Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
//           sint. Velit officia consequatduis enim velit mollit Exercitation.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Intro;
import styles from "./Intro.module.css";
const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.introleft}>
        <h2 className={styles.introtitle}>Let’s Introduce Ourself</h2>
      </div>

      <div className={styles.introdivider}></div>

      <div className={styles.introright}>
        <h2 className={styles.introsubtitle}>Criminal Lawyer</h2>
        <p className={styles.introtext}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};

export default Intro;
