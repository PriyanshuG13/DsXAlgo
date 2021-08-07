import React from "react";
import PropTypes from 'prop-types';
import styles from "./controller.module.css";
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';

export default function Controller(props) {
    const {value, handleChange} = props

    function ValueLabelComponent(props) {
        const {children, open, value} = props;

        return (
            <Tooltip open={open} enterTouchDelay={0} placement="top" title={value/10}>
                {children}
            </Tooltip>
        );
    }

    ValueLabelComponent.propTypes = {
        children: PropTypes.element.isRequired,
        open: PropTypes.bool.isRequired,
        value: PropTypes.number.isRequired,
    };

    return (
        <div className={styles.controllerLayout} style={props.style}>
            <button onClick={props.stop}>Backward</button>
            {props.paused ? <button onClick={props.playPause}>Play</button>
                    : <button onClick={props.playPause}>Pause</button>}
            <button onClick={props.stop}>Forward</button>
            <button onClick={props.stop}>Stop</button>
            <button onClick={props.stop}>Finish</button>
            <div className={styles.speedSlider}>
                <label>Speed:</label>
                <Slider value={value} onChange={(e,val) => handleChange(e, val)}
                        ValueLabelComponent={ValueLabelComponent}
                        aria-labelledby="custom thumb label"/>
            </div>
        </div>
    );
}
