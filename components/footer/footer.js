import React from "react";
import styles from "./footer.module.css";
import * as icons from 'react-icons/fa';

export default function Footer() {
    return(
        <div className={styles.footer}>
            <icons.FaGithub color="white" size="30px"/>
            <icons.FaLinkedin color="white" size="30px"/>
            <icons.FaGoogle color="white" size="30px"/>
        </div>
    );
}
