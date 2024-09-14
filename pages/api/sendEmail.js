// pages/api/sendEmail.js
import { SMTPClient } from 'emailjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { name, email, whatsapp, message } = req.body;

  const client = new SMTPClient({
    user: process.env.EMAIL,
    password: process.env.PASSWORD,
    host: 'smtp.gmail.com',
    ssl: true,
  });

  try {
    const result = await client.sendAsync({
      text: `Nome: ${name}\nEmail: ${email}\nWhatsApp: ${whatsapp}\nMensagem: ${message}`,
      from: process.env.EMAIL,
      to:process.env.EMAIL , // Altere para o destinatário desejado
      subject: 'Novo Contato do Formulário',
    });
    console.log(result);
    res.status(200).json({ message: "Email enviado com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao enviar o email.' });
  }
}

