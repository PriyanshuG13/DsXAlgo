import React, {Component} from 'react';
import styles from '/styles/linked_list.module.css';
import {Animations} from './Animation.js';

let array = [];

class Animation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            data: 0,
            posi: 0
        }
        this.head = null;
        this.size = 0;
        this.changeData = this.changeData.bind(this);
        this.changePosi = this.changePosi.bind(this);
    }

    componentDidMount() {
        this.resetList();
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

    resetList() {
        delete (this.head);
        this.size = 0;
        array = [];
        this.setState({array});
    }

    GenerateNew() {
        delete (this.head);
        this.size = 0;
        for (let i = 1; i <= 10; ++i) {
            this.Insert(randomIntFromInterval(1, 50), i);
        }
    }

    Insert(data, p) {
        let node = new Node(data);
        let current = this.head;
        if (this.size === 10) {
            alert(`Maximum Limit(10) Reached!!!!`);
            return;
        }
        if (p >= 11) {
            alert(`Can't Insert more then 10!!!!`);
            return;
        }
        if (this.size + 1 < p) {
            alert(`Enter Valid Position!!!!`);
            return;
        }
        if (!this.head || p === 1) {
            if (p === 1)
                node.next = current;
            this.head = node;
        } else {
            for (let i = 1; i < p - 1; ++i) {
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
        }
        this.size++;
        array.splice(p - 1, 0, data);
        this.setState({array});
        setTimeout(() => {
            this.print(data, p);
        }, 100);
    }

    Delete(data) {
        let del = this.head;
        let i = 0;
        let current;
        if (!this.head) {
            alert(`Nothing to Delete!!!!`);
            return;
        }
        if (del.value === data) {
            this.head = this.head.next;
        } else {
            while (del.value !== data && del.next) {
                current = del;
                del = del.next;
                ++i;
            }
            if (del.value !== data) {
                alert(`Data not Present!!!!`);
                return;
            }
            current.next = del.next;
        }
        this.size--;
        array.splice(i, 1);
        setTimeout(() => {
            this.setState({array});
        }, 10000);
        Animations(2, this.state.array.length, i);
    }

    print(data, p) {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
        Animations(1, this.state.array.length, p - 1);
    }

    Move() {
        Animations(3, this.state.array.length);
    }

    /*Animaiton() {
        for(let i=1,j=1;i<=10;++i)
            setTimeout(() => {
                if(i<=3 || i===6 || i===7 || i===8 || i===9)
                    this.Insert(randomIntFromInterval(1, 50), j++)
                else
                    this.Delete(array[Math.floor(Math.random() * array.length)])
            }, i*20000)
    }*/

    render() {
        const {array, data, posi} = this.state;
        return (
            <div className={styles.animationContainer}>
                <div className={styles.controller}>
                    <div className={styles.CloudW}
                         style={{backgroundImage: "url('/Train Element/CloudW.svg')",
                             zIndex:`${randomIntFromInterval(0, 2)}`}}>
                        <input className={styles.Input} placeholder={"Value"} onChange={this.changeData}/>
                    </div>
                    <div className={styles.CloudW}
                         style={{backgroundImage: "url('/Train Element/CloudW.svg')",
                             zIndex:`${randomIntFromInterval(0, 2)}`}}>
                        <input className={styles.Input} placeholder={"Position"} onChange={this.changePosi}/>
                    </div>
                    <button className={styles.CloudW} onClick={() => this.Insert(data, posi)}
                            style={{backgroundImage: "url('/Train Element/CloudW.svg')",
                                zIndex:`${randomIntFromInterval(0, 2)}`}}>
                        <span>Insert</span>
                    </button>
                    <button className={styles.CloudW} onClick={() => this.Delete(data)}
                            style={{backgroundImage: "url('/Train Element/CloudW.svg')",
                                zIndex:`${randomIntFromInterval(0, 2)}`}}>
                        <span>Delete</span>
                    </button>
                    <button className={styles.CloudW} onClick={() => this.resetList()}
                            style={{backgroundImage: "url('/Train Element/CloudW.svg')",
                                zIndex:`${randomIntFromInterval(0, 2)}`}}>
                        <span>Reset</span>
                    </button>
                </div>
                <div className={styles.animation}>
                    <div className={styles.anime}
                         style={{backgroundImage: "url('/Train Element/Train_BG.svg')"}}>
                        <div className={styles.helicopter}
                             style={{backgroundImage: "url('/Train Element/HeliL.svg')"}}>
                            <div id={styles.heli_train}
                                 style={{backgroundImage: "url('/Train Element/Train_Node.svg')"}}>
                                |&nbsp;&nbsp;{data}&nbsp;&nbsp;|
                            </div>&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <div className={styles.train_head}
                             style={{backgroundImage: "url('/Train Element/Train_HeadL.svg')"}}>Head
                        </div>
                        {array.map((value, idx) => (
                            <div className={styles.train_car} key={idx}
                                 style={{backgroundImage: "url('/Train Element/Train_Node.svg')"}}>
                                <span>
                                    |&nbsp;&nbsp;{value}&nbsp;&nbsp;|
                                </span>
                            </div>
                        ))}
                        <div className={styles.train_tail}
                             style={{backgroundImage: "url('/Train Element/Train_TailL.svg')"}}>Tail
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next;
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


export default Animation;
