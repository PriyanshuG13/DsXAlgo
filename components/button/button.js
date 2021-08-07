import styles from "./button.module.css"

const Button = (props) => {
    return(
        <button className={styles.Button} {...props}>
            {props.child}
        </button>
    );
}


