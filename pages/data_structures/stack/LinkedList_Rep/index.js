import React from 'react';
import Head from "next/head";
import styles from "/styles/linked_list.module.css";
import Navbar from "/components/navbar/navbar";
import Animation from "./Animation.js"

function Stack_LinkedList() {
    return (
        <div>
            <Head>
                <title>Stack(Linked List)</title>
                <link rel="icon" href="/logo.png"/>
            </Head>
            <Navbar/>
            <div className={styles.full}>
                <Animation/>
                <div className={styles.Print}>
                </div>
            </div>
        </div>
    )
}

export default Stack_LinkedList;
