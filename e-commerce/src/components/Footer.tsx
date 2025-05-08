import "../Styling/footer.css";
import Twitter from '../assets/images/twitter.svg';
import Facebook from '../assets/images/facebook.svg';
import pinterest from '../assets/images/pinterest.png';

function Footer() {
  return (
    <div>
      <footer id="Contact">
        <div className="footer-div">
          <div className="footer-div1">
            <h1>TrendWave</h1>
            <p>
              Suspendisse varius enim in era elementum tristique.Duis cursus,mi
              quis viverra arnare,eros dolor interdum nulla.
            </p>

            <div className="footer-div1-flex">
              <img
                className="twitter-logo"
                src={Twitter}
                alt="twitter-logo"
              />
              <img
                className="facebook-logo"
                src={Facebook}
                alt="facebook"
              />
              <img className="p-logo" src={pinterest} alt="p-logo" />
            </div>
          </div>
          <div className="footer-div2">
            <h3>Quick links</h3>
            <p className="footer-div2-p">Image Licensin</p>
            <p className="footer-div2-p">Style Guide</p>
            <p className="footer-div2-p">Privacy Policy</p>
          </div>
          <div className="footer-div3">
            <h3>Shop Category</h3>
            <p className="footer-div3-p">Image Licensin</p>
            <p className="footer-div3-p">Style Guide</p>
            <p className="footer-div3-p">Privacy Policy</p>
          </div>
          <div className="footer-div4">
            <h3>Pertners</h3>
            <p className="footer-div4-p">Image Licensin</p>
            <p className="footer-div4-p">Style Guide</p>
            <p className="footer-div4-p">Privacy Policy</p>
          </div>
        </div>
      </footer>
      
    </div>
  );
}

export default Footer;
