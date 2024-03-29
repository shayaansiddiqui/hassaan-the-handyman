import styles from './Footer.module.css'
import PropTypes from "prop-types";

const addProductionType = (developmentMode: string) => {
    switch (developmentMode) {
        case 'production':
            return styles.production;
        case 'test':
            return styles.test;
        case 'development':
            return styles.development;
        default:
            return '';
    }
}

const Footer = (props: { developmentMode: string }) => {
    return (
        <footer className={`${styles.footer} ${addProductionType(props.developmentMode)}`}>
            Copyright© {new Date().getFullYear()}
        </footer>
    );
}

Footer.propTypes = {
    developmentMode: PropTypes.string.isRequired,
};

export default Footer;