function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__nav">
        <li className="footer__item">
          <a className="footer__link" href="#">
            About
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#">
            Pricing
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#">
            Terms of Use
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#">
            Privacy Policy
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#">
            Blog
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#">
            Contact Us
          </a>
        </li>
      </ul>
      <img src="img/logo.png" alt="Logo" className="footer__logo" />
    </footer>
  );
}
export default Footer;
