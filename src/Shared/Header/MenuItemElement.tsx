// Simple component for a single menu item (assuming you have styling)
import {MenuItem} from "../../interfaces/MenuItem.tsx";
import styles from './MenuItemElement.module.css'

const MenuItemElement = ({ label, url }: MenuItem) => (
    <a className={styles.menuLink} href={url || '#'}>
        {label} {/* Render the label */}
    </a>
);

export default MenuItemElement;