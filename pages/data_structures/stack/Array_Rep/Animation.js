import React, {Component} from 'react';
import styles from "/styles/array.module.css";
import {Animations} from "../../Array/Animation/Animation";

let array = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "];

class Animation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
            data: 0,
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

    resetArray() {
        array = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "];
        for (let i = 0; i < 10; ++i) {
            array.splice(i, 1, randomIntFromInterval(1, 99));
        }
        console.log(array);
        this.setState({array});
        this.size = 10;
    }

    Insert(data) {
        if (this.size < 0)
            this.Clear();
        else if (data === "")
            return;
        else if (this.size >= this.state.max)
            alert(`Maximum Limit Reached(10).`);
        else if (data > 99)
            alert(`Can't Insert 3 digit value.`);
        else {
            document.getElementById("show1").style.opacity = "1";
            array.splice(this.size, 0, data);
            array.pop();
            this.setState({array});
            Animations(1, this.size, 4);
            setTimeout(() => {
                document.getElementById("show1").style.opacity = "0"
                document.getElementById("Top").innerText = this.size;
            }, 2500)
            this.size++;
        }
    }

    Delete() {
        document.getElementById("show2").style.opacity = "1";
        if (this.size <= 0) {
            this.Clear();
        } else {
            array.splice(this.size - 1, 1, " ");
            Animations(2, this.size - 1, 4);
            setTimeout(() => {
                this.setState({array});
            }, 1100)
            setTimeout(() => {
                document.getElementById("show2").style.opacity = "0";
                document.getElementById("Top").innerText = this.size;
            }, 2500)
            this.size--;
        }
    }

    Clear() {
        array = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "];
        this.setState({array});
        this.size = 0;
    }

    Animation() {
        for (let i = 1; i <= 10; ++i)
            setTimeout(() => {
                if (i <= 3 || i === 6 || i === 7 || i === 8 || i === 9)
                    this.Insert(randomIntFromInterval(1, 50))
                else
                    this.Delete(array[Math.floor(Math.random() * this.size)])
            }, i * 5000)
    }

    render() {
        const {array, data, max} = this.state;
        return (
            <div className={styles.array_display}>
                <div>
                    <h1 style={{fontFamily: "Bowlby One SC"}}>
                        Stack Array Representation
                    </h1>
                </div>
                <div align='center'>
                    <input className={styles.Input} placeholder={"Value"} onChange={this.changeData}/>{" "}
                    <button onClick={() => this.Insert(data)}><span>PUSH</span></button>
                    {" "}
                    <button onClick={() => this.Delete()}><span>POP</span></button>
                    {" "}
                    <button onClick={() => this.Clear()}><span>Clear</span></button>
                    {" "}
                    <button onClick={() => this.resetArray()}><span>Random</span></button>
                    <div className={styles.array_full} style={{display: "flex", flexDirection: "row", marginTop: "0"}}>
                        <div className={styles.array_info} style={{marginLeft: "10%"}}>
                            <div style={{display: "flex", flexDirection: "column", margin: "1vw 0"}}>
                                <div id={"show1"} style={{display: "flex", flexDirection: "row", opacity: 0}}>
                                    <div className={styles.infoText} style={{marginRight: "1vw",}}>Pushing<br/>Value:
                                    </div>
                                    <div className={styles.array_box}
                                         style={{backgroundColor: "orange", overflow: "visible"}}>
                                    <span id={styles.valMove}>
                                        {data}
                                    </span></div>
                                </div>
                                <div style={{display: "flex", flexDirection: "row", marginLeft: "1.2vw"}}>
                                    <div className={styles.infoText} style={{marginRight: "2vw",}}>Max<br/>Size:</div>
                                    <div className={styles.array_box} style={{backgroundColor: "orange"}}>{max}</div>
                                </div>
                                <div style={{display: "flex", flexDirection: "row", marginLeft: "1.1vw"}}>
                                    <div className={styles.infoText}
                                         style={{marginRight: "2vw", marginTop: "1vw"}}>TOP:
                                    </div>
                                    <div className={styles.array_box} style={{backgroundColor: "orange"}}>
                                        <span id={"Top"}>
                                            {"0"}
                                        </span>
                                    </div>
                                </div>
                                <div id={"show2"} style={{display: "flex", flexDirection: "row", opacity: 0}}>
                                    <div className={styles.infoText} style={{marginRight: "1.2vw",}}>Popped<br/>Value:
                                    </div>
                                    <div className={styles.array_box} style={{backgroundColor: "orange"}}>
                                    <span id={styles.valRemove}>
                                        {" "}
                                    </span></div>
                                </div>
                            </div>
                        </div>
                        <div style={{marginLeft: "25%"}}>
                            <div className={styles.array_container} style={{marginTop: "0.5vw"}}>
                                {array.map((value, idx) => (
                                    <div style={{display: "flex", flexDirection: "row"}}>
                                        <div className={styles.Index} id={`Idx${idx}`} style={{margin: "0vw 0vw"}}>
                                            {idx}
                                        </div>
                                        <div className={styles.array_box} id={styles.stack_box} key={idx + 3}>
                                            <span id={`Val${idx}`} style={{position: "relative"}}>
                                                {value}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
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
