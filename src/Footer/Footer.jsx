import './Footer.css';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li>
            <Link href="/about" className="link">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="link">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/profile" className="link">
              Profile
            </Link>
          </li>
          <li>
            <Link href="/services" className="link">
              Services
            </Link>
          </li>
          <li>
            <Link href="/careers" className="link">
              Careers
            </Link>
          </li>
          <li>
            <Link href="/support" className="link">
              Support
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
