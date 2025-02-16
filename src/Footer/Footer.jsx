import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
// import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_outer_container}>
      <div className={styles.footer_inner_container}>
        <div className={styles.footer_icons}>
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className={styles.footer_data}>
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className={styles.service_code}>
          <p>Service Code</p>
        </div>
        <div className={styles["copy-write"]}> 1997-2024 Netflix, Inc.</div>
      </div>
    </div>
  );
};

export default Footer;

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// // import "bootstrap/dist/css/bootstrap.min.css";
// import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import styles from "./Footer.module.css";

// const Footer = () => {
//   return (
//     <footer className={styles.footer_outer_container}>
//       <Container className={styles.footer_inner_container}>
//         <Row>
//           <Col xs={12} md={12} className="text-center text-md-start mb-3">
//             <div className={styles.footer_icons}>
//               <FacebookOutlinedIcon />
//               <InstagramIcon />
//               <YouTubeIcon />
//             </div>
//           </Col>
//         </Row>
//         <Row>
//           <Col xs={6} md={3}>
//             <ul className={styles.footer_data_ul}>
//               <li>Audio Description</li>
//               <li>Investor Relations</li>
//               <li>Legal Notice</li>
//             </ul>
//           </Col>
//           <Col xs={6} md={3}>
//             <ul className={styles.footer_data_ul}>
//               <li>Help Center</li>
//               <li>Jobs</li>
//               <li>Cookie Preferences</li>
//             </ul>
//           </Col>
//           <Col xs={6} md={3}>
//             <ul className={styles.footer_data_ul}>
//               <li>Gift Cards</li>
//               <li>Terms of Use</li>
//               <li>Corporate Information</li>
//             </ul>
//           </Col>
//           <Col xs={6} md={3}>
//             <ul className={styles.footer_data_ul}>
//               <li>Media Center</li>
//               <li>Privacy</li>
//               <li>Contact Us</li>
//             </ul>
//           </Col>
//         </Row>
//         <Row>
//           <Col xs={12} className="text-center text-md-start mt-3">
//             <p className={styles.service_code}>Service Code</p>
//           </Col>
//         </Row>
//         <Row>
//           <Col xs={12} className="text-center text-md-start">
//             <p className={styles["copy-write"]}>1997-2024 Netflix, Inc.</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;