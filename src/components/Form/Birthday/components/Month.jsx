import React from 'react';
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const Month = ({onClick}) => {
    const Months = moment.months();


    return (
        <div>
            <Grid container>
                {Months.map((month) =>
                    <Grid item xs={4} key={month}>
                        <Button color="secondary" onClick={() => onClick(month)}>
                            {month}
                        </Button>
                    </Grid>)}
            </Grid>
        </div>
    )
};

export default Month;
