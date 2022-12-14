import { Container, Nav } from "react-bootstrap";
import { SiGmail } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer text-center bg-light py-3">
      <Container>
        {/* social links */}
        <Nav className="justify-content-center mb-2 gap-3" activeKey="/home">
          <Nav.Item>
            <a className="" href="mailto:atikfaruk593@gmail.com">
              <SiGmail className="fs-3" style={{ color: "#EA4335" }} />
            </a>
          </Nav.Item>
          <Nav.Item>
            <a
              href="https://www.facebook.com/atikfarukoffice"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="fs-3" style={{ color: "#3b5998 " }} />
            </a>
          </Nav.Item>
        </Nav>

        <small>
          ইহা আতিক ফারুকের ব্যক্তিগত ওয়েবসাইট।
          <br />
          এখান থেকে কোনো ছবি বা লেখা কপি করা আইনত দণ্ডনীয়।
          <hr />
          স্বত্ব © ২০২২ আতিক ফারুক
        </small>
      </Container>
    </footer>
  );
};

export default Footer;
