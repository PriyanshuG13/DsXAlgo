import React from "react";
import styles from "/styles/linked_list.module.css";
import Navbar from "/components/navbar/navbar";
import Footer from "/components/footer/footer";
import Controller from "/components/controller/controller";
import Animation from "./Animation";

export default function LinkedList() {
    return (
        <div>
            <Navbar/>
            <div className={styles.visualizer}>
                <Animation/>
                <Controller style={{width:"70%"}}/>
            </div>
            <Footer style={{position: "absolute", bottom: 0}}/>
        </div>
    );
}
