
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from "./Contact.module.scss";
import Footer from "@/components/footer"

const Contact = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        // Limpar o formulário após o envio bem-sucedido
        setFormData({
          name: '',
          email: '',
          whatsapp: '',
          message: ''
        });
      } else {
        alert('Erro ao enviar email: ' + data.message);
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      alert('Erro ao enviar o formulário');
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button onClick={() => router.push("/")} className={styles.home}>
          Home
        </button>
        <button onClick={() => window.open('https://wa.me/3180220400', '_blank')} className={styles.button}>
          WhatsApp
        </button>
      </header>
      <div className={styles.texts}>
        <span>Entre em Contato Conosco</span>
        <h1>Está pronta para transformar seu visual?</h1>
        <p>
          Nossa equipe está à disposição para responder suas dúvidas, agendar um horário ou oferecer mais informações sobre nossos serviços. Adoramos conhecer novas clientes e ajudar a realçar sua beleza!
        </p>
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="whatsapp">WhatsApp:</label>
            <input 
              type="text" 
              id="whatsapp" 
              name="whatsapp" 
              value={formData.whatsapp} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Mensagem:</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            />
          </div>
          <button type="submit" className={styles.submitButton}>Enviar</button>
        </form>
      </div>
      
      
    </div>
    
    
  );
};

export default Contact;

