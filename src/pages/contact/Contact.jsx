import React, { useRef } from 'react'; // 1. Ajout de useRef
import emailjs from '@emailjs/browser'; // 1. Ajout de emailjs

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookMessenger,
  FaWhatsapp,
  FaTelegram,
  FaDribbble,
} from 'react-icons/fa';

import { FiSend } from 'react-icons/fi';
import "./contact.css";

const Contact = () => {
  // 2. Création de la référence pour le formulaire
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Remplace par tes vrais IDs récupérés sur ton dashboard EmailJS
    emailjs.sendForm(
      'service_cqkdbsv',   // Service ID
      'template_crnfzeg', // Template du formulaire sur email.JS
      form.current, 
      'n3VKNzsgBaL2O6tMz'  // Public key
    )
    .then((result) => {
        alert("Message envoyé avec succès !");
        e.target.reset(); // Vide le formulaire après envoi
    }, (error) => {
        alert("Erreur lors de l'envoi, réessayez.");
        console.log(error.text);
    });
  };

  return (
    <section className="contact section">
      <h2 className="section__title">Get In <span>Touch</span></h2>

      <div className='contact__container container grid'>
        <div className='contact__data'>
          <h3 className='contact__title'>Don't be Shy !</h3>
          <p className='contact__description'>
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon' />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">
                  <a href="mailto:huguesmariehounkpatin1@gmail.com">huguesmariehounkpatin1@gmail.com</a>
                </h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon' />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc"><a href="tel:+2290146097120">+229 0146097120</a></h4>
              </div>
            </div>
          </div>

          <div className='contact__socials'>
            <a href='https://m.me/hugues.hounkpatin' target='_blank' rel='noreferrer' className='contact__social-link'><FaFacebookMessenger /></a>
            <a href='https://wa.me/2290146097120' target='_blank' rel='noreferrer' className='contact__social-link'><FaWhatsapp /></a>
            <a href='https://t.me/hugueshounkpatin' target='_blank' rel='noreferrer' className='contact__social-link'><FaTelegram /></a>
            <a href='/' target='_blank' rel='noreferrer' className='contact__social-link'><FaDribbble /></a>
          </div>
        </div>

        {/* 3. Liaison de la fonction et de la ref au formulaire */}
        <form ref={form} onSubmit={sendEmail} className='contact__form'>
          <div className='form__input-group'>
            <div className='form__input-div'>
              <input 
                type='text' 
                name='user_name' // Assure-toi que ce nom est dans ton template EmailJS
                placeholder='Your Name' 
                className='form__control' 
                required
              />
            </div>

            <div className='form__input-div'>
              <input 
                type='email' 
                name='user_email' 
                placeholder='Your Email' 
                className='form__control' 
                required
              />
            </div>

            <div className='form__input-div'>
              <input 
                type='text' 
                name='subject' 
                placeholder='Your Subject' 
                className='form__control' 
                required
              />
            </div>
          </div>

          <div className='form__input-div'>
            <textarea 
              name='message'
              placeholder='Your Message' 
              className='form__control textarea'
              required
            ></textarea>
          </div>

          <button type="submit" className='button'>
            Send Message
            <span className='button__icon contact__button-icon'>
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact;