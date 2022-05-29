const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white">
      <div
        className="text-center pt-5"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", fontWeight: "bold" }}
      >
        Stack Overflow Clone
      </div>
      <div
        className="text-center p-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", fontSize: "14px" }}
      >
        All Rights Reserved
      </div>
      <div
        className="text-center pb-5"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", fontSize: "14px" }}
      >
        @ 2022
      </div>
    </footer>
  );
};

export default Footer;
