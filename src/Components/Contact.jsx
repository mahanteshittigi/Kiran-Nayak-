import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub, FaSnapchat } from "react-icons/fa6";


const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Me</h1>
            <p className="contact-description">Feel free to reach out for collaborations or just a friendly chat!</p>
            <form className="contact-form">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" required />

                <label>Email</label>
                <input type="email" placeholder="Enter your email" required />

                <label>Message</label>
                <textarea placeholder="Enter your message" rows="5" required></textarea>

                <button type="submit">Send Message</button>
            </form>
            <footer className="contact-footer">
                <a href="https://www.instagram.com/kiran_.00_/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
                <a href="https://www.snapchat.com/in/Mahanteshittigi/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaSnapchat /></a>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
            </footer>
        </div>
    );
}

export default Contact