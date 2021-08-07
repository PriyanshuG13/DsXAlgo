import React from "react";
import PropTypes from 'prop-types';
import styles from "./controller.module.css";
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';

export default function Controller(props) {
    const [value, setValue] = React.useState(30);
    const [paused, setPause] = React.useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function ValueLabelComponent(props) {
        const {children, open, value} = props;

        return (
            <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
                {children}
            </Tooltip>
        );
    }

    ValueLabelComponent.propTypes = {
        children: PropTypes.element.isRequired,
        open: PropTypes.bool.isRequired,
        value: PropTypes.number.isRequired,
    };

    const playPause = () => setPause(!paused)

    return (
        <div className={styles.controllerLayout} style={props.style}>
            {paused ? <button onClick={playPause}>Play</button>
                    : <button onClick={playPause}>Pause</button>}
            <button onClick={props.stop}>Stop</button>
            <div className={styles.speedSlider}>
                <label>Speed:</label>
                <Slider value={value} onChange={handleChange}
                        ValueLabelComponent={ValueLabelComponent}
                        aria-labelledby="custom thumb label"/>
            </div>
        </div>
    );
}
