// import Card from "./Card/Card";
// import cl1Image from "../assests/Client/Client1.png";
// import cl2Image from "../assests/Client/Client2.png";
// import cl3Image from "../assests/Client/Client3.png";
// import WestIcon from "@mui/icons-material/West";
// import EastIcon from "@mui/icons-material/East";

// const userDetails = [
//   {
//     imageUrl: cl1Image,
//     fullName: "Jane Copper",
//     designation: "Ceo of Hunt",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nesciunt deleniti voluptas quos eius mollitia facilis porro iste molestiae praesentium.",
//   },
//   {
//     imageUrl: cl2Image,
//     fullName: "Devon Lane",
//     designation: "Ceo of Hunt",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nesciunt deleniti voluptas quos eius mollitia facilis porro iste molestiae praesentium.",
//   },
//   {
//     imageUrl: cl3Image,
//     fullName: "Robert fox",
//     designation: "Ceo of Hunt",
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nesciunt deleniti voluptas quos eius mollitia facilis porro iste molestiae praesentium.",
//   },
// ];

// const Section5 = () => {
//   return (
//     <div className="flex flex-col p-24 gap-32">
//       <div className="flex justify-between pl-10 pr-10">
//         <h3 className="text-left text-[54px] font-semibold text-white w-[374px] ">
//           What says our happy Clients
//         </h3>
//         <div className="flex gap-4">
//           <button className="rounded-full bg-[#E6E6E6]  w-[80px] h-[80px]  p-5 hover:bg-[#E3B748]">
//             <WestIcon />
//           </button>
//           <button className="rounded-full bg-[#E6E6E6] w-[80px] h-[80px] p-5 hover:bg-[#E3B748]">
//             <EastIcon />
//           </button>
//         </div>
//       </div>
//       <div className="flex justify-center  gap-10">
//         {userDetails.map((userObj) => {
//           return (
//             <Card
//               key={userObj.fullName}
//               designation={userObj.designation}
//               imageUrl={userObj.imageUrl}
//               fullName={userObj.fullName}
//               content={userObj.content}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Section5;

import Card from "./Card/Card";
import cl1Image from "../assests/Client/Client1.png";
import cl2Image from "../assests/Client/Client2.png";
import cl3Image from "../assests/Client/Client3.png";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import styles from "./Section5.module.css";
const userDetails = [
  {
    imageUrl: cl1Image,
    fullName: "Jane Copper",
    designation: "Ceo of Hunt",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nesciunt deleniti voluptas quos eius mollitia facilis porro iste molestiae praesentium.",
  },
  {
    imageUrl: cl2Image,
    fullName: "Devon Lane",
    designation: "Ceo of Hunt",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nesciunt deleniti voluptas quos eius mollitia facilis porro iste molestiae praesentium.",
  },
  {
    imageUrl: cl3Image,
    fullName: "Robert fox",
    designation: "Ceo of Hunt",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nesciunt deleniti voluptas quos eius mollitia facilis porro iste molestiae praesentium.",
  },
];

const Section5 = () => {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3 className={styles.title}>What says our happy Clients</h3>
        <div className={styles.navigation}>
          <button className={styles.button}>
            <WestIcon />
          </button>
          <button className={styles.button}>
            <EastIcon />
          </button>
        </div>
      </div>
      <div className={styles.cardContainer}>
        {userDetails.map((userObj) => {
          return (
            <Card
              key={userObj.fullName}
              designation={userObj.designation}
              imageUrl={userObj.imageUrl}
              fullName={userObj.fullName}
              content={userObj.content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Section5;
