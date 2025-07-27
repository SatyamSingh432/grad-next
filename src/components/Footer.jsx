import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="brand-name-container">
          <h1 className="brand-name">gradnext</h1>
        </div>
        <div className="get-in-touch">
          <h2 className="section-title">Get in touch:</h2>
          <p className="description">
            For any queries or support, write to us at
          </p>
          <p className="email">info@gradnext.co</p>

          <div className="button-group">
            <button className="btn outline">Apply as Mentor</button>
            <button className="btn filled">Insights by gradnext</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          Copywrite © 2024 by gradnext | All Rights Reserved
        </p>
        <div className="links">
          <a href="#">Contact Us</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Cancellation/Refund Policy</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
