// Simple component for a single menu item (assuming you have styling)
import {MenuItem} from "../../Interface/MenuItem.tsx";
import styles from './MenuItemElement.module.css'

const MenuItemElement = ({label, url}: MenuItem) => (
    <a className={styles.menuLink} href={url || '#'}>{label}</a> // Render only the anchor
);

export default MenuItemElement;