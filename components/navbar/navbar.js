import React from "react";
import styles from "./navbar.module.css";
import Head from "next/head";

export default function Navbar() {
    return(
        <div>
            <Head>
                <title>DsXAlgo</title>
            </Head>
            <div className={styles.navBar}>
                Navbar
            </div>
        </div>
    );
}
