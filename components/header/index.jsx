import Image from 'next/image';
import Logo from "/public/images/losalao1.png"
import Link from 'next/link';
import Styles from "./header.module.scss"



const Header = () => {
   
    return (
        <div className={Styles.container}>
            <div className={Styles.logotipo}>
                <Image src={Logo} alt='Logo'/>
            </div>
            <div className={Styles.menu}>
                        <Link href="/">Home</Link>
                    
                        <Link href="/Service">Serviços</Link>
                   
                        <Link href="/Contact">Contato</Link>
                   
            </div>
            <div className={Styles.action}>
            <a href="https://wa.me/3180220400" target="_blank" rel="noopener noreferrer" className={Styles.button}>
            WhatsApp
      </a>
            </div>

        </div>
    );
}

export default Header;