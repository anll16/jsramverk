import React, { useState } from 'react';
import Year from './components/Year'
import Month from "./components/Month";
import Days from "./components/Days";
import moment from "moment";

const Birthday = ({done}) => {
    const [pickedMonth, setPickedMonth] = useState('');
    const [pickedDay, setPickedDay] = useState('');
    const [pickedYear, setPickedYear] = useState(undefined);

    let theDate = moment();

    if (!pickedYear) {
        return (
            <Year onClick={(value) => setPickedYear(value)}/>
        )
    }

    theDate.set('year', parseInt(pickedYear));

    if (!pickedMonth) {
        return (
            <Month onClick={(value) => setPickedMonth(value)} />
        )
    }

    const AllMonths = moment.months();

    theDate.set('month', AllMonths.indexOf(pickedMonth));

    if (!pickedDay) {
        return (
            <Days onClick={(value) => setPickedDay(value)} pickedMonth={theDate} />
        )
    }

    theDate.set('date', parseInt(pickedDay));


    done(theDate.format("YYYY-MM-DD"));

    return null;


};

export default Birthday;
