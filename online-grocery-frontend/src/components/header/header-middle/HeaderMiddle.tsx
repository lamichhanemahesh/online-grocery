import styles from "@/components/header/header-middle/HeaderMiddle.module.css";
import HeaderMiddleLeft from "@/components/header/header-middle/header-middle-left/HeaderMiddleLeft";
import HeaderMiddleCenter from "@/components/header/header-middle/header-middle-center/HeaderMiddleCenter";
import HeaderMiddleRight from "@/components/header/header-middle/header-middle-right/HeaderMiddleRight";
const HeaderMiddle:React.FC = () => {
  return (
    <div>
      <HeaderMiddleLeft/>
      <HeaderMiddleCenter/>
      <HeaderMiddleRight/>
    </div>
  )
}

export default HeaderMiddle