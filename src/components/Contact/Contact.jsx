import React, { useState } from 'react';
import '../Contact/Contact.css';
import emailjs from '@emailjs/browser';

import Tiktok from '../../assets/tiktok.png';
import Instaa from '../../assets/insta.png';
import Linkedinn from '../../assets/linkedin.png';

const EMAILJS_SERVICE_ID = 'service_rtwusoj';
const EMAILJS_TEMPLATE_ID = 'template_nxjt0cv';
const EMAILJS_PUBLIC_KEY = 'Vz2hPj_7raiBie8ZG';

const Contact = () => {
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false); // Nuevo estado para el mensaje de envío
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviando(true); // Mostrar mensaje de envío

    console.log({ nombre, email, mensaje });
    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { message: mensaje, from_name: nombre, reply_to: email },
        EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === 'OK') {
            setEnviado(true);
          }
        },
        (error) => {
          // console.log(error.text);
        }
      )
      .finally(() => {
        setEnviando(false); // Ocultar mensaje de envío después de la respuesta
      });
  };

  return (
    <div className='FatherContact'>
      <h2>Escríbenos!</h2>
      {enviado && <div className='boxsentmessage'><p>¡Tu mensaje fue enviado!</p></div>}
      {enviando && <div className='boxsentmessage'><p>Tu mensaje se está enviando...</p></div>}
      {!(enviado || enviando) && (
        <form onSubmit={handleSubmit} id="formContacto">
          <div className="campo">
            <label className='Labelnamecostume' htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="campo">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="campo">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            />
          </div>
          <div className='BoxbuttonContact'>
            <button type="submit">Enviar</button>
          </div>
        </form>
      )}

      <div className='Socialmedia'>
        <a href="https://www.tiktok.com/@agencialuaoficial/"><img src={Tiktok} alt="" /></a>
        <a href="https://www.instagram.com/mundoleon/"><img src={Instaa} alt="" /></a>
        <a href="https://www.linkedin.com/company/agencialua/"><img src={Linkedinn} alt="" /></a>
      </div>
    </div>
  );
};

export default Contact;
