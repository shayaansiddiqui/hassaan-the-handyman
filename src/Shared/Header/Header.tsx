import PropTypes from 'prop-types';
import {MenuItem} from "../../Interface/MenuItem.tsx";
import Menu from "./Menu.tsx";
import styles from './Header.module.css'

// The Header component
const Header = ({menuData}: { menuData: MenuItem[] }) => {
        console.log(menuData);
        return (
            <header>
                <nav className={styles.headerNav}>
                    <div className={styles.logo}>
                        <img className={styles.logo} src="hassaan_logo.png" alt="Handyman Logo"/>
                        <span className={styles.slogan}>Handyman Services with Hassaan</span>
                    </div>
                    <Menu items={menuData}/>
                </nav>
            </header>
        );
    }
;

Header.propTypes = {
    menuData: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string,
        children: PropTypes.arrayOf(PropTypes.shape({ // Recursive type support
            label: PropTypes.string.isRequired,
            url: PropTypes.string,
            children: PropTypes.array
        }))
    })).isRequired,
};

export default Header;
