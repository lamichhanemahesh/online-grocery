import styles from "@/components/header/header-top/HeaderTop.module.css";
import HeaderTopLeft from "@/components/header/header-top/header-top-left/HeaderTopLeft";
import HeaderTopRight from "@/components/header/header-top/header-top-right/HeaderTopRight";
const HeaderTop = () => {
    return (
        <div className={styles.header_top}>
            <div className="container">
                <HeaderTopLeft/>
                <HeaderTopRight/>
            </div>
        </div>
    )
}

export default HeaderTop