
import React from 'react';
import styles from './Service.module.scss';
import { useRouter } from 'next/router';

const Service = () => {
  const router = useRouter();

  return (
    <div className={styles.serviceContainer}>
      <header className={styles.header}>
        <button onClick={() => router.push('/')} className={styles.headerButton}>
          Home
        </button>
        <button onClick={() => router.push('/Contact')} className={styles.headerButton}>
          Fale Conosco
        </button>
      </header>
      <h1>Somos especialistas em cabelos lisos</h1>
      <p>
      Transforme seus cabelos com segurança e eficácia! Como especialista em alisamento sem formol, ofereço técnicas avançadas que garantem fios lisos, saudáveis e com movimento natural, sem comprometer a saúde dos seus cabelos. Além disso, cuido das suas madeixas com tratamentos de hidratação profunda, reconstrução capilar e nutrição intensa, restaurando a força, o brilho e a maciez que seus cabelos merecem.

Seja qual for a sua necessidade, estou aqui para devolver a vitalidade e a beleza dos seus fios, utilizando produtos de alta qualidade e métodos que respeitam a integridade dos cabelos.

Agende uma consulta e descubra o poder de um cabelo bem cuidado!
      </p>
      <h1>Serviços de Manicure e Pedicure</h1>
      <p>
        Oferecemos uma ampla gama de serviços de manicure e pedicure para mantê-lo com uma aparência impecável.
        Nossos especialistas estão prontos para cuidar das suas unhas com produtos de alta qualidade e técnicas 
        modernas que garantem um acabamento perfeito.
      </p>


      <div className={styles.imageGrid}>
        <img src="/images/anteDepois.jpg" alt="Manicure 1" />
        <img src="/images/servi.jpg" alt="Manicure 2" />
        <img src="/images/unha1.jpg" alt="Manicure 3" />
        <img src="/images/unha2.jpg" alt="Pedicure 1" />
        <img src="/images/glaucia2.jpg" alt="Pedicure 2" />
        <img src="/images/glaucia3.jpg" alt="Pedicure 3" />
      </div>

      <button onClick={() => router.push('/')} className={styles.backButton}>
        Voltar à Página Inicial
      </button>
    </div>
  );
};

export default Service;
