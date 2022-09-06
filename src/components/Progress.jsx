import * as React from 'react';
import { Navigate, useNavigate } from "react-router-dom"
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{  display: 'flex', alignItems: 'center' }}>
            <Box sx={{  width: '100%', mr: 1 }}>
                <LinearProgress color='inherit'  variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.Primary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel() {

    const navigate = useNavigate();

    const [progress, setProgress] = React.useState(10);
    // console.log(progress)
    if(progress === 99){
        navigate("/Login");
    }

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 1 : prevProgress + 1));
        }, 60);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Box sx={{  width: '100%' }}>
            <LinearProgressWithLabel value={progress} />
        </Box>
    );
}

