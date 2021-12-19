import React, {Component} from 'react';
import styles from '/styles/array.module.css';
import Animations from './Animation.js';

let array = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "];

export default class Animation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
            data: " ",
            posi: 0,
            max: 20,
        }
        this.size = 0;
    }

    componentDidMount() {
        /*this.resetArray();
        setTimeout(() => this.Animation(), 100);*/
    }

    changeData = (event) => {
        this.setState({
            data: event.target.value
        });
    };

    changePosi = (event) => {
        this.setState({
            posi: event.target.value
        });
    };

    resetArray() {
        array = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "];
        for (let i = 0; i < 20; ++i) {
            array.splice(i, 1, randomIntFromInterval(1, 99));
        }
        console.log(array);
        this.setState({array});
        this.size = 20;
    }

    Insert(data, p) {
        document.getElementById("show1").style.opacity="1";
        if (this.size < 0)
            this.Clear();
        else if(data===" ")
            return;
        else if (this.size + 1 < p)
            return;
        else if (this.size >= this.state.max)
            alert(`Maximum Limit Reached(20).`);
        else if (data > 99)
            alert(`Can't Insert 3 digit value.`);
        else {
            array.splice(p - 1, 0, data);
            array.pop();
        }
        this.setState({array});
        this.size++;
        Animations(1,p-1);
        setTimeout(() => {
            document.getElementById("show1").style.opacity="0";
        }, 1200)
    }

    Delete(p) {
        document.getElementById("show2").style.opacity="1";
        if (this.size <= 0) {
            this.Clear();
        }
        else if(p===0){
            alert(`Enter a Position to Delete`);
        }
        else {
            array.splice(p-1, 1);
            array.push(" ");
            Animations(2,p-1,3);
            setTimeout(() => {
                this.setState({array});
                document.getElementById("show2").style.opacity="0";
            }, 1200)
            this.size--;
        }
    }

    Clear() {
        array = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "];
        this.setState({array});
        this.size = 0;
    }

    /*Animation() {
        for (let i = 1, j = 1; i <= 10; ++i)
            setTimeout(() => {
                if (i <= 3 || i === 6 || i === 7 || i === 8 || i === 9)
                    this.Insert(randomIntFromInterval(1, 50), j++)
                else
                    this.Delete(array[Math.floor(Math.random() * this.size)])
            }, i * 5000)
    }*/

    render() {
        const {array, data, posi, max} = this.state;
        return (
            <div className={styles.animation}>
                <div className={styles.controller}>
                    <input placeholder={"Value"} onChange={this.changeData}/>{" "}
                    <input placeholder={"Position"} onChange={this.changePosi}/>{" "}
                    <button onClick={() => this.Insert(data, posi)}><span>Insert</span></button>
                    <button onClick={() => this.Delete(posi)}><span>Delete</span></button>
                    <button onClick={() => this.Clear()}><span>Clear</span></button>
                    <button onClick={() => this.resetArray()}><span>Random</span></button>
                </div>
                <div className={styles.array_info}>
                    <div style={{display: "flex", flexDirection: "row", margin: "1vw 0"}}>
                        <div id={"show1"} style={{display: "flex", flexDirection: "row",opacity:"0"}}>
                            <div className={styles.infoText} style={{marginLeft: "1vw",}}>Inserting<br/>Value:</div>
                            <div className={styles.array_box} style={{backgroundColor: "orange",overflow:"visible"}}>
                                <span id={styles.valMove}>
                                    {data}
                                </span></div>
                        </div>
                        <div className={styles.infoText} style={{marginLeft: "1vw",}}>Max<br/>Size:</div>
                        <div className={styles.array_box} style={{backgroundColor: "orange"}}>{max}</div>
                        <div id={"show2"} style={{display: "flex", flexDirection: "row",opacity:"0"}}>
                            <div className={styles.infoText} style={{marginLeft: "1vw",}}>Deleted<br/>Value:</div>
                            <div className={styles.array_box} style={{backgroundColor: "orange"}}>
                                <span id={styles.valRemove}>
                                    {" "}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.array_container}>
                    {array.map((value, idx) => (
                        <div style={{display: "inline-block"}}>
                            <div className={styles.array_box} key={idx+5}>
                                <span id={`Val${idx}`} style={{position:"relative"}}>
                                    {value}
                                </span>
                            </div>
                            <div className={styles.Index} style={{border: 0}}>
                                {idx}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
