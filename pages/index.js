import React from "react";
import Link from 'next/link';
import styles from "/styles/homepage.module.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

export default function HomePage() {
    return (
        <div>
            <Navbar/>
            <HomePageBody/>
            <Footer/>
        </div>
    );
}


function HomePageBody() {
    return (
        <div className={styles.homePageBody}>
            <div className={styles.leftContainer}>
                <Link href="/data_structures"><label>Data Structures</label></Link>
                <Link href="/data_structures/array">
                    <div className={styles.demoVisualizer}>
                        Array
                    </div>
                </Link>
                <Link href="/data_structures/linked_list">
                    <div className={styles.demoVisualizer}>
                        Linked List
                    </div>
                </Link>
            </div>
            <div className={styles.rightContainer}>
                <Link href="/algorithms"><label>Algorithms</label></Link>
                <Link href="/algorithms/sorting">
                    <div className={styles.demoVisualizer}>
                        Sorting
                    </div>
                </Link>
                <Link href="/algorithms/searching">
                    <div className={styles.demoVisualizer}>
                        Searching
                    </div>
                </Link>
            </div>
        </div>
    );
}
