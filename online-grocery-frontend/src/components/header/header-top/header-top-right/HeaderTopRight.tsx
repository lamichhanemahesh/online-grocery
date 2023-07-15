import styles from "@/components/header/header-top/header-top-right/HeaderTopRight.module.css";
const HeaderRight: React.FC = () => {
  return (
    <div className="header-right">
      <div className="dropdown switcher">
        <a href="#currency">USD</a>
        {/* <ul className="dropdown-box">
          <li>
            <a href="#USD">USD</a>
          </li>
          <li>
            <a href="#EUR">EUR</a>
          </li>
        </ul> */}
      </div>
      <div className="dropdown switcher">
        <a href="#language">
          <img src="images/flagus.jpg" width="14" height="10" className="mr-1" alt="flagus" />ENG </a>
        {/* <ul className="dropdown-box">
          <li>
            <a href="#USD">
              <img src="images/flagus.jpg" width="14" height="10" className="mr-1" alt="flagus" />ENG </a>
          </li>
          <li>
            <a href="#EUR">
              <img src="images/flagfr.jpg" width="14" height="10" className="mr-1" alt="flagfr" />FRH </a>
          </li>
        </ul> */}
      </div>
      <span className="divider"></span>
      <div className="social-links">
        <a href="#" className="social-link fab fa-facebook-f" title="Facebook"></a>
        <a href="#" className="social-link fab fa-twitter" title="Twitter"></a>
        <a href="#" className="social-link fab fa-pinterest" title="Pinterest"></a>
        <a href="#" className="social-link fab fa-linkedin-in" title="Linkedin"></a>
      </div>
    </div>
  )
}

export default HeaderRight