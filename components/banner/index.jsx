import React from "react";

import Button from '../button';
import Styles from './banner.module.scss';
import Image from "next/image";

const Banner = () => {
  return (
    <div className={Styles.container}>
  <div className={Styles.text}>
    <h1>Bem-vindo ao Nosso Salão</h1>
    <p>Trabalho com amor capricho e dedicação, especialista cabelos lisos</p>
    <p>Manicure e pedicure sou especialista em Plástica dos Pés</p>
    
  </div>
  <div className={Styles.imageContainer}>
    <Image 
      src="/images/capa.jpg" 
      alt="Imagem 1" 
      className={Styles.image} 
      width={600} // Define uma largura padrão
      height={800} // Define uma altura padrão
    />
  </div>
</div>

      
    
  );
};

export default Banner;