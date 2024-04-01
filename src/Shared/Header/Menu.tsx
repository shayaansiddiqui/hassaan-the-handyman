// Recursive component to handle nested menus
import {MenuItem} from "../../Interface/MenuItem.tsx";
import MenuItemElement from "./MenuItemElement.tsx";
import styles from './Menu.module.css';

const Menu = ({ items, root }: { items: MenuItem[], root: number }) => {
    //const sortedItems = items.sort((a, b) => a.label.localeCompare(b.label));


    return (
        <ul className={styles.menuList}>
            {items.map((item) => (
                <li key={item.label}>
                    <MenuItemElement label={item.label} url={item.url}/>
                    {item.children && (
                        <div className={styles.submenu} style={{left: root * 100 + 'px', top: root == 0 ? '100%' : 0}}>
                            <Menu
                                items={item.children ? item.children.sort((a, b) => a.label.localeCompare(b.label)) : item.children}
                                root={root + 1}
                            />
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Menu;