import React from "react";
import styles from "./footer.module.css";
import * as icons from 'react-icons/fa';

export default function Footer(props) {
    return(
        <div className={styles.footer} style={props.style}>
            Copyright &#169;2021
            <img src="/Full_Logo.png" width="6%"/>
            <icons.FaGithub color="white" size="30px"/>
            <icons.FaLinkedin color="white" size="30px"/>
            <icons.FaGoogle color="white" size="30px"/>
        </div>
    );
}
