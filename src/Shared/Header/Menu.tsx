// Recursive component to handle nested menus
import {MenuItem} from "../../Interface/MenuItem.tsx";
import MenuItemElement from "./MenuItemElement.tsx";
import styles from './Menu.module.css';

const Menu = ({items}: { items: MenuItem[] }) => (
    <ul className={styles.menuList + ' ' + styles.topLevel}>
        {items.map((item) => (
            <li key={item.label}>
                <MenuItemElement label={item.label} url={item.url}/>
                {item.children && (
                    // Sort only if item.children exists
                    <Menu items={item.children.sort((a, b) => a.label.localeCompare(b.label))}/>
                )}
            </li>
        ))}
    </ul>
);

export default Menu;