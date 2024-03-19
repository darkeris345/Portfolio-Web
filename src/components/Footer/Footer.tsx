import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="d-flex justify-content-center align-items-end pt-3 bottom-0 w-100">
      <p style={{ fontSize: "10px" }}>
        &copy; {new Date().getFullYear()} Author Dmitrij Purynzin. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
