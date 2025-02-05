import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer bg-base-300 text-base-content p-10">
      <div>
        <h6 className="footer-title flex items-center gap-2 text-xl font-bold">
          <FaReact className="text-blue-500" /> EduConnect
        </h6>
        <p>Empowering Learning, Connecting Educators & Students.</p>
      </div>

      <nav>
        <h6 className="footer-title">Resources</h6>
        <a className="link link-hover">Courses</a>
        <a className="link link-hover">Tutors</a>
        <a className="link link-hover">Workshops</a>
        <a className="link link-hover">Certifications</a>
      </nav>

      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Blog</a>
      </nav>

      <nav>
        <h6 className="footer-title">Follow Us</h6>
        <div className="grid grid-flow-col gap-4 text-lg">
          <a href="#" className="hover:text-blue-600">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-blue-700">
            <FaLinkedin />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
