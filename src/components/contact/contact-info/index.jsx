import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import "./style.scss";

const ContactInfo = () => {
    return (
        <div className="contact-info-box">
            <h4>
                I would be happy to answer any questions you may have about
                freelance projects or Open position!
            </h4>
            <div className="contact-option">
                <FaPhoneAlt />
                <span className="text">+91 9782345594</span>
            </div>
            <div className="contact-option">
                <MdEmail />
                <span className="text">
                    <a href="mailto:adityarajshekhawat78@gmail.com">
                        adityarajshekhawat78@gmail.com
                    </a>
                </span>
            </div>
        </div>
    );
};

export default ContactInfo;
