import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <a
        className="footer__button"
        href="https://github.com/soojeong-park-ca"
        target="_blank"
      >
        Coded by&nbsp;
        <i className="fa-brands fa-square-github footer__button-icon"></i>
        &nbsp;Soojeong Park
      </a>
    </footer>
  );
};

export default Footer;
