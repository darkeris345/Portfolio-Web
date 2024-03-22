// import { useState, useEffect } from "react";
// import { Button } from "react-bootstrap";

// const GetUp: React.FC = () => {
//   const [showScrollButton, setShowScrollButton] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 200) {
//         setShowScrollButton(true);
//       } else {
//         setShowScrollButton(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };
//   return (
//     <div style={{ position: "fixed", bottom: "100px", right: "20px", width: "100px" }}>
//       {showScrollButton && (
//         <Button
//           variant="primary"
//           className="scroll-to-top-button"
//           onClick={scrollToTop}
//         >
//           Scroll to Top
//         </Button>
//       )}
//     </div>
//   );
// };

// export default GetUp;
