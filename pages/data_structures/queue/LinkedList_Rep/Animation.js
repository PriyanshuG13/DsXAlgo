import React, {Component} from 'react';
import styles from '/styles/linked_list.module.css';
import {Animations} from '../../Linked_List/Animation/Animation.js';

let array = [];

class Animation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            data: 0,
        }
        this.head = null;
        this.size = 0;
        this.changeData = this.changeData.bind(this);
    }

    componentDidMount() {
        this.resetList();
    }

    changeData = (event) => {
        this.setState({
            data: event.target.value
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

    Insert(data) {
        let node = new Node(data);
        let current = this.head;
        let p = 0;
        if (this.size === 10) {
            alert(`Maximum Limit(10) Reached!!!!`);
            return;
        }
        if (!this.head) {
            this.head = node;
        } else {
            while (current.next) {
                ++p;
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
        }
        this.size++;
        array.push(data);
        this.setState({array});
        setTimeout(() => {
            this.print(data);
        }, 100);
    }

    Delete() {
        let current;
        if (!this.head) {
            alert(`Nothing to Delete!!!!`);
            return;
        } else {
            current = this.head.next;
            this.head = current;
        }
        this.size--;
        array.shift();
        setTimeout(() => {
            this.setState({array});
        }, 10000);
        Animations(2, this.state.array.length, 0);
    }

    print(data) {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
        Animations(1, this.state.array.length,this.state.array.length-1);
    }

    Move() {
        Animations(3, this.state.array.length);
    }

    render() {
        const {array, data} = this.state;
        return (
            <div>
                <div>
                    <h1 style={{fontFamily: "Bowlby One SC"}}>
                        Queue Linked List Representation
                    </h1>
                </div>
                <div className={styles._container} align={'center'}>
                    <div>
                        <div className={styles.CloudW}
                             style={{backgroundImage: "url('/Train Element/CloudW.svg')"}}>
                            <input className={styles.Input} placeholder={"Value"} onChange={this.changeData}/>
                        </div>
                        <button className={styles.CloudW} onClick={() => this.Insert(data)}
                                style={{backgroundImage: "url('/Train Element/CloudW.svg')"}}>
                            <span>EnQueue</span>
                        </button>
                        <button className={styles.CloudW} onClick={() => this.Delete()}
                                style={{backgroundImage: "url('/Train Element/CloudW.svg')"}}>
                            <span>DeQueue</span>
                        </button>
                        <button className={styles.CloudW} onClick={() => this.resetList()}
                                style={{backgroundImage: "url('/Train Element/CloudW.svg')"}}>
                            <span>Reset</span>
                        </button>
                        {/*<button className={styles.CloudW} onClick={() => this.GenerateNew()}
                                    style={{backgroundImage: "url('/Train Element/CloudW.svg')",fontSize:"1vw"}}>
                                <span>Random List</span>
                            </button>*/}
                    </div>
                    <div id={styles.Anime_container}
                         style={{backgroundImage: "url('/Train Element/Train_BG.svg')"}}>
                        <div id={styles.helicopter}
                             style={{backgroundImage: "url('/Train Element/HeliL.svg')"}}>
                            <div id={styles.heli_train}
                                 style={{backgroundImage: "url('/Train Element/Train_Node.svg')"}}>
                                |&nbsp;&nbsp;{data}&nbsp;&nbsp;|
                            </div>&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <div id={styles.train_head}
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
                        <div id={styles.train_tail}
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
