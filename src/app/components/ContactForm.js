'use client'

import styles from "@/app/contact/contact.module.css";
import { useState } from "react";

const ContactForm = () => {
    
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        message: ""
    })
    const [status, setstatus] = useState(null);

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        
        setUser((prevUser) => ({
            ...prevUser,
            [name] : value 
        }));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {"Content_Type":"application/json"},
                body: JSON.stringify({
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    message: user.message
                })
            })

            // set the status based on the response from the api route
            if(response.status === 200){
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    message: ""
                })
                setstatus("success");
            }else{
                setstatus("error");
            }
        } catch (e) {
            console.log(e);
        }

    }

    return(

        <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor="username" className={styles.label}>
                    Enter your Name: 
                    <input onChange={handleChange} value={user.username} type="text" name="username" id="username" placeholder="Enter your name" autoComplete="off" required/>
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                    Enter your Email: 
                    <input value={user.email} onChange={handleChange} type="text" name="email" id="email" placeholder="Enter your email" autoComplete="off" required/>
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="number" className={styles.label}>
                    Enter your Phone: 
                    <input value={user.phone} onChange={handleChange} type="text" name="phone" id="phone" placeholder="Enter your phone" autoComplete="off" required/>
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                    Message:
                    <textarea onChange={handleChange} value={user.message} name="message" id="message" placeholder="Enter your message" rows={5} autoComplete="off" required />
                </label>
            </div>

            <div>
                {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. please try again</p>}

                <button type="submit" >Send Message</button>
            </div>
        </form>
    );
};

export default ContactForm;