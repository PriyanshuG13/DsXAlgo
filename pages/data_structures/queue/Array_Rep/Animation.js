import React, {Component} from 'react';
import styles from "/styles/array.module.css";
import {Animations} from "../../Array/Animation/Animation";

let array = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "];

class Animation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
            data: 0,
            max: 20,
        }
        this.size = 0;
        this.head=0;
        this.tail=0;
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

    resetArray() {
        array = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "];
        for (let i = 0; i < 20; ++i) {
            array.splice(i, 1, randomIntFromInterval(1, 99));
        }
        console.log(array);
        this.setState({array});
        this.size = 20;
    }

    Insert(data) {
        if (this.size < 0)
            this.Clear();
        else if(data==="")
            return;
        else if (this.size >= this.state.max)
            alert(`Maximum Limit Reached(20).`);
        else if (data > 99)
            alert(`Can't Insert 3 digit value.`);
        else {
            document.getElementById("show1").style.opacity="1";
            array.splice(this.size, 1, data);
            this.setState({array});
        }
        Animations(1,this.size,5);
        setTimeout(() => {
            document.getElementById("show1").style.opacity="0";
            document.getElementById("Tail").innerText=this.tail;
        }, 2500)
        this.size++;
        this.tail++;

    }

    Delete() {
        document.getElementById("show2").style.opacity="1";
        if (this.size <= 0) {
            this.Clear();
        } else {
            array.splice(this.head, 1," ");
            Animations(2,this.head,5);
            setTimeout(() => {
                this.setState({array});
            }, 1100)
            setTimeout(() => {
                document.getElementById("show2").style.opacity="0";
                document.getElementById("Head").innerText=this.head;
            }, 2500)
            this.head++;
        }
    }

    Clear() {
        array = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "];
        this.setState({array});
        this.size = 0;
        this.head=0;
        this.tail=0;
    }

    /*Animation() {
        for (let i = 1; i <= 10; ++i)
            setTimeout(() => {
                if (i <= 3 || i === 6 || i === 7 || i === 8 || i === 9)
                    this.Insert(randomIntFromInterval(1, 50))
                else
                    this.Delete(array[Math.floor(Math.random() * this.size)])
            }, i * 5000)
    }*/

    render() {
        const {array, data, max} = this.state;
        return (
            <div className={styles.array_display}>
                <div>
                    <h1 style={{fontFamily: "Bowlby One SC"}}>
                        Queue Array Representation
                    </h1>
                </div>
                <div align='center'>
                    <input className={styles.Input} placeholder={"Value"} onChange={this.changeData}/>{" "}
                    <button onClick={() => this.Insert(data)}><span>Enqueue</span></button>
                    {" "}
                    <button onClick={() => this.Delete()}><span>Dequeue</span></button>
                    {" "}
                    <button onClick={() => this.Clear()}><span>Clear</span></button>
                    {" "}
                    <button onClick={() => this.resetArray()}><span>Random</span></button>
                    <div className={styles.array_full}>
                        <div className={styles.array_info}>
                            <div style={{display: "flex", flexDirection: "row", margin: "1vw 0"}}>
                                <div id={"show1"} style={{display: "flex", flexDirection: "row", opacity: "0"}}>
                                    <div className={styles.infoText} style={{marginLeft: "1vw",}}>Enqueuing<br/>Value:
                                    </div>
                                    <div className={styles.array_box} style={{backgroundColor: "orange",overflow:"visible"}}>
                                    <span id={styles.valMove}>
                                        {data}
                                    </span></div>
                                </div>
                                <div className={styles.infoText} style={{marginLeft: "1vw",}}>Max<br/>Size:</div>
                                <div className={styles.array_box} style={{backgroundColor: "orange"}}>{max}</div>
                                <div style={{marginLeft: "1vw"}}>
                                    <div className={styles.array_box} style={{backgroundColor: "orange"}}>
                                        <span id={"Head"}>
                                            0
                                        </span></div>
                                    <div className={styles.infoText}>HEAD:</div>
                                </div>
                                <div>
                                    <div className={styles.array_box} style={{backgroundColor: "orange"}}>
                                        <span id={"Tail"}>
                                            0
                                        </span></div>
                                    <div className={styles.infoText}>TAIL:</div>
                                </div>
                                <div id={"show2"} style={{display: "flex", flexDirection: "row", opacity: "0"}}>
                                    <div className={styles.infoText} style={{marginLeft: "1vw",}}>Dequeued<br/>Value:
                                    </div>
                                    <div className={styles.array_box} style={{backgroundColor: "orange"}}>
                                    <span id={styles.valRemove}>
                                        {" "}
                                    </span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.array_container}>
                        {array.map((value, idx) => (
                            <div style={{display: "inline-block"}}>
                                <div className={styles.array_box} key={idx+3}>
                                    <span id={`Val${idx}`} style={{position:"relative"}}>
                                        {value}
                                    </span>
                                </div>
                                <div className={styles.Index} id={`Idx${idx}`} style={{border: 0}}>
                                    {idx}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div id={styles.Circle}/>
                </div>
            </div>
        )
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Animation;
