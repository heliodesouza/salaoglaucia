import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a href="https://wa.me/3180220400" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} size="3x" />
        </a>
        <a href="https://www.facebook.com/share/t1XXkLpaHRQMhdXu/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="3x" />
        </a>
        <a href="https://www.instagram.com/glauciasousa_nails" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </a>
      </div>
      <p className={styles.credit}>
        Desenvolvido por <a href="https://www.instagram.com/heliotech40/" target="_blank" rel="noopener noreferrer">HelioTech40</a>
      </p>
    </footer>
  );
};

export default Footer;
