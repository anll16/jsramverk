import React from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { NumberRange } from "./Utils";

const Days = ({pickedMonth, onClick}) => {

    const arrayMonth = NumberRange(1, pickedMonth.daysInMonth());

    return (
        <div>
            <Grid container>
                {arrayMonth.map((day) =>
                    <Grid item xs={2} key={day}>
                        <Button color="secondary" onClick={() => onClick(day)}>
                            {day}
                        </Button>
                    </Grid>)}
            </Grid>
        </div>
    )

};

export default Days;
