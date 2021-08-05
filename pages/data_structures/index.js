import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

export default function DataStructures() {
    return (
        <div>
            <Navbar/>
            <div>
                Data Structures
            </div>
            <Footer style={{position: "absolute", bottom: 0}}/>
        </div>
    );
}
