// Recursive component to handle nested menus
import {MenuItem} from "../../Interface/MenuItem.tsx";
import MenuItemElement from "./MenuItemElement.tsx";
import styles from './Menu.module.css';

const Menu = ({ items }: { items: MenuItem[] }) => (
    <ul className={styles.menuList}>
        {items?.sort((a, b) => a.label.localeCompare(b.label))?.map((item) => (
        <li key={item.label}>
            <MenuItemElement label={item.label} url={item.url} />
            {item.children && (
                <div className={styles.submenu}>
                    <Menu items={item.children} />
                </div>
            )}
        </li>
        ))
    }
    </ul>
);

export default Menu;