import React from 'react';

const Week2 = () => {

    return (
        <div>
            <h3>Länk till github</h3>
            <a href="https://github.com/anll16/jsramverk" target="_blank" rel="noopener noreferrer">@anll16/jsramverk</a>

            <p>Jag har hämtat all min inspiration från material-ui. Det är ett design ramverk baserad på något som kallas för material design. Jag har även lånat de grafiska komponenterna därifrån. </p>
            <p>Eftersom man skulle designa en egen datepicker så byggde jag en ganska simpel från grunden. Jag utgick ifrån den svenska standarden med år, månad och dag. När man klickar på datumfältet så får man helt enkelt börja med att välja år, därefter månad och tillslut dag. Resultatet skickas sedan till inputfältet som validerar det och skickar vidare det till statet. </p>
            <p>Jag försökte hålla det så enkelt som möjligt för användaren.</p>
        </div>
    )
};

export default Week2;
