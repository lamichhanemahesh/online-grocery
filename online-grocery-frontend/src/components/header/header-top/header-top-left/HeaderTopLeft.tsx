import styles from "@/components/header/header-top/header-top-left/HeaderTopLeft.module.css";
const HeaderLeft: React.FC = () => {
  return (
    <div className="header-left">
      <a href="tel:#" className="call">
        <i className="p-icon-phone-solid"></i>
        <span>+456 789 000</span>
      </a>
      <span className="divider"></span>
      <a href="contact.html" className="contact">
        <i className="p-icon-map"></i>
        <span>25 West 21th STREET, Miami FL, USA</span>
      </a>
    </div>
  )
}

export default HeaderLeft