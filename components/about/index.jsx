// About.js
// About.js
import React from "react";
import Styles from './about.module.scss'; // Importa o módulo de estilos
import Image from 'next/image';


const About = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <h2 className={Styles.title}>Sobre Nós</h2>
        <p className={Styles.text}>
          Nosso salão é um espaço dedicado à beleza e bem-estar, oferecendo uma
          experiência única para nossas clientes. 
        </p>
        <p className={Styles.text}>
          Somos especialistas em cabelos lisos, manicure e pedicure, unhas postiças realistas e plásticas dos pés.
          
        </p>
      </div>
      <div className={Styles.imageContainer}>
        <Image
          src="/images/glaucia10.png" // Substitua pelo caminho da sua imagem
          alt="Imagem 1"
          className={Styles.image}
          width={150}
          height={150}
        />
        <Image
          src="/images/glaucia2.jpg"
          alt="Imagem 2"
          className={Styles.image}
          width={150}
          height={150}
        />
        <Image
          src="/images/glaucia3.jpg"
          alt="Imagem 3"
          className={Styles.image}
          width={150}
          height={150}
        />
        <Image
          src="/images/donaGlau.jpg"
          alt="Imagem 4"
          className={Styles.image}
          width={150}
          height={150}
        />
      </div>
    
    </div>
    
  );
};

export default About;

