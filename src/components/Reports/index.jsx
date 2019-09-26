import React from 'react';
import Week1 from "./Week1";

const Reports = ({match}) => {
    const week = match.params.week;

    const arrayOfReports = [
        { name: 1, Component: Week1 }
    ];
    const FindComponent = arrayOfReports.find(({name}) => name.toString() === week );

    if (!FindComponent) {
        return (
            <>
                Det finns ingen sådan rapport
            </>
        )
    }

    return (
        <>
            <h1>
                Vecka {week}!
            </h1>
            <FindComponent.Component />
        </>
    );
};

export default Reports;
