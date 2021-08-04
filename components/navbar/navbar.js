import React from "react";
import Head from "next/head";
import Link from 'next/link'
import styles from "./navbar.module.css";

export default function Navbar() {
    return(
        <div>
            <Head>
                <title>DsXAlgo</title>
            </Head>
            <div className={styles.navBar}>
                <div className={styles.navHeader}>
                    Data Structures and Algorithms
                </div>
                <div className={styles.navPart}/>
                <ul className={styles.menu}>
                    <li className={styles.options}><Link href="/">Home</Link></li>
                    <li className={styles.options}><Link href="/data_structures">Data Structures</Link></li>
                    <li className={styles.options}><Link href="/algorithms">Algorithms</Link></li>
                    <li className={styles.options}><Link href="/about_us">About us</Link></li>
                    <li className={styles.options}><Link href="/feedback">Feedback</Link></li>
                </ul>
            </div>
        </div>
    );
}
