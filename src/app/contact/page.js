
import React from "react";
import ContactCard from "../components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "../components/ContactForm";

const Contact = () =>  {
  return (
      <>
        <div className={styles.container}>
        <h1 >Contact Us</h1>
        <ContactCard/>
        
        <section className={styles.contact_section}>
          <h2>We'd love to hear <span>form you</span></h2>

          <ContactForm/>
        </section>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.991559855901!2d67.0846888744322!3d24.932357442378652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f4eb7183b97%3A0x35709df45c0003aa!2sLucky%20One%20Mall!5e0!3m2!1sen!2s!4v1742770543520!5m2!1sen!2s" width={600} height={450} style={{border:0}} className={styles.mapping} loading="lazy"></iframe>
        
      </>
  );
};

export default Contact;


