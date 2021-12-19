import React from 'react';
import Head from "next/head";
import styles from "/styles/array.module.css";
import Navbar from "/components/navbar/navbar";
import Animation from "./Animation.js"

function Array() {
    return (
        <div>
            <Head>
                <title>Queue(Array)</title>
                <link rel="icon" href="/logo.png"/>
            </Head>
            <Navbar/>
            <div className={styles.full}>
                <div className={styles.container}>
                    <Animation/>
                    <div style={{display: "inline-block"}}>
                        <div className={styles.info_display}>
                            About Array
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Array;
