import React, { useState } from 'react';
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { NumberRange } from './Utils';


const Year = ({onClick}) => {
    const [currentYear, setCurrentYear] = useState(parseInt(moment().format('Y')));

    const handleBack = (direction) => {
        if (direction === 'forward') {
            return setCurrentYear(+currentYear + 12);
        }
        return setCurrentYear(+currentYear - 12);
    };



    const addYears = (amount, currentYear) => {
        // returns an array of years
        return NumberRange(currentYear-11, amount);
    };



    return (
        <React.Fragment>
        <Grid container>
            <Grid container item xs={12}>
                <Grid item xs={3}>
                    <Button color="secondary" onClick={() => handleBack('back')}>
                    Bakåt
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    Välj år
                </Grid>

                <Grid item xs={3}>
                    <Button color="secondary" onClick={() => handleBack('forward')}>
                        Framåt
                    </Button>
                </Grid>

            </Grid>
            {addYears(12, currentYear).map((year) =>
                <Grid item xs={4} key={year}>
                    <Button color="secondary" onClick={() => onClick(year)}>
                    {year}
                    </Button>
                </Grid>)}
        </Grid>
        </React.Fragment>
    )
};

export default Year;
